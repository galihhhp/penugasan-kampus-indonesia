import notFound from "assets/404-error.png";
import { Button } from "components";
import { useEffect } from "react";
import { ROUTES } from "configs/routes";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  useEffect(() => (document.title = "Halaman tidak dapat ditemukan"));

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center not-found">
      <img src={notFound} alt="404 Illustration" />
      <p className="mt-3 font-weight-bold not-found-title">
        Halaman tidak dapat ditemukan
      </p>
      <p className="m-0 not-found-sub">
        Kami menyarankan anda untuk kembali ke halaman utama
      </p>
      <p className="m-0 mb-3 not-found-sub">
        Kami akan segera memperbaiki masalah yang sedang terjadi
      </p>
      <Button
        label="Homepage"
        size="lg"
        blue
        onClick={() => history.push(ROUTES.HOMEPAGE)}
      />
    </div>
  );
};

export default NotFound;
