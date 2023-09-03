import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 p-5 flex justify-between items-center">
      <p className="font-bold text-white">I am a header component</p>
      <Link href="/" className="px-2 py-1 bg-white text-blue-300 rounded-md">
        Back to Home
      </Link>
    </header>
  );
};

export default Header;
