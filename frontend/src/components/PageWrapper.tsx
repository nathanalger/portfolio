import { Box } from "@mui/joy";
import type { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
