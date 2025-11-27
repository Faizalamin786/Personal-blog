import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    const res = await api.get(`/blogs/${id}`);
    setBlog(res.data);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  if (!blog) return <h2 className="text-center text-white mt-20">Loading...</h2>;

  return (
    <div
      className="
        min-h-screen 
        bg-gradient-to-r 
        from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
        py-18 px-6
        text-white
      "
    >
      <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">

        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-2xl shadow-lg"
        />

        {/* Title */}
        <h1 className="text-4xl font-extrabold mt-6 mb-2 bg-gradient-to-r from-yellow-300 to-red-400 bg-clip-text text-transparent">
          {blog.title}
        </h1>

        {/* Author */}
        <p className="text-lg font-semibold mb-2">
          ✍️ {blog.blogger_name}
        </p>

        {/* Category */}
        <p className="text-sm mb-6">
          <span className="px-3 py-1 rounded-full bg-white/40 text-gray-900 font-semibold">
            {blog.category}
          </span>
        </p>

        {/* Description */}
        <p className="text-gray-100 text-lg leading-relaxed">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
