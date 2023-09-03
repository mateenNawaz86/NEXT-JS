import React from "react";
import BlogPosts from "./components/BlogPosts";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-3xl font-semibold tracking-wider text-blue-500">
          Hunting Coder
        </h1>

        <p className="text-lg my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          animi?
        </p>

        <BlogPosts />
      </div>
    </>
  );
};

export default Home;
