const FeatureCard = ({ title }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-white m-2 p-2 feature-card">
      <img src="https://placeimg.com/100/100/any" alt="cap" />
      <p>{title}</p>
    </div>
  );
};

export default FeatureCard;
