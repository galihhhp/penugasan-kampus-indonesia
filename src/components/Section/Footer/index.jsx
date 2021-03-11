import { useHistory } from "react-router-dom";
import { ROUTES } from "configs/routes";

const Footer = () => {
  const history = useHistory();

  return (
    <div id="footer" className="footer">
      <div className="container d-flex pt-4 justify-content-around align-items-start text-white footer-content">
        <div className="w-100 mr-3 footer-content--left">
          <h1>Kampus Indonesia</h1>
          <p>
            Kami merupakan perusahaan dibidang <br />
            informasi seputar dunia perkuliahan yang bisa <br />
            memberikan infromasi secara terupdate <br /> dan dapat dipercaya
          </p>
          <p className="font-weight-bold">PT.Inspirasi Mandiri Nusantara</p>
          <p>
            Kec.Lowokwaru, <br />
            Kota Malang, Jawa Timur
          </p>
          <p className="font-weight-bold">Telepon</p>
          <p>021 3452 2885</p>
          <p className="font-weight-bold">Email</p>
          <p>info@kampusindonesia.id</p>
        </div>
        <div className="w-100 footer-content--center">
          <h3>Perusahaan</h3>
          <p>Tentang Kami</p>
          <p>Hubungi Kami</p>
          <p>Karir</p>
          <p>Feedback</p>
          <p>Partner</p>
        </div>
        <div className="w-100 footer-content--center">
          <h3>Fitur</h3>
          <p onClick={() => history.push(ROUTES.RECOMMENDATION)}>
            Cari Kampus/Prodi
          </p>
          <p onClick={() => history.push(ROUTES.SEMINAR_WORKSHOP)}>
            Cari Seminar/Workshop
          </p>
          <p onClick={() => history.push(ROUTES.SCHOLARSHIP)}>Cari Beasiswa</p>
          <p onClick={() => history.push(ROUTES.COMPETITIONS)}>Cari Lomba</p>
          <p onClick={() => history.push(ROUTES.JOB_VACANCY)}>Cari Lowongan</p>
          <p onClick={() => history.push(ROUTES.UTBK)}>UTBK</p>
        </div>
        <div className="w-100 footer-content--right">
          <h3>Lainnya</h3>
          <p>Bantuan</p>
          <p>Blog</p>
        </div>
      </div>
      <p className="mb-0 mt-4 p-3 text-white text-center">
        &copy; 2021 - Kampus Indonesia
      </p>
    </div>
  );
};

export default Footer;
