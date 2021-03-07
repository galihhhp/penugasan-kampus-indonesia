import { useEffect } from "react";
import { CampusCard, Button } from "components";
import { ROUTES } from "configs/routes";
import { useHistory } from "react-router-dom";
import campus from "db/campus.json";

const RecommendationPage = () => {
  const history = useHistory();

  useEffect(() => (document.title = "Rekomendasi Kampus"));

  return (
    <div className="recommendation-page">
      <div className="container pt-5 recommendation-page-content">
        <div className="row mb-5 justify-content-center align-items-center">
          <div className="col-4">
            <Button
              label="Back"
              white
              onClick={() => history.push(ROUTES.HOMEPAGE)}
            />
          </div>
          <h1 className="col-8 text-white">Rekomendasi Kampus</h1>
        </div>
        <div className="row justify-content-center align-items-center">
          {campus.map((campus) => (
            <div key={campus.id} className="col">
              <CampusCard white campus={campus} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;
