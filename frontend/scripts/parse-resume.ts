import fs from "node:fs/promises";
import path from "node:path";
import mammoth from "mammoth";
import * as cheerio from "cheerio";
import type { Element } from "domhandler";

/**
 * Disclaimer: This was absolutely written by AI. Not that I couldn't do this, I just really did not want to.
 */

interface Education {
  institution: string;
  location: string;
  degree: string;
  gpa?: string;
  expectedGraduation?: string;
}

interface Experience {
  organization: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

interface Resume {
  education: Education[];
  skills: string[];
  experience: Experience[];
  involvement: Experience[];
}

interface ResumeSection {
  title: string;
  elements: Element[];
}

const MONTH_PATTERN =
  "(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*";

const DATE_PATTERN = new RegExp(
  `(${MONTH_PATTERN})\\s+(\\d{4})\\s*[–-]\\s*(Present|${MONTH_PATTERN}\\s+\\d{4}|\\d{4})`,
  "i",
);

function cleanText(value: string): string {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/\t+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function splitSections($: cheerio.CheerioAPI): ResumeSection[] {
  const sections: ResumeSection[] = [];

  let currentSection: ResumeSection | null = null;

  $("body")
    .children()
    .each((_, element) => {
      const tag = element.tagName.toLowerCase();

      if (tag === "h2") {
        currentSection = {
          title: cleanText($(element).text()),
          elements: [],
        };

        sections.push(currentSection);
        return;
      }

      if (currentSection) {
        currentSection.elements.push(element);
      }
    });

  return sections;
}

function parseEducation(
  $: cheerio.CheerioAPI,
  elements: Element[],
): Education[] {
  const education: Education[] = [];

  for (const element of elements) {
    if (element.tagName.toLowerCase() !== "h3") {
      continue;
    }

    const lines = $(element)
      .html()
      ?.replace(/<a[^>]*><\/a>/gi, "")
      .split(/<br\s*\/?>/i)
      .map(cleanText)
      .filter(Boolean);

    if (!lines || lines.length < 2) {
      throw new Error(
        `Expected education entry to contain institution and degree:\n${cleanText(
          $(element).text(),
        )}`,
      );
    }

    const institutionMatch = lines[0].match(/^(.+?),\s*(.+)$/);

    if (!institutionMatch) {
      throw new Error(`Could not parse institution/location:\n${lines[0]}`);
    }

    const [, institution, location] = institutionMatch;

    const degreeText = lines[1];

    const gpaMatch = degreeText.match(/,\s*(\d+(?:\.\d+)?)\s*GPA/i);

    const graduationMatch = degreeText.match(/Expected\s+(.+)$/i);

    const degree = degreeText
      .replace(/,\s*\d+(?:\.\d+)?\s*GPA/i, "")
      .replace(/\s*Expected\s+.+$/i, "")
      .trim();

    education.push({
      institution: cleanText(institution),
      location: cleanText(location),
      degree,
      ...(gpaMatch
        ? {
            gpa: gpaMatch[1],
          }
        : {}),
      ...(graduationMatch
        ? {
            expectedGraduation: cleanText(graduationMatch[1]),
          }
        : {}),
    });
  }

  return education;
}

function parseSkills($: cheerio.CheerioAPI, elements: Element[]): string[] {
  const skills: string[] = [];

  for (const element of elements) {
    if (element.tagName.toLowerCase() !== "p") {
      continue;
    }

    const text = cleanText($(element).text());

    skills.push(...text.split("•").map(cleanText).filter(Boolean));
  }

  return skills;
}

function parseBullets($: cheerio.CheerioAPI, element: Element): string[] {
  if (element.tagName.toLowerCase() !== "ul") {
    throw new Error(
      `Expected a <ul> for experience bullets, found <${element.tagName}>.`,
    );
  }

  return $(element)
    .children("li")
    .map((_, li) => cleanText($(li).text()))
    .get()
    .filter(Boolean);
}

function parseExperienceHeader(
  header: string,
  isInvolvement: boolean,
): Omit<Experience, "bullets"> {
  const dateMatch = header.match(DATE_PATTERN);

  if (!dateMatch) {
    throw new Error(`Could not find dates in experience entry:\n${header}`);
  }

  const startDate = `${dateMatch[1]} ${dateMatch[2]}`;
  const endDate = dateMatch[3];

  const headerWithoutDate = cleanText(header.slice(0, dateMatch.index));

  if (isInvolvement) {
    /*
     * HPR format:
     *
     * Aeronautics and Rocketry Enterprise - HPR,
     * Michigan Technological University
     *
     * Normal involvement format:
     *
     * Sound & Lighting Services, Jr. Technician –
     * Michigan Technological University
     *
     * Senior Tech Support Volunteer, Loose Senior Center –
     * Linden, Michigan
     */

    if (
      headerWithoutDate.startsWith("Aeronautics and Rocketry Enterprise - HPR")
    ) {
      return {
        organization: "Aeronautics and Rocketry Enterprise - HPR",
        title: "Member",
        location: "Michigan Technological University",
        startDate,
        endDate,
      };
    }

    const dashMatch = headerWithoutDate.match(/^(.+?),\s*(.+?)\s+–\s+(.+)$/);

    if (!dashMatch) {
      throw new Error(`Could not parse involvement entry:\n${header}`);
    }

    const [, first, second, location] = dashMatch;

    /*
     * Senior Tech Support has the title first:
     *
     * Senior Tech Support Volunteer, Loose Senior Center
     *
     * Other entries have organization first:
     *
     * Sound & Lighting Services, Jr. Technician
     */
    if (first.toLowerCase().includes("volunteer")) {
      return {
        organization: cleanText(second),
        title: cleanText(first),
        location: cleanText(location),
        startDate,
        endDate,
      };
    }

    return {
      organization: cleanText(first),
      title: cleanText(second),
      location: cleanText(location),
      startDate,
      endDate,
    };
  }

  const match = headerWithoutDate.match(/^(.+?),\s*(.+?)\s+–\s+(.+)$/);

  if (!match) {
    throw new Error(`Could not parse experience entry:\n${header}`);
  }

  const [, organization, title, location] = match;

  return {
    organization: cleanText(organization),
    title: cleanText(title),
    location: cleanText(location),
    startDate,
    endDate,
  };
}

function parseExperience(
  $: cheerio.CheerioAPI,
  elements: Element[],
  isInvolvement: boolean,
): Experience[] {
  const experiences: Experience[] = [];

  for (let index = 0; index < elements.length; index++) {
    const header = elements[index];

    if (header.tagName.toLowerCase() !== "h3") {
      continue;
    }

    const bulletElement = elements[index + 1];

    if (!bulletElement || bulletElement.tagName.toLowerCase() !== "ul") {
      throw new Error(
        `Expected <ul> immediately after experience:\n${cleanText(
          $(header).text(),
        )}`,
      );
    }

    const parsedHeader = parseExperienceHeader(
      cleanText($(header).text()),
      isInvolvement,
    );

    experiences.push({
      ...parsedHeader,
      bullets: parseBullets($, bulletElement),
    });

    index++;
  }

  return experiences;
}

function validateResume(resume: Resume): void {
  if (resume.education.length === 0) {
    throw new Error("No education entries found.");
  }

  if (resume.skills.length === 0) {
    throw new Error("No skills found.");
  }

  if (resume.experience.length === 0) {
    throw new Error("No experience entries found.");
  }

  if (resume.involvement.length === 0) {
    throw new Error("No involvement entries found.");
  }

  for (const experience of [...resume.experience, ...resume.involvement]) {
    if (experience.bullets.length === 0) {
      throw new Error(`No bullet points found for ${experience.organization}.`);
    }
  }
}

async function parseResume(inputPath: string): Promise<Resume> {
  const { value: html } = await mammoth.convertToHtml({
    path: inputPath,
  });

  const $ = cheerio.load(html);

  const sections = splitSections($);

  const educationSection = sections.find(
    (section) => section.title === "EDUCATION",
  );

  const skillsSection = sections.find((section) => section.title === "SKILLS");

  const experienceSection = sections.find(
    (section) => section.title === "EXPERIENCE",
  );

  const involvementSection = sections.find(
    (section) => section.title === "VOLUNTEERING & INVOLVEMENT",
  );

  if (!educationSection) {
    throw new Error("Missing EDUCATION section.");
  }

  if (!skillsSection) {
    throw new Error("Missing SKILLS section.");
  }

  if (!experienceSection) {
    throw new Error("Missing EXPERIENCE section.");
  }

  if (!involvementSection) {
    throw new Error("Missing VOLUNTEERING & INVOLVEMENT section.");
  }

  const resume: Resume = {
    education: parseEducation($, educationSection.elements),
    skills: parseSkills($, skillsSection.elements),
    experience: parseExperience($, experienceSection.elements, false),
    involvement: parseExperience($, involvementSection.elements, true),
  };

  validateResume(resume);

  return resume;
}

async function main(): Promise<void> {
  const inputPath = process.argv[2];
  const outputPath = process.argv[3] ?? "src/data/resume.json";
  console.log(outputPath);

  if (!inputPath) {
    console.error(
      "Usage: pnpm tsx parse-resume.ts <resume.docx> [output.json]",
    );
    process.exit(1);
  }

  const absoluteInputPath = path.resolve(inputPath);

  const absoluteOutputPath = path.resolve(outputPath);

  const resume = await parseResume(absoluteInputPath);

  await fs.writeFile(
    absoluteOutputPath,
    JSON.stringify(resume, null, 2) + "\n",
    "utf8",
  );

  console.log(
    `Parsed ${path.basename(absoluteInputPath)} -> ${absoluteOutputPath}`,
  );
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);

  process.exit(1);
});
