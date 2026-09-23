import { Box } from "@mui/joy";
import { Outlet } from "react-router";
import NavButton from "./NavButton";

const Wrapper = () => {
  return (
    <Box
      sx={{
        backgroundColor: (t) => t.palette.background.backdrop,
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          display: "flex",
          gap: 0,
        }}
      >
        <NavButton routeKey="home">Home</NavButton>
        <NavButton routeKey="projects">Projects</NavButton>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Wrapper;
