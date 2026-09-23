import PageWrapper from "../components/PageWrapper";
import HeroHeader from "../components/HeroHeader";
import Resume from "../components/Resmue";
const Home = () => {
  return (
    <PageWrapper>
      {/* Header Section */}
      <HeroHeader />
      <Resume />
    </PageWrapper>
  );
};
export default Home;
