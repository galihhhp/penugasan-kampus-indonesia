import {
  Registration,
  Login,
  CampusCardDetail,
  Poster,
  SeminarForm,
} from "components";

const Modal = ({ type, data }) => {
  return (
    <div
      className="modal fade"
      id="ModalCenter"
      tabIndex="1"
      role="dialog"
      aria-labelledby="ModalCenterTitle"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            {type === "login" && <Login />}
            {type === "registration" && <Registration />}
            {type === "campusDetail" && <CampusCardDetail data={data} />}
            {type === "poster" && <Poster data={data} />}
            {type === "seminar" && <SeminarForm data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
