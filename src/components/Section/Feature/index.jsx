import { FeatureCard } from "components";
import AliceCarousel from "react-alice-carousel";
import { useHistory } from "react-router-dom";
import { ROUTES } from "configs/routes";
import "react-alice-carousel/lib/alice-carousel.css";

const Feature = () => {
  const history = useHistory();

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item" data-value="1">
      <FeatureCard
        title="Kampus"
        onClick={() => history.push(ROUTES.RECOMMENDATION)}
      />
    </div>,
    <div className="item" data-value="2">
      <FeatureCard
        title="Beasiswa"
        onClick={() => history.push(ROUTES.SCHOLARSHIP)}
      />
    </div>,
    <div className="item" data-value="3">
      <FeatureCard
        title="Seminar & Workshop"
        onClick={() => history.push(ROUTES.SEMINAR_WORKSHOP)}
      />
    </div>,
    <div className="item" data-value="4">
      <FeatureCard
        title="Lowongan"
        onClick={() => history.push(ROUTES.JOB_VACANCY)}
      />
    </div>,
    <div className="item" data-value="5">
      <FeatureCard
        title="Lomba"
        onClick={() => history.push(ROUTES.COMPETITIONS)}
      />
    </div>,
    <div className="item" data-value="6">
      <FeatureCard
        title="UTBK"
        onClick={() => history.push(ROUTES.RECOMMENDATION)}
      />
    </div>,
  ];

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center feature">
      <div className="d-flex justify-content-center align-items-center feature-title">
        <h1 className="text-dark text-center">Fitur di Kampus Indonesia</h1>
      </div>
      <div className=" d-flex justify-content-center align-items-center feature-content">
        <AliceCarousel mouseTracking items={items} responsive={responsive} />
      </div>
    </div>
  );
};

export default Feature;
