import { Button } from "components";

const Navbar = () => {
  return (
    <>
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
        <a
          className="navbar-brand font-weight-bold d-flex flex-column"
          href="google.com">
          Kampus <span className="ml-3">Indonesia</span>
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto ml-5 mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link text-dark mr-4" href="google.com">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mr-4" href="google.com">
                Fitur
              </a>
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
            <Button label="Masuk" mr white />
          </ul>

          <div>
            <Button label="Masuk" size="lg" mr white />
            <Button label="Daftar" size="lg" blue />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
