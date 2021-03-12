import { Button } from "components";
import { ROUTES } from "configs/routes";
import { useHistory } from "react-router-dom";
import jobVacancyIcon from "assets/job.png";

const JobVacancy = () => {
  const history = useHistory();

  return (
    <div className="job-vacancy d-flex text-white">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <img src={jobVacancyIcon} alt="cap" />
        </div>
        <div className="d-flex ml-3 flex-column job-vacancy--right">
          <p className="m-0 job-vacancy--right__main">
            Kamu sedang mencari pekerjaan?
          </p>
          <p className="job-vacancy--right__sub">
            Temukan pekerjaan impian anda disini!
          </p>
          <div className="d-flex">
            <Button
              label="Lowongan Pekerjaan"
              size="lg"
              white
              onClick={() => history.push(ROUTES.JOB_VACANCY)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobVacancy;
