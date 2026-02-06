import { Link } from "react-router-dom";
import blogsData from "../data/blogs.json";
import "../Home.css"

function Home() {
  const blogs =
    blogsData.blogs ||
    blogsData.data ||
    blogsData.posts ||
    blogsData;

  const featuredBlogs = blogs.slice(0, 3); // أول 3 مقالات

  return (
   <div className="home">
  <div className="home-container">
    <div className="home-header">
      <h1>Welcome to the Blog</h1>
      <p>
        Discover articles about photography, technology, and creativity.
      </p>
    </div>

  <div className="home-grid">
  {featuredBlogs.map((blog) => (
    <div key={blog.id} className="home-card">
      <h3>{blog.title}</h3>
      <p>{blog.excerpt}</p>
      <Link to={`/blogs/${blog.id}`}>Read more →</Link>
    </div>
  ))}
</div>

  </div>
</div>
  );
}

export default Home;
