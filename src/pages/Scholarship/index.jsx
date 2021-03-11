import { useEffect } from "react";

const Scholarship = () => {
  useEffect(() => (document.title = "Beasiswa"));

  return (
    <div className="scholarship-page">
      <div className="container pt-5 scholarship-page-content">
        <div className="row justify-content-center align-items-center">
          <h3 className="text-white">
            Saat ini belum ada beasiswa yang tersedia
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;
