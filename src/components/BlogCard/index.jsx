import classNames from "classnames";

const BlogCard = ({ blog, type, className }) => {
  const { title, time, readingTime } = blog;

  return (
    <div className="container m-2 p-2 blog-card">
      <div className={classNames({ [`blog-card-${type}`]: type }, className)}>
        <div className="row">
          <div className="col ml-2">
            <h5>{title}</h5>
            <p className="m-0">{time}</p>
            <p className="m-0 mb-2">Membutuhkan waktu {readingTime} menit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
