import { useEffect } from "react";
import {
  Hero,
  Recommendation,
  Feature,
  JobVacancy,
  Newsletter,
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
    </>
  );
};

export default Homepage;
