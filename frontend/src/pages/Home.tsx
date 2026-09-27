import PageWrapper from "../components/PageWrapper";
import HeroHeader from "../components/HeroHeader";
import Resume from "../components/Resume";
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
