import { Modal } from "components";
import { useState } from "react";

const CompetitionCard = ({ competition }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const { title, poster, price, deadline, link } = competition;

  return (
    <div className="container m-2 competition-card">
      {isModalOpen && <Modal type={modalType} data={competition} />}
      <div
        className="row"
        data-toggle="modal"
        data-target="#ModalCenter"
        onClick={() => {
          setIsModalOpen(true);
          setModalType("competitionPoster");
        }}
      >
        <img src={poster} alt="poster" />
      </div>
      <div className="row d-flex flex-column p-3 bg-light competition-card__text">
        <h5>{title}</h5>
        <p className="font-weight-bold m-0">{deadline}</p>
        <p className="font-weight-bold m-0">{price}</p>
        <p className="font-weight-bold m-0 text-primary link">
          {link ? link : "Silakan mengisi form"}
        </p>
      </div>
      <div className="row d-flex justify-content-center align-items-center py-3 text-white competition-card__button">
        <p className="m-0">{link ? "Menuju link" : "Daftar"}</p>
      </div>
    </div>
  );
};

export default CompetitionCard;
