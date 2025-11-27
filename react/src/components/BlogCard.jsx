import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div
      className="
        bg-white/30 backdrop-blur-lg
        border border-white/40
        rounded-2xl overflow-hidden 
        shadow-xl 
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-300
          h-[460px]  
          w-[250px]
          flex flex-col
      "
    >
      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">

        {/* Category Badge */}
        <span
          className="
            inline-block px-3 py-1 mb-3 
            text-sm font-semibold 
            bg-linear-to-r from-[#00b09b] to-[#00e0d3]
            text-white rounded-full shadow-md
          "
        >
          {blog.category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {blog.title}
        </h3>

        {/* Blogger Name */}
        <p className="text-gray-600 text-sm font-medium mb-3">
          ✍️ {blog.blogger_name}
        </p>

        {/* Description */}
        <p className="text-gray-700 text-xs mb-3 line-clamp-3 leading-snug">
          {blog.description.substring(0, 100)}...
        </p>

        {/* Read More Button */}
        <Link to={`/blog/${blog.id}`}>
          <button
            className="
              w-full py-2 mt-2 
              bg-linear-to-r from-[#00e0d3] to-[#96deff]
              text-gray-900 font-semibold rounded-xl
              hover:opacity-90 
              transition-all duration-200
              shadow-md
              cursor-pointer
            "
          >
            Read More →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
