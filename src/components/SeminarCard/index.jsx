import { Modal } from "components";
import { useState } from "react";

const SeminarCard = ({ seminar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const { judul, biaya, waktu, pembicara, status } = seminar;

  return (
    <div className="container m-3 seminar-card">
      {isModalOpen && <Modal type={modalType} data={seminar} />}
      <div className="row p-4 seminar-card__title">
        <div className="col font-weight-bold">{judul}</div>
      </div>
      <div className="d-flex ml-2 flex-column seminar-card__text">
        <div className="col">Pembicara: {pembicara}</div>
        <div className="col">Waktu: {waktu}</div>
        <div className="col">Biaya: {biaya}</div>
        <div className="col">Status: {status}</div>
      </div>
      <div
        data-toggle="modal"
        data-target="#ModalCenter"
        className="row p-2 mt-2 seminar-card__poster__button"
        onClick={() => {
          setIsModalOpen(true);
          setModalType("poster");
        }}>
        <p className="col m-0 text-center">Lihat poster</p>
      </div>
      <div
        data-toggle="modal"
        data-target="#ModalCenter"
        className="row p-2 justify-content-end seminar-card__daftar__button"
        onClick={() => {
          setIsModalOpen(true);
          setModalType("seminar");
        }}>
        <p className="col m-0 text-center text-white">Daftar</p>
      </div>
    </div>
  );
};

export default SeminarCard;
