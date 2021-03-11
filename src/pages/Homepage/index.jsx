import { useEffect } from "react";
import {
  Hero,
  Recommendation,
  Feature,
  JobVacancy,
  Newsletter,
  Footer,
} from "components";

const Homepage = () => {
  useEffect(() => (document.title = "Kampus Indonesia"));

  return (
    <>
      <Hero />
      <Recommendation />
      <Feature />
      <JobVacancy />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Homepage;
