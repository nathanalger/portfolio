import { Box, Grid, List, ListItem, Typography } from "@mui/joy";
import InfoBox from "./InfoBox";
import resume from "../data/resume.json";
import type { SxProps } from "@mui/joy/styles/types";

const BoxSx = {
  px: 1,
  mb: 1,
} as SxProps;

const Resume = () => {
  return (
    <Box
      id="about-me"
      sx={{
        scrollMarginTop: "80px",
      }}
    >
      <InfoBox title="Education">
        {resume.education.map((education) => (
          <Box key={education.institution} sx={{ ...BoxSx }}>
            <Typography level="h3">
              {education.institution}, {education.location}
            </Typography>
            <Typography level="body-md">
              {education.degree}
              {education.gpa && `, ${education.gpa} GPA`}
              {education.expectedGraduation &&
                ` • Expected ${education.expectedGraduation}`}
            </Typography>
          </Box>
        ))}
      </InfoBox>

      <InfoBox title="Skills">
        <Grid container spacing={1}>
          {resume.skills.map((skill) => (
            <Grid
              key={skill}
              xs={6}
              sm={4}
              md={3}
              sx={{
                display: "flex",
              }}
            >
              <Typography
                level="body-sm"
                sx={{
                  bgcolor: (t) => t.palette.background.popup,
                  p: 1,
                  borderRadius: "4px",
                  border: (t) => `1px solid ${t.palette.divider}`,
                  color: (t) => t.palette.text.primary,
                  width: "100%",
                }}
              >
                {skill}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </InfoBox>

      <InfoBox title="Technical Experience">
        {resume.experience.map((experience) => (
          <Box
            key={`${experience.organization}-${experience.title}`}
            sx={{ ...BoxSx }}
          >
            <Typography level="h3">
              {experience.organization}, {experience.title} –{" "}
              {experience.location}
            </Typography>

            <Typography level="body-md" sx={{ mb: 1 }}>
              {experience.startDate} – {experience.endDate}
            </Typography>

            <List>
              {experience.bullets.map((bullet) => (
                <ListItem key={bullet}>{bullet}</ListItem>
              ))}
            </List>
          </Box>
        ))}
      </InfoBox>

      <InfoBox title="Volunteering & Involvement">
        {resume.involvement.map((experience) => (
          <Box
            key={`${experience.organization}-${experience.title}`}
            sx={{ ...BoxSx }}
          >
            <Typography level="h3">
              {experience.title}, {experience.organization} –{" "}
              {experience.location}
            </Typography>

            <Typography level="body-md" sx={{ mb: 1 }}>
              {experience.startDate} – {experience.endDate}
            </Typography>

            <List>
              {experience.bullets.map((bullet) => (
                <ListItem key={bullet}>{bullet}</ListItem>
              ))}
            </List>
          </Box>
        ))}
      </InfoBox>
    </Box>
  );
};

export default Resume;
