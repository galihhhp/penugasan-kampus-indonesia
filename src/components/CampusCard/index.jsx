import classNames from "classnames";
import { useState } from "react";
import { Modal } from "components";

const CampusCard = ({ className, blue, white, campus }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const { name, logo, type, accreditation, location } = campus;

  return (
    <>
      {isModalOpen && <Modal type={modalType} data={campus} />}
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
          data-toggle="modal"
          data-target="#ModalCenter"
          onClick={() => {
            setIsModalOpen(true);
            setModalType("campusDetail");
          }}
          className={classNames(
            "d-flex text-center m-0 justify-content-center align-items-center w-100 m-0 campus-card__button",
            { "campus-card__button--white": white },
            { "campus-card__button--blue": blue },
            className
          )}>
          Lihat detail
        </p>
      </div>
    </>
  );
};

export default CampusCard;
