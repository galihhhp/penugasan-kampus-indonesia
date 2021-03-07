import { Button } from "components";

const CampusCard = () => {
  return (
    <div className="m-3 d-flex flex-column justify-content-center align-items-center campus-card">
      <div className="d-flex campus-card__img">
        <img src="https://placeimg.com/100/100/any" alt="cap" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center campus-card__text">
        <p>Kampus</p>
        <p>Akreditas</p>
        <p>PTN</p>
        <p>Malang, Indonesia</p>
      </div>
      <Button label="Lihat detail" blue size="lg" block />
    </div>
  );
};

export default CampusCard;
