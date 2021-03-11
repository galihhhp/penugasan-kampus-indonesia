import { useEffect } from "react";
import { CampusCard } from "components";
import campus from "db/campus.json";

const RecommendationPage = () => {
  useEffect(() => (document.title = "Rekomendasi Kampus"));

  return (
    <div className="recommendation-page">
      <div className="container pt-5 recommendation-page-content">
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
