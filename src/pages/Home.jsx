import { Link } from "react-router-dom";
import blogsData from "../data/blogs.json";
import BlogCard from "../components/BlogCard";

import "../css/Home.css";

function Home() {

  /* GET BLOGS FROM JSON */
  const blogs =
    blogsData.posts ||
    blogsData.blogs ||
    blogsData.data ||
    blogsData ||
    [];


  /* GET FEATURED BLOGS (first 3 فقط) */
  const featuredBlogs = blogs.slice(0, 3);


  return (

    <div className="home">


      {/* FEATURED SECTION */}
      <section className="featured-section">

        <div className="section-header">

          <h2 className="section-title">
            أحدث المقالات
          </h2>

          <p className="section-description">
            اكتشف أحدث المقالات والنصائح
          </p>

        </div>


        <div className="home-blogs">

          {featuredBlogs.map((blog) => (

            <BlogCard
              key={blog.id}
              blog={blog}
              view="list"
            />

          ))}

        </div>


        <div className="view-all-container">

          <Link
            to="/blogs"
            className="view-all-button"
          >

            عرض جميع المقالات

          </Link>

        </div>

      </section>


    </div>

  );

}

export default Home;
