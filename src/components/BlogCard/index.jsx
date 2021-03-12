import classNames from "classnames";
import { useHistory } from "react-router-dom";
import { ROUTES } from "configs/routes";
import { useEffect } from "react";

const BlogCard = ({ blog, type, className }) => {
  const { id, title, time, readingTime } = blog;

  const history = useHistory();

  useEffect(() => (document.title = "Blog"));

  return (
    <div
      className="container m-2 p-2 blog-card"
      onClick={() =>
        history.push({
          pathname: `${ROUTES.BLOG}/${id}`,
          state: blog,
        })
      }
    >
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
