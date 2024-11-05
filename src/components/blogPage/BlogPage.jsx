import React from "react";
import BlogPageSlider from "./BlogPageSlider";
import BlogPageContent from "./BlogPageContent";

const BlogPage = () => {
  return (
    <div className="w-full flex flex-col">
      <BlogPageSlider />
      <BlogPageContent />
    </div>
  );
};

export default BlogPage;
