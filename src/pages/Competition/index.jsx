import { CompetitionCard } from "components";
import { useEffect } from "react";
import competitions from "db/competitions.json";

const Competition = () => {
  useEffect(() => (document.title = "Lomba"));

  return (
    <div className="competition-page">
      <div className="container pt-5 competition-page-content">
        <div className="row justify-content-center align-items-center">
          {competitions.map((competition) => (
            <CompetitionCard competition={competition} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competition;
