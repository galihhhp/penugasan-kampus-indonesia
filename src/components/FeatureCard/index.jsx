const FeatureCard = ({ title, onClick }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-white m-2 p-2 feature-card"
      onClick={onClick}>
      <p className="text-center text-capitalize m-0">{title}</p>
    </div>
  );
};

export default FeatureCard;
