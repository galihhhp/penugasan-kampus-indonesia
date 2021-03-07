import { FeatureCard } from "components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Feature = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = [
    <div className="item" data-value="1">
      <FeatureCard title="Kampus" />
    </div>,
    <div className="item" data-value="2">
      <FeatureCard title="Beasiswa" />
    </div>,
    <div className="item" data-value="3">
      <FeatureCard title="Seminar & Workshop" />
    </div>,
    <div className="item" data-value="4">
      <FeatureCard title="Lowongan" />
    </div>,
    <div className="item" data-value="5">
      <FeatureCard title="Lomba" />
    </div>,
    <div className="item" data-value="6">
      <FeatureCard title="UTBK" />
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
