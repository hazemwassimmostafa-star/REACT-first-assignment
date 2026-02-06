
import { useParams, Link } from "react-router-dom";
import blogsData from "../data/blogs.json";
import "../BlogDetails.css";

function BlogDetails() {
  const { id } = useParams();

  const blogs = Array.isArray(blogsData)
    ? blogsData
    : blogsData.blogs || blogsData.data || blogsData.posts || [];

  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Blog not found</h2>
        <Link to="/blogs">Back to Blogs</Link>
      </div>
    );
  }


  const paragraphs = blog.content.split("##").map((p) => p.trim()).filter(Boolean);

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <p><strong>Category:</strong> {blog.category}</p>

      {paragraphs.map((para, index) => (
        <p key={index}>{para}</p>
      ))}

      <Link to="/blogs" className="back-link">Back to Blogs</Link>
    </div>
  );
}

export default BlogDetails;
