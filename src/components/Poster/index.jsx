import classNames from "classnames";

const Poster = ({ data, seminar, competition, className }) => {
  const { poster } = data;

  return (
    <div className="poster">
      <img
        className={classNames(
          { seminar: seminar, competition: competition },
          className
        )}
        src={poster}
        alt="Poster"
      />
    </div>
  );
};

export default Poster;
