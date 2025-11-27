import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogForm from "./components/BlogForm";
import SingleBlog from "./pages/SingleBlog";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-blog" element={<BlogForm />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
