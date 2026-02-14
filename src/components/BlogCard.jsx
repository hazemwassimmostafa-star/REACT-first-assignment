import { Link } from "react-router-dom";
import "../css/BlogCard.css";

function BlogCard({ blog, view = "list" }) {

  return (

    <div className={`blog-card ${view}`}>

      {/* IMAGE SECTION */}
      <div className="blog-card-image-container">

        <img
          src={blog.image}
          alt={blog.title}
          className="blog-card-image"
        />

        <div className="blog-image-overlay"></div>

        <span className="blog-category-badge">
          {blog.category}
        </span>

      </div>


      {/* CONTENT SECTION */}
      <div className="blog-card-content">

        <h3 className="blog-title">

          <Link to={`/blogs/${blog.id}`}>
            {blog.title}
          </Link>

        </h3>


        <p className="blog-excerpt">

          {
            blog.excerpt ||
            blog.content?.substring(0, 140) + "..."
          }

        </p>


        {/* META */}
        <div className="blog-meta">

          <div className="meta-left">

            <img
              src={blog.author?.avatar}
              className="author-avatar"
              alt={blog.author?.name}
            />

            <span>
              {blog.author?.name}
            </span>

          </div>


          <div className="meta-right">

            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>

          </div>

        </div>


        <Link
          to={`/blogs/${blog.id}`}
          className="read-more"
        >
          اقرأ المقال ←
        </Link>

      </div>

    </div>

  );

}

export default BlogCard;
