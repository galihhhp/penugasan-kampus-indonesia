import { Button } from "components";

const JobVacancy = () => {
  return (
    <div className="job-vacancy d-flex text-white">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <img src="https://placeimg.com/200/200/any" alt="cap" />
        </div>
        <div className="d-flex flex-column job-vacancy--right">
          <p className="job-vacancy--right__main">
            Kamu sedang mencari pekerjaan?
          </p>
          <p className="job-vacancy--right__sub">
            Temukan pekerjaan impian anda disini!
          </p>
          <div className="d-flex">
            <Button label="Lowongan Pekerjaan" size="lg" white />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobVacancy;
