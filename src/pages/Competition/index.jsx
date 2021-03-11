import { useEffect } from "react";

const Competition = () => {
  useEffect(() => (document.title = "Lomba"));

  return (
    <div className="competition-page">
      <div className="container pt-5 competition-page-content">
        <div className="row justify-content-center align-items-center">
          <h3 className="text-white">Saat ini belum ada lomba yang tersedia</h3>
        </div>
      </div>
    </div>
  );
};

export default Competition;
