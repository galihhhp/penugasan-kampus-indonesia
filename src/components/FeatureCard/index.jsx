const FeatureCard = ({ title }) => {
  return (
    <div className="d-flex justify-content-center align-items-center text-white m-2 p-2 feature-card">
      <p className="text-center text-capitalize m-0">{title}</p>
    </div>
  );
};

export default FeatureCard;
