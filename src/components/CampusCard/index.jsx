import classNames from "classnames";

const CampusCard = ({ className, blue, white, campus }) => {
  const { name, logo, type, accreditation, location } = campus;

  return (
    <div
      className={classNames(
        "m-3 d-flex flex-column justify-content-center align-items-center campus-card",
        { "campus-card--white": white },
        { "campus-card--blue": blue },
        className
      )}>
      <div className="d-flex mb-3 campus-card__img">
        <img src={logo} alt="cap" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center campus-card__text">
        <p className="text-center">{name}</p>
        <p>{accreditation}</p>
        <p>{type}</p>
        <p>{location}</p>
      </div>
      <p
        className={classNames(
          "d-flex text-center m-0 justify-content-center align-items-center w-100 m-0 campus-card__button",
          { "campus-card__button--white": white },
          { "campus-card__button--blue": blue },
          className
        )}>
        Lihat detail
      </p>
    </div>
  );
};

export default CampusCard;
