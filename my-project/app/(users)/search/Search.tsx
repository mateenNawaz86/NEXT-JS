"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const searchHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <>
      <form onSubmit={searchHandler}>
        <input
          type="text"
          value={search}
          placeholder="Enter the search here..."
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2  text-black outline-none"
        />
        <button
          type="submit"
          className="bg-blue-400 py-1 px-2 text-white font-bold rounded-md ml-3"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
