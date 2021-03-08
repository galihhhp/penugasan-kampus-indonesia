const CampusCardDetail = ({ data }) => {
  const { name, logo, type, accreditation, location } = data;

  return (
    <div>
      <p>{name}</p>
      <p>{type}</p>
      <p>{accreditation}</p>
      <p>{location}</p>
    </div>
  );
};

export default CampusCardDetail;
