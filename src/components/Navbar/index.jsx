import { Button, Modal } from "components";
import { useState } from "react";
import { useAuth } from "Context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [modalType, setModalType] = useState("");

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
        <p className="navbar-brand font-weight-bold d-flex flex-column">
          Kampus <span className="ml-3">Indonesia</span>
        </p>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto ml-5 mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link text-dark mr-4" href="google.com">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <p
                className="nav-link text-dark mr-4 dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Fitur
              </p>
              <div class="dropdown-menu navbar-feature-dropdown">
                <p class="dropdown-item">Kampus</p>
                <p class="dropdown-item">Beasiswa</p>
                <p class="dropdown-item">Lowongan Kerja</p>
                <p class="dropdown-item">Seminar & Workshop</p>
                <p class="dropdown-item">Lomba</p>
                <p class="dropdown-item">UTBK</p>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mr-4" href="google.com">
                Hubungi kami
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mr-4" href="google.com">
                Blog
              </a>
            </li>
          </ul>

          <div>
            {currentUser ? (
              <div className="d-flex">
                <p className="d-flex justify-content-center align-items-center mr-5">
                  Keranjang <span className="font-weight-bold ml-3">4</span>
                </p>
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
