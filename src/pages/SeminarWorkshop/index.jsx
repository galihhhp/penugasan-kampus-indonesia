import { useEffect } from "react";
import { SeminarCard } from "components";
import seminar from "db/seminar.json";

const SeminarWorkshop = () => {
  useEffect(() => (document.title = "Seminar & Workshop"));

  return (
    <div className="seminar-workshop-page">
      <div className="container pt-5 seminar-workshop-page-content">
        <div className="row justify-content-center align-items-center">
          {seminar.map((seminar) => (
            <div key={seminar.id} className="m-2">
              <SeminarCard seminar={seminar} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeminarWorkshop;
