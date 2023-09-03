import React from "react";
import Link from "next/link";

const BlogPosts = () => {
  const blogData = [
    {
      title: "How to learn JavaScript in 2023?",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "How to learn Python in 2023?",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "How to learn Next.js in 2023?",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      title: "How to become a Full stack developer in 2023?",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-medium text-blue-600 my-2">Latest Blogs</h2>
      <div className="space-y-3">
        {blogData.map((item, index) => (
          <div key={index}>
            <Link
              href={"/blog/dynamic"}
              className="text-xl font-normal text-blue-400"
            >
              {item.title}
            </Link>
            <p>{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
