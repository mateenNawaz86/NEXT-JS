"use client";

import React from "react";
import BlogPosts from "../components/BlogPosts";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <BlogPosts />
    </div>
  );
};

export default page;
