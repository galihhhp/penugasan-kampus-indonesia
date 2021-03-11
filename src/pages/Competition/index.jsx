import { useEffect } from "react";
import { ROUTES } from "configs/routes";
import { useHistory } from "react-router-dom";
import { Button } from "components";

const Competition = () => {
  const history = useHistory();

  useEffect(() => (document.title = "Lomba"));

  return (
    <div className="competition-page">
      <div className="container pt-5 competition-page-content">
        <div className="row mb-5 justify-content-center align-items-center">
          <div className="col-4">
            <Button
              label="Back"
              white
              onClick={() => history.push(ROUTES.HOMEPAGE)}
            />
          </div>
          <h1 className="col-8 text-white">Lomba</h1>
        </div>
        <div className="row justify-content-center align-items-center">
          <h3 className="text-white">Saat ini belum ada lomba yang tersedia</h3>
        </div>
      </div>
    </div>
  );
};

export default Competition;
