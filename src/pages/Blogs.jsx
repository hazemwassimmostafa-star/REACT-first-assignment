
// import { useState } from "react";
// import blogsData from "../data/blogs.json";
// import BlogCard from "../components/BlogCard";
// import "../css/Blogs.css";
// import"../css/index.css"

// function Blogs() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [view, setView] = useState("grid");
//   const [currentPage, setCurrentPage] = useState(1);


//   const blogs = Array.isArray(blogsData)
//     ? blogsData
//     : blogsData.blogs || blogsData.data || blogsData.posts || [];


//   const categories = ["all", ...new Set(blogs.map((b) => b.category))];


//   const filteredBlogs = blogs.filter((blog) => {
//     const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase());
//     const matchCategory = category === "all" || blog.category === category;
//     return matchSearch && matchCategory;
//   });


//   const blogsPerPage = 6;
//   const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
//   const startIndex = (currentPage - 1) * blogsPerPage;
//   const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);


//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//     setCurrentPage(1);
//   };
//   const handleCategory = (e) => {
//     setCategory(e.target.value);
//     setCurrentPage(1);
//   };

//   return (
//     <div className="blogs-container">
//       <h1>Blogs</h1>


//       <input
//         type="text"
//         placeholder="Search blogs..."
//         value={search}
//         onChange={handleSearch}
//         className="blogs-search"
//       />


//       <select value={category} onChange={handleCategory} className="blogs-filter">
//         {categories.map((cat) => (
//           <option key={cat} value={cat}>
//             {cat}
//           </option>
//         ))}
//       </select>


//       <div className="view-toggle">
//         <button
//           onClick={() => setView("grid")}
//           className={view === "grid" ? "active" : ""}
//         >
//           Grid
//         </button>
//         <button
//           onClick={() => setView("list")}
//           className={view === "list" ? "active" : ""}
//         >
//           List
//         </button>
//       </div>

//       <div className={`blogs-container ${view}`}>
//         {currentBlogs.map((blog) => (
//           <BlogCard key={blog.id} blog={blog} />
//         ))}
//       </div>



//       <div className="pagination">
//         <button
//           onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//           <button
//             key={page}
//             onClick={() => setCurrentPage(page)}
//             className={currentPage === page ? "active-page" : ""}
//           >
//             {page}
//           </button>
//         ))}
//         <button
//           onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Blogs;
//////

import { useState } from "react";
import blogsData from "../data/blogs.json";
import BlogCard from "../components/BlogCard";
import "../css/Blogs.css";
import"../css/index.css"

function Blogs() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const blogs = Array.isArray(blogsData)
    ? blogsData
    : blogsData.blogs || blogsData.data || blogsData.posts || [];

  const categories = ["all", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "all" || blog.category === category;
    return matchSearch && matchCategory;
  });

  const blogsPerPage = 6;
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="blogs-page">
      {/* Page Header */}
      <div className="blogs-header">
        <h1 className="page-title">المدونة</h1>
        <p className="page-description">
          اكتشف مقالات ونصائح حول التصوير الفوتوغرافي والإبداع
        </p>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="ابحث عن المقالات..."
            value={search}
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <div className="filter-controls">
          <select value={category} onChange={handleCategory} className="category-filter">
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "جميع الفئات" : cat}
              </option>
            ))}
          </select>

          <div className="view-toggle">
            <button
              onClick={() => setView("grid")}
              className={`view-btn ${view === "grid" ? "active" : ""}`}
            >
              ⊞ شبكة
            </button>
            <button
              onClick={() => setView("list")}
              className={`view-btn ${view === "list" ? "active" : ""}`}
            >
              ☰ قائمة
            </button>
          </div>
        </div>
      </div>

      {/* Blogs Container */}
      <div className={`blogs-container ${view}`}>
        {currentBlogs.length > 0 ? (
          currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} view={view} />
          ))
        ) : (
          <div className="no-results">
            <h3>لا توجد نتائج</h3>
            <p>جرب البحث بكلمات أخرى أو اختر فئة مختلفة</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            ← السابق
          </button>
          
          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`page-number ${currentPage === page ? "active" : ""}`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            التالي →
          </button>
        </div>
      )}
    </div>
  );
}

export default Blogs;
