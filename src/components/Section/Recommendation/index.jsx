import { CampusCard, Button } from "components";

const Recommendation = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center recommendation">
      <div className="d-flex flex-column justify-content-center align-items-center recommendation-title">
        <h1 className="font-weight-light">Rekomendasi Kampus</h1>
        <h3>Top 3 Kampus</h3>
      </div>
      <div className="mt-4 d-flex recommendation-content">
        <CampusCard />
        <CampusCard />
        <CampusCard />
      </div>
      <Button label="Lihat lainnya" blue size="lg" />
    </div>
  );
};

export default Recommendation;
