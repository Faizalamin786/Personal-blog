import React, { useState } from "react";
import api from "../api/api";

const BlogForm = () => {
  const [form, setForm] = useState({
    category: "",
    title: "",
    blogger_name: "",
    image: "",
    description: "",
  });

  const [error, setError] = useState("");

  const validate = () => {
    if (form.title.length < 3) return "Title must be at least 3 characters";
    if (form.blogger_name.length < 3) return "Blogger name must be at least 3 characters";
    if (!form.category) return "Please select a category";
    if (form.description.length < 3) return "Description must be 3+ characters";
    if (!form.image.startsWith("http")) return "Please use a valid image URL";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    await api.post("/blogs", form);

    alert("Blog added!");
    setForm({
      category: "",
      title: "",
      blogger_name: "",
      image: "",
      description: "",
    });
  };

  return (
    <div
      className="
        min-h-screen 
        bg-gradient-to-r from-[#ff6a00] via-[#ee0979] to-[#6a11cb] 
        flex justify-center items-center 
        p-6
      "
    >
      <div
        className="
          w-full max-w-lg 
          bg-white/20 backdrop-blur-lg 
          border border-white/30 
          rounded-3xl shadow-2xl 
          p-8
        "
      >
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">
          Add New Blog
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-300 font-semibold text-center mb-4">
            ⚠️ {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Category */}
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="
              w-full p-3 rounded-xl 
              bg-white/70 text-gray-900 font-medium 
              shadow-md border border-gray-300 
              focus:ring-4 focus:ring-pink-300 
              cursor-pointer
            "
          >
            <option value="">Select Category</option>
            <option>Entertainment</option>
            <option>Technology</option>
            <option>Sports</option>
            <option>Business</option>
            <option>Health</option>
            <option>Science</option>
          </select>

          {/* Title */}
          <input
            type="text"
            placeholder="Blog Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="
              w-full p-3 rounded-xl 
              bg-white/70 text-gray-900 
              shadow-md border border-gray-300 
              focus:ring-4 focus:ring-purple-300
            "
          />

          {/* Blogger Name */}
          <input
            type="text"
            placeholder="Blogger Name"
            value={form.blogger_name}
            onChange={(e) => setForm({ ...form, blogger_name: e.target.value })}
            className="
              w-full p-3 rounded-xl 
              bg-white/70 text-gray-900 
              shadow-md border border-gray-300 
              focus:ring-4 focus:ring-purple-300
            "
          />

          {/* Image */}
          <input
            type="text"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="
              w-full p-3 rounded-xl 
              bg-white/70 text-gray-900
              shadow-md border border-gray-300 
              focus:ring-4 focus:ring-purple-300
            "
          />

          {/* Description */}
          <textarea
            placeholder="Blog Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows="5"
            className="
              w-full p-3 rounded-xl 
              bg-white/70 text-gray-900
              shadow-md border border-gray-300 
              focus:ring-4 focus:ring-purple-300
            "
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full py-3 mt-2 rounded-xl 
              bg-gradient-to-r from-[#00e0d3] to-[#96deff]
              text-gray-900 font-bold text-lg
              shadow-xl hover:opacity-90
              hover:scale-105 transition-all duration-300
            "
          >
            ➕ Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
