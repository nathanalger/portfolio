import { Box } from "@mui/joy";
import { Outlet } from "react-router";

const Wrapper = () => {
  return (
    <Box
      sx={{
        backgroundColor: (t) => t.palette.background.backdrop,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Wrapper;
