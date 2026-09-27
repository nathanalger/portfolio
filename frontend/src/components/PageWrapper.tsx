import { Box } from "@mui/joy";
import type { ReactNode } from "react";
import { useDevice } from "../hook/useDevice";

const PageWrapper = ({ children }: { children?: ReactNode }) => {
  const { isMobile } = useDevice();
  return (
    <Box
      sx={{
        p: isMobile ? 1 : 3,
        minHeight: "calc(100dvh - 220px)",
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
