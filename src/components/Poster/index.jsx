const Poster = ({ data }) => {
  const { poster } = data;

  return (
    <div className="poster">
      <img src={poster} alt="Poster Seminar" />
    </div>
  );
};

export default Poster;
