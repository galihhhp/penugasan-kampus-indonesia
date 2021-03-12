import partner from "db/partner.json";

const Partner = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center partner">
      <div className="row mb-3">
        <h1>Partnership</h1>
      </div>
      <div className="row d-flex justify-content-center align-items-center partner-image__wrapper">
        {partner.map((partner) => (
          <div
            key={partner.id}
            className="col m-1 d-flex justify-content-center align-items-center">
            <img src={partner.logo} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
