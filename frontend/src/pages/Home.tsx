import { Box, Typography, Card, CardContent, List, ListItem, ListItemText, Divider, Grid, Button } from "@mui/joy";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box sx={{ p: 3, maxWidth: '1200px', mx: 'auto' }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography level="h1" sx={{ mb: 1 }}>Nathan Alger</Typography>
        <Typography level="h2" sx={{ mb: 2, color: 'neutral.500' }}>Computer Engineering Student</Typography>
        <Typography level="body-lg" sx={{ mb: 3 }}>
          Third-year Computer Engineering student with experience in hardware, software development, and embedded systems.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button component={Link} to="mailto:nalger@mtu.edu" variant="outlined">Email</Button>
          <Button component={Link} to="https://linkedin.com/in/nathanalger" variant="outlined" target="_blank">LinkedIn</Button>
          <Button component={Link} to="tel:(810) 513-6688" variant="outlined">(810) 513-6688</Button>
        </Box>
      </Box>

      {/* Education Section */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography level="h2" sx={{ mb: 2 }}>Education</Typography>
          <Typography level="h3">Michigan Technological University, Houghton, Michigan</Typography>
          <Typography level="body-md">BS, Computer Engineering, 3.5 GPA • Expected Apr 2028</Typography>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography level="h2" sx={{ mb: 2 }}>Skills</Typography>
          <Grid container spacing={1}>
            {[
              'C/C++', 'C#', 'JavaScript', 'Microcontrollers', 'Embedded Systems',
              'React', 'Vite', 'Express', 'CSS', 'Computer Hardware Repair', 'Hardware Diagnosis'
            ].map((skill, index) => (
              <Grid key={index} xs={6} sm={4} md={3}>
                <Typography level="body-sm" sx={{ bgcolor: 'primary.50', p: 1, borderRadius: '4px' }}>
                  {skill}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography level="h2" sx={{ mb: 2 }}>Experience</Typography>

          <Box sx={{ mb: 3 }}>
            <Typography level="h3">Creative Mines, Software Development Intern – Hancock, Michigan</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>Oct 2024 – Aug 2025</Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Contributed to the design and development of Runway, a business relationship management tool, by helping set realistic milestones and preparing for a successful product launch.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Collaborated in small teams to refine features, continuously improving user experience through iterative peer feedback and testing.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Assisted in maintaining infrastructure for the application in both development and production environments, ensuring high uptimes and quick fixes for users.
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography level="h3">Affordable Computer Services, Technician – Fenton, Michigan</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>Nov 2020 – Aug 2022</Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Maintained a professional and polite manner while assisting customers online and on-call, assisting them to solve problems, upholding the company's positive reputation in the community.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Worked with a small team of employees to properly diagnose multiple computers accurately, quote repair costs, and finish the repairs all within a timely manner.
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>

      {/* Volunteering Section */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography level="h2" sx={{ mb: 2 }}>Volunteering & Involvement</Typography>

          <Box sx={{ mb: 3 }}>
            <Typography level="h3">Aeronautics and Rocketry Enterprise - HPR, Michigan Technological University</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>Aug 2026 – Present</Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Collaborate on the development of high-powered rocket avionics by defining system requirements, evaluating design constraints, and outlining hardware integration and testing.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Develop embedded systems in C++ using STM32-family microcontrollers alongside STM libraries to measure environmental factors with sensors and collect, process, and interpret real-time flight data.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Research and evaluate microcontroller and sensor solutions for avionics applications, contributing to the design of reliable and efficient data acquisition and event management.
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography level="h3">Senior Tech Support Volunteer, Loose Senior Center – Linden, Michigan</Typography>
            <Typography level="body-md" sx={{ mb: 1 }}>Aug 2023 – 2024</Typography>
            <List>
              <ListItem>
                <ListItemText>
                  Met with seniors in the local community patience and clear communication so they can leave happy and satisfied with their solution.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Managed time by both educating seniors on relevant topics about technology while also solving their problems, all within a time frame that allows all who need it to be assisted.
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>

      {/* Non-Technical Work History */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography level="h2" sx={{ mb: 2 }}>Non-Technical Work History</Typography>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6}>
              <Typography level="h3">Delivery Driver, Hungry Howie's</Typography>
              <Typography level="body-md">2023</Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <Typography level="h3">Retail Stocker, Alpine Marketplace</Typography>
              <Typography level="body-md">2019</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', mt: 4, pt: 2, borderTop: '1px solid', borderColor: 'neutral.200' }}>
        <Typography level="body-sm" sx={{ color: 'neutral.500' }}>
          © {new Date().getFullYear()} Nathan Alger • Built with React and MUI Joy
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
