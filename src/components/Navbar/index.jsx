import { Button, Modal } from "components";
import { useState } from "react";
import { useAuth } from "Context/AuthContext";
import { useHistory } from "react-router-dom";
import { ROUTES } from "configs/routes";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [modalType, setModalType] = useState("");

  const history = useHistory();

  const userLogout = async () => {
    try {
      await logout();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {isModalOpen && register && <Modal type={modalType} />}
      {isModalOpen && login && <Modal type={modalType} />}
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <p
          className="navbar-brand font-weight-bold d-flex flex-column"
          onClick={() => history.push(ROUTES.HOMEPAGE)}>
          Kampus <span className="ml-3">Indonesia</span>
        </p>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto ml-5 mt-2 mt-lg-0">
            <li className="nav-item">
              <p
                className="nav-link text-dark mr-4"
                onClick={() => history.push(ROUTES.HOMEPAGE)}>
                Beranda
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link text-dark mr-4 dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Fitur
              </p>
              <div className="dropdown-menu navbar-feature-dropdown">
                <p
                  className="dropdown-item"
                  onClick={() => history.push(ROUTES.RECOMMENDATION)}>
                  Kampus
                </p>
                <p
                  className="dropdown-item"
                  onClick={() => history.push(ROUTES.SCHOLARSHIP)}>
                  Beasiswa
                </p>
                <p
                  className="dropdown-item"
                  onClick={() => history.push(ROUTES.JOB_VACANCY)}>
                  Lowongan Kerja
                </p>
                <p
                  className="dropdown-item"
                  onClick={() => history.push(ROUTES.SEMINAR_WORKSHOP)}>
                  Seminar & Workshop
                </p>
                <p
                  className="dropdown-item"
                  onClick={() => history.push(ROUTES.COMPETITIONS)}>
                  Lomba
                </p>
                <p
                  className="dropdown-item"
                  onClick={() => history.push(ROUTES.UTBK)}>
                  UTBK
                </p>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mr-4" href="#footer">
                Hubungi kami
              </a>
            </li>
            <li className="nav-item" onClick={() => history.push(ROUTES.BLOG)}>
              <p className="nav-link text-dark mr-4">Blog</p>
            </li>
          </ul>

          <div>
            {currentUser ? (
              <div className="d-flex">
                <Button
                  label="Keranjang"
                  size="lg"
                  mr
                  blue
                  onClick={() => history.push(ROUTES.CART)}
                />
                <Button
                  label="Keluar"
                  size="lg"
                  mr
                  white
                  onClick={userLogout}
                />
              </div>
            ) : (
              <>
                <Button
                  label="Masuk"
                  size="lg"
                  dataToggle="modal"
                  dataTarget="#ModalCenter"
                  mr
                  white
                  onClick={() => {
                    setIsModalOpen(true);
                    setLogin(true);
                    setModalType("login");
                  }}
                />
                <Button
                  label="Daftar"
                  size="lg"
                  dataToggle="modal"
                  dataTarget="#ModalCenter"
                  blue
                  onClick={() => {
                    setIsModalOpen(true);
                    setRegister(true);
                    setModalType("registration");
                  }}
                />
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
