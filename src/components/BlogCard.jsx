// src/components/BlogCard.jsx
import { Link } from "react-router-dom";
import "../Blogcard.css"

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <h3>
        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
      </h3>
      <p>{blog.category}</p>
    </div>
  );
}

export default BlogCard;
