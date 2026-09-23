import { Typography } from "@mui/joy";
import InfoBox from "../components/InfoBox";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";

const Projects = () => {
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
      <InfoBox title="Under Construction...">
        <Typography>Come back later to see my latest projects!</Typography>
      </InfoBox>
    </PageWrapper>
  );
};

export default Projects;
