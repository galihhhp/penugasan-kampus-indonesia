import { CampusCard, Button } from "components";

const Recommendation = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center recommendation">
      <h1 className="mb-5 font-weight-light">Rekomendasi Kampus</h1>
      <div className="d-flex">
        {/* <CampusCard />
        <CampusCard />
        <CampusCard /> */}
      </div>
      <Button label="Lihat lainnya" blue size="lg" />
    </div>
  );
};

export default Recommendation;
