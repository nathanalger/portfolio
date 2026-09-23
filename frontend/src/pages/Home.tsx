import { Box, Typography, List, ListItem, Grid } from "@mui/joy";
import InfoBox from "../components/InfoBox";
const Home = () => {
  return (
    <Box sx={{ p: 3, maxWidth: "1200px", mx: "auto" }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography level="h1" sx={{ mb: 1 }}>
          Nathan Alger
        </Typography>
        <Typography level="h2" sx={{ mb: 2, color: "neutral.500" }}>
          Computer Engineering Student
        </Typography>
        <Typography level="body-lg" sx={{ mb: 3 }}>
          Third-year Computer Engineering student with experience in hardware,
          software development, and embedded systems.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {/* Put links to contact info here */}
        </Box>
      </Box>
      {/* Education Section */}
      <InfoBox title="Education">
        <Typography level="h3">
          Michigan Technological University, Houghton, Michigan
        </Typography>
        <Typography level="body-md">
          BS, Computer Engineering, 3.5 GPA • Expected Apr 2028
        </Typography>
      </InfoBox>
      {/* Skills Section */}
      <InfoBox title="Skills">
        <Grid container spacing={1}>
          {[
            "C/C++",
            "C#",
            "JavaScript",
            "Microcontrollers",
            "Embedded Systems",
            "React",
            "Vite",
            "Express",
            "CSS",
            "Computer Hardware Repair",
            "Hardware Diagnosis",
          ].map((skill) => (
            <Grid key={skill} xs={6} sm={4} md={3}>
              <Typography
                level="body-sm"
                sx={{ bgcolor: "primary.50", p: 1, borderRadius: "4px" }}
              >
                {skill}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </InfoBox>
      {/* Experience Section */}
      <InfoBox title="Experience">
        <Box sx={{ mb: 3 }}>
          <Typography level="h3">
            Creative Mines, Software Development Intern – Hancock, Michigan
          </Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>
            Oct 2024 – Aug 2025
          </Typography>
          <List>
            <ListItem>
              Contributed to the design and development of Runway, a business
              relationship management tool, by helping set realistic milestones
              and preparing for a successful product launch.
            </ListItem>
            <ListItem>
              Collaborated in small teams to refine features, continuously
              improving user experience through iterative peer feedback and
              testing.
            </ListItem>
            <ListItem>
              Assisted in maintaining infrastructure for the application in both
              development and production environments, ensuring high uptimes and
              quick fixes for users.
            </ListItem>
          </List>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography level="h3">
            Affordable Computer Services, Technician – Fenton, Michigan
          </Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>
            Nov 2020 – Aug 2022
          </Typography>
          <List>
            <ListItem>
              Maintained a professional and polite manner while assisting
              customers online and on-call, assisting them to solve problems,
              upholding the company's positive reputation in the community.
            </ListItem>
            <ListItem>
              Worked with a small team of employees to properly diagnose
              multiple computers accurately, quote repair costs, and finish the
              repairs all within a timely manner.
            </ListItem>
          </List>
        </Box>
      </InfoBox>
      {/* Volunteering Section */}
      <InfoBox title="Volunteering & Involvement">
        <Box sx={{ mb: 3 }}>
          <Typography level="h3">
            Aeronautics and Rocketry Enterprise - HPR, Michigan Technological
            University
          </Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>
            Aug 2026 – Present
          </Typography>
          <List>
            <ListItem>
              Collaborate on the development of high-powered rocket avionics by
              defining system requirements, evaluating design constraints, and
              outlining hardware integration and testing.
            </ListItem>
            <ListItem>
              Develop embedded systems in C++ using STM32-family
              microcontrollers alongside STM libraries to measure environmental
              factors with sensors and collect, process, and interpret real-time
              flight data.
            </ListItem>
            <ListItem>
              Research and evaluate microcontroller and sensor solutions for
              avionics applications, contributing to the design of reliable and
              efficient data acquisition and event management.
            </ListItem>
          </List>
        </Box>
        <Box>
          <Typography level="h3">
            Senior Tech Support Volunteer, Loose Senior Center – Linden,
            Michigan
          </Typography>
          <Typography level="body-md" sx={{ mb: 1 }}>
            Aug 2023 – 2024
          </Typography>
          <List>
            <ListItem>
              Met with seniors in the local community with patience and clear
              communication so they can leave happy and satisfied with their
              solution.
            </ListItem>
            <ListItem>
              Managed time by both educating seniors on relevant topics about
              technology while also solving their problems, all within a time
              frame that allows all who need it to be assisted.
            </ListItem>
          </List>
        </Box>
      </InfoBox>
      {/* Non-Technical Work History */}
      <InfoBox title="Non-Technical Work History">
        <Grid container spacing={2}>
          <Grid xs={12} sm={6}>
            <Typography level="h3">Delivery Driver, Hungry Howie's</Typography>
            <Typography level="body-md">2023</Typography>
          </Grid>
          <Grid xs={12} sm={6}>
            <Typography level="h3">
              Retail Stocker, Alpine Marketplace
            </Typography>
            <Typography level="body-md">2019</Typography>
          </Grid>
        </Grid>
      </InfoBox>
      {/* Footer */}
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          pt: 2,
          borderTop: "1px solid",
          borderColor: "neutral.200",
        }}
      >
        <Typography level="body-sm" sx={{ color: "neutral.500" }}>
          © {new Date().getFullYear()} Nathan Alger • Built with React and MUI
          Joy
        </Typography>
      </Box>
    </Box>
  );
};
export default Home;
