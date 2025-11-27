import React, { useEffect, useState } from "react";
import api from "../api/api";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchBlogs = async () => {
    const res = await api.get("/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const filteredBlogs = filter
    ? blogs.filter((b) => b.category === filter)
    : blogs;

  return (
    <div style={{padding:"90px"}}>
        <div className="text-center mb-10">
  <h2 className="text-4xl font-extrabold drop-shadow-lg">
    Explore Blogs
  </h2>
  <p className="text-lg opacity-90 mt-2">
    Discover content from amazing creators across categories.
  </p>
</div>
      <h2>Latest Blogs</h2>

      <select onChange={(e)=>setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option>Entertainment</option>
        <option>Technology</option>
        <option>Sports</option>
        <option>Business</option>
        <option>Health</option>
        <option>Science</option>
      </select>

      <div style={{
        display:"flex",
        gap:"20px",
        flexWrap:"wrap",
        marginTop:"20px"
      }}>
        {filteredBlogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
