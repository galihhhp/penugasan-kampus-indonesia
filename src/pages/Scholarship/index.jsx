import { useEffect } from "react";
import { ROUTES } from "configs/routes";
import { useHistory } from "react-router-dom";
import { Button } from "components";

const Scholarship = () => {
  const history = useHistory();

  useEffect(() => (document.title = "Beasiswa"));

  return (
    <div className="scholarship-page">
      <div className="container pt-5 scholarship-page-content">
        <div className="row mb-5 justify-content-center align-items-center">
          <div className="col-4">
            <Button
              label="Back"
              white
              onClick={() => history.push(ROUTES.HOMEPAGE)}
            />
          </div>
          <h1 className="col-8 text-white">Beasiswa</h1>
        </div>
        <div className="row justify-content-center align-items-center">
          <h3 className="text-white">Belum tersedia</h3>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
