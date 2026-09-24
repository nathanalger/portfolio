import { Box, Card, Grid, Link, Typography } from "@mui/joy";
import InfoBox from "../components/InfoBox";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import { useDevice } from "../hook/useDevice";

interface GithubProject {
  link: string;
  title: string;
  description: string;
  tags: string;
  imageUrl: string;
}

const GithubProjects: GithubProject[] = [
  {
    link: "https://github.com/nathanalger/rv64i-simulator",
    title: "RV64I Simulator",
    description:
      "A featured simulator of the RV64I instruction set intended to be easily expandable and adaptable to different use cases. Utilizes a CLI for easy binary execution. OpenSBI compliant.",
    tags: "C++,ASM,RISC-V",
    imageUrl: "/rv64i-img.png",
  },
  {
    link: "https://github.com/nathanalger/plus45",
    title: "Plus45 Fitness Management",
    description:
      "A full-featured fitness management suite built for individual athletes and teams. Fully functional, with deployment planned for the future.",
    tags: "Postgres,React,TS",
    imageUrl: "/plus45-img.png",
  },
  {
    link: "https://github.com/nathanalger/handheld-deck",
    title: "Handheld Cyberdeck",
    description:
      "An ongoing project combining a RP22350 Microcontroller and a RK3566 SoC to create a handheld system with a custom operating system (or linux) to run specific applications.",
    tags: "C++,ASM,Microcontrollers",
    imageUrl: "/deck-img.png",
  },
];

const Projects = () => {
  const { isMobile } = useDevice();
  return (
    <PageWrapper>
      <Header
        title={
          <>
            My <Typography sx={{ color: "primary.500" }}>Projects</Typography>
          </>
        }
        description="Check out my latest work!"
      />
      <InfoBox title="GitHub Projects">
        <Typography
          sx={{
            mb: 4,
          }}
        >
          While some projects are still in development, each demonstrates my
          capabilities and approach to software development.
        </Typography>
        <Grid container xs={12} spacing={2}>
          {GithubProjects.map((p) => {
            return (
              <Grid xs={isMobile ? 12 : 4} key={p.title}>
                <Card
                  onClick={() => {
                    window.location.href = p.link;
                  }}
                  sx={{
                    userSelect: "none",
                    minWidth: "100%",
                    aspectRatio: 1,
                    p: 0,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: "-10px",
                      backgroundImage: `url(${p.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(3px)",
                      zIndex: 0,
                    },

                    transition: "0.2s scale ease-in-out",
                    "&:hover": {
                      scale: 1.02,
                      boxShadow: "0 0 5px black",
                      borderColor: (t) => t.palette.primary[600],
                    },
                    "&:active": {
                      scale: 1.0,
                      opacity: 0.95,
                    },
                  }}
                >
                  {/* Image darkening overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.35)",
                    }}
                  />

                  {/* Text gradient */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      background: (t) =>
                        `linear-gradient(
                to bottom,
                transparent 0%,
                ${t.palette.background.body} 100%
              )`,
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "background.body",
                        borderRadius: "sm",
                        border: (t) => `1px solid ${t.palette.divider}`,
                        p: 1.5,
                      }}
                    >
                      <Typography level="title-lg">
                        <Link
                          overlay
                          href={p.link}
                          underline="none"
                          textColor="inherit"
                          sx={{ "&:hover": { color: "inherit" } }}
                        >
                          {p.title}
                        </Link>
                      </Typography>
                      <Typography level="body-sm" sx={{ mb: 1.5 }}>
                        {p.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          gap: 1,
                        }}
                      >
                        {p.tags.split(",").map((tag) => {
                          return (
                            <Typography
                              level="title-sm"
                              sx={{
                                borderRadius: 6,
                                fontSize: "0.8rem",
                                background: (t) => t.palette.primary[700],
                                px: 1,
                                py: 0.5,
                              }}
                            >
                              {tag}
                            </Typography>
                          );
                        })}
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </InfoBox>
    </PageWrapper>
  );
};

export default Projects;
