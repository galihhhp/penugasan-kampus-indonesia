import { useEffect } from "react";
import { ROUTES } from "configs/routes";
import { useHistory } from "react-router-dom";
import { SeminarCard, Button } from "components";
import seminar from "db/seminar.json";

const SeminarWorkshop = () => {
  const history = useHistory();

  useEffect(() => (document.title = "Seminar & Workshop"));

  return (
    <div className="seminar-workshop-page">
      <div className="container pt-5 seminar-workshop-page-content">
        <div className="row mb-5 justify-content-center align-items-center">
          <div className="col-4">
            <Button
              label="Back"
              white
              onClick={() => history.push(ROUTES.HOMEPAGE)}
            />
          </div>
          <h1 className="col-8 text-white">Seminar & Workshop</h1>
        </div>
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
