import React from "react";
import BlogDetailsSlider from "./BlogDetailsSlider";
import BlogDetailsContent from "./BlogDetailsContent";

const BlogDetails = () => {
  return (
    <div className="w-full flex flex-col">
      <BlogDetailsSlider />
      <BlogDetailsContent />
    </div>
  );
};

export default BlogDetails;
