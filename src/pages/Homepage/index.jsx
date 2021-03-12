import { useEffect } from "react";
import {
  Hero,
  Recommendation,
  Feature,
  Partner,
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
      <Partner />
      <JobVacancy />
      <Newsletter />
    </>
  );
};

export default Homepage;
