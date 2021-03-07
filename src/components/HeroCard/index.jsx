const HeroCard = () => {
  return (
    <div className="d-flex text-white p-4 hero-card">
      <div className="d-flex mr-4 hero-card--left">
        <img src="https://placeimg.com/100/100/people" alt="ha" />
        <div className="d-flex ml-2 flex-column">
          <h1>1042</h1>
          <p>
            Jumlah kampus yang <br /> terdata saat ini
          </p>
        </div>
      </div>
      <div className="d-flex hero-card--right">
        <img src="https://placeimg.com/100/100/people" alt="ha" />
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
