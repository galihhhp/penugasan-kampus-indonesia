import universityIcon from "assets/university.png";
import campusIcon from "assets/mortarboard.png";

const HeroCard = () => {
  return (
    <div className="d-flex text-white p-4 hero-card">
      <div className="d-flex mr-4 hero-card--left">
        <img src={campusIcon} alt="ha" />
        <div className="d-flex ml-2 flex-column hero-card--left">
          <h1>1042</h1>
          <p>
            Jumlah kampus yang <br /> terdata saat ini
          </p>
        </div>
      </div>
      <div className="d-flex hero-card--right">
        <img src={universityIcon} alt="ha" />
        <div className="d-flex ml-2 flex-column">
          <h1>113</h1>
          <p>
            Jumlah kampus yang sudah <br /> terdaftar di Pintara
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
