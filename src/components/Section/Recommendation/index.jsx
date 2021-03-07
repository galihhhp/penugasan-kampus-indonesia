import { CampusCard, Button } from "components";
import { useHistory } from "react-router-dom";
import { ROUTES } from "configs/routes";
import campus from "db/campus.json";

const Recommendation = () => {
  const history = useHistory();

  const newCampus = campus.slice(0, 3);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center recommendation">
      <div className="d-flex flex-column justify-content-center align-items-center recommendation-title">
        <h1 className="font-weight-light">Rekomendasi Kampus</h1>
        <h3>Top 3 Kampus</h3>
      </div>
      <div className="mt-4 d-flex recommendation-content">
        {newCampus.map((campus) => (
          <div key={campus.id} className="col">
            <CampusCard blue campus={campus} />
          </div>
        ))}
      </div>
      <Button
        label="Lihat lainnya"
        blue
        size="lg"
        onClick={() => history.push(ROUTES.RECOMMENDATION)}
      />
    </div>
  );
};

export default Recommendation;
