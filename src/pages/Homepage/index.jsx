import { useEffect } from "react";
import { Hero, Recommendation, Feature, JobVacancy, Footer } from "components";

const Homepage = () => {
  useEffect(() => (document.title = "Kampus Indonesia"));

  return (
    <>
      <Hero />
      <Recommendation />
      <Feature />
      <JobVacancy />
      <Footer />
    </>
  );
};

export default Homepage;
