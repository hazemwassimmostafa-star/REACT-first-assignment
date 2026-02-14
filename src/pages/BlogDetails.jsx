//////

import { useParams, Link } from "react-router-dom";
import blogsData from "../data/blogs.json";
import "../css/BlogDetails.css";
import"../css/index.css";

function BlogDetails() {
  const { id } = useParams();

  const blogs =
    blogsData.posts || blogsData.blogs || blogsData.data || [];

  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <div className="blog-not-found">
        <div className="not-found-content">
          <h2>المقال غير موجود</h2>
          <p>عذرًا، لم يتم العثور على هذا المقال</p>

          <Link to="/blogs" className="back-button">
            العودة إلى المقالات
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = blog.content
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="blog-details">

      {/* HERO IMAGE */}
      <div className="blog-hero">
        <img src={blog.image} alt={blog.title} />

        <div className="blog-hero-overlay">
          <span className="blog-category-badge">
            {blog.category}
          </span>

          <h1 className="blog-main-title">
            {blog.title}
          </h1>

          <div className="blog-meta">

            <div className="meta-item">
              📅 {blog.date}
            </div>

            <div className="meta-item">
              ⏱ {blog.readTime}
            </div>

            <div className="meta-item author-meta">
              <img
                src={blog.author?.avatar}
                alt={blog.author?.name}
              />

              <span>{blog.author?.name}</span>
            </div>

          </div>
        </div>
      </div>


      {/* CONTENT */}
      <div className="blog-content">

        {paragraphs.map((para, index) => (
          <p key={index} className="blog-paragraph">
            {para}
          </p>
        ))}

      </div>


      {/* FOOTER */}
      <div className="blog-footer">

        <Link to="/blogs" className="back-link">
          ← العودة إلى المقالات
        </Link>

        <div className="share-section">

          <span className="share-label">
            مشاركة:
          </span>

          <div className="share-buttons">

            <button className="share-btn">📘</button>
            <button className="share-btn">🐦</button>
            <button className="share-btn">💼</button>
            <button className="share-btn">📧</button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BlogDetails;


//////
// import { useParams, Link } from "react-router-dom";
// import blogsData from "../data/blogs.json";
// import "../css/BlogDetails.css";
// import"../css/index.css"

// function BlogDetails() {
//   const { id } = useParams();

//   const blogs = Array.isArray(blogsData)
//     ? blogsData
//     : blogsData.blogs || blogsData.data || blogsData.posts || [];

//   const blog = blogs.find((b) => b.id.toString() === id);

//   if (!blog) {
//     return (
//       <div style={{ padding: "20px" }}>
//         <h2>Blog not found</h2>
//         <Link to="/blogs">Back to Blogs</Link>
//       </div>
//     );
//   }


//   const paragraphs = blog.content.split("##").map((p) => p.trim()).filter(Boolean);

//   return (
//     <div className="blog-details">
//       <h1>{blog.title}</h1>
//       <p><strong>Category:</strong> {blog.category}</p>

//       {paragraphs.map((para, index) => (
//         <p key={index}>{para}</p>
//       ))}

//       <Link to="/blogs" className="back-link">Back to Blogs</Link>
//     </div>
//   );
// }

// export default BlogDetails;
// // ///////
// // import { useParams, Link } from "react-router-dom";
// // import blogsData from "../data/blogs.json";
// // import "../css/BlogDetails.css";
// // import"../css/index.css"

// // function BlogDetails() {
// //   const { id } = useParams();

// //   const blogs = Array.isArray(blogsData)
// //     ? blogsData
// //     : blogsData.blogs || blogsData.data || blogsData.posts || [];

// //   const blog = blogs.find((b) => b.id.toString() === id);

// //   if (!blog) {
// //     return (
// //       <div className="blog-not-found">
// //         <div className="not-found-content">
// //           <h2>😕 المقال غير موجود</h2>
// //           <p>عذراً، لم نتمكن من العثور على المقال المطلوب</p>
// //           <Link to="/blogs" className="back-button">
// //             العودة إلى المدونة
// //           </Link>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const paragraphs = blog.content
// //     .split("##")
// //     .map((p) => p.trim())
// //     .filter(Boolean);

// //   return (
// //     <div className="blog-details">
// //       {/* Blog Header */}
// //       <div className="blog-header">
// //         <div className="blog-category-badge">{blog.category}</div>
// //         <h1 className="blog-main-title">{blog.title}</h1>
// //         <div className="blog-meta">
// //           <span className="meta-item">📅 {blog.date || "٢٠٢٤"}</span>
// //           <span className="meta-item">👤 {blog.author || "فريق عدسة"}</span>
// //           <span className="meta-item">⏱️ {blog.readTime || "٥ دقائق"}</span>
// //         </div>
// //       </div>

// //       {/* Blog Content */}
// //       <div className="blog-content">
// //         {paragraphs.map((para, index) => (
// //           <p key={index} className="blog-paragraph">
// //             {para}
// //           </p>
// //         ))}
// //       </div>

// //       {/* Blog Footer */}
// //       <div className="blog-footer">
// //         <Link to="/blogs" className="back-link">
// //           ← العودة إلى المدونة
// //         </Link>
        
// //         <div className="share-section">
// //           <span className="share-label">شارك المقال:</span>
// //           <div className="share-buttons">
// //             <button className="share-btn" aria-label="Share on Facebook">📘</button>
// //             <button className="share-btn" aria-label="Share on Twitter">🐦</button>
// //             <button className="share-btn" aria-label="Share on WhatsApp">💬</button>
// //             <button className="share-btn" aria-label="Copy Link">🔗</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default BlogDetails;
