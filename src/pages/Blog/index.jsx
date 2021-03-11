import { useEffect } from "react";
import { BlogCard } from "components";
import blog from "db/blog.json";

const Blog = () => {
  useEffect(() => (document.title = "Blog"));

  const newBlog = blog.slice(0, 3);

  return (
    <div className="container pt-5 blog-page">
      <div className="row d-flex mb-3 blog-page-content">
        <div className="col-8 blog-page-content-main">
          <h2 className="text-center">Artikel kami</h2>
          {blog.map((blog) => (
            <div key={blog.id} className="m-2">
              <BlogCard blog={blog} type="main" />
            </div>
          ))}
        </div>
        <div className="col-4 blog-page-content-sidebar">
          <h3 className="text-center">Artikel popular</h3>
          {newBlog.map((newBlog) => (
            <div key={newBlog.id} className="m-2">
              <BlogCard blog={newBlog} type="sidebar" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
