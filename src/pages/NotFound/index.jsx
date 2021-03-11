import notFound from "assets/404-error.png";
import { Button } from "components";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center not-found">
      <img src={notFound} alt="404 Illustration" />
      <p className="mt-3 not-found-title">
        <span className="font-weight-bold">404</span> - Halaman tidak dapat
        ditemukan
      </p>
      <p className="m-0 not-found-sub">
        Kami menyarankan anda untuk kembali ke halaman utama
      </p>
      <p className="m-0 mb-3 not-found-sub">
        Kami akan segera memperbaiki masalah yang sedang terjadi
      </p>
      <Button label="Homepage" size="lg" blue />
    </div>
  );
};

export default NotFound;
