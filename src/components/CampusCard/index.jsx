import { Button } from "components";

const CampusCard = () => {
  return (
    <div className="p-5 m-4 d-flex flex-column justify-content-center align-items-center campus-card">
      <img src="https://placeimg.com/200/200/any" alt="cap" />
      <p>Kampus</p>
      <p>Akreditas</p>
      <p>PTN</p>
      <p>Malang, Indonesia</p>
      <Button label="Lihat detail" blue block />
    </div>
  );
};

export default CampusCard;
