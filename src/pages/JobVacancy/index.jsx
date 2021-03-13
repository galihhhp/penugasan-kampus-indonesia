import { Search } from "components";
import { useState } from "react";

const JobVacancy = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="job-vacancy-page">
      <div className="container pt-5 job-vacancy-page-content">
        <div className="row bg-light py-4 justify-content-center align-items-center">
          <h4 className="text-center">
            Dapatkan pekerjaan sesuai dengan impian kamu
          </h4>
          <Search
            onChange={(e) => setKeyword(e.target.value)}
            onClick={alert(keyword)}
          />
        </div>
        <div className="row mt-3 py-3 bg-light h-100 justify-content-center align-items-center">
          <h3 className="text-center">
            Saat ini belum ada lowongan kerja yang tersedia
          </h3>
        </div>
      </div>
    </div>
  );
};

export default JobVacancy;
