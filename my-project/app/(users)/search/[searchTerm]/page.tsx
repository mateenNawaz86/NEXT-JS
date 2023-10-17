import React from "react";

// props type define here
type PageProps = {
  params: {
    searchTerm: string; // it shows the data type for the searh term
  };
};

// type defination for the search results
type SearchResults = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${encodeURIComponent(
      searchTerm
    )}&api_key=${process.env.API_KEY}`
  );

  if (res.ok) {
    //   convert javaScript object into json
    const data: SearchResults = await res.json();
    return data;
  }
  throw new Error("Whoops something broke!");
};

const SearchResults = async ({ params: { searchTerm } }: PageProps) => {
  const searchResults = await search(searchTerm);

  return (
    <>
      <p className="text-orange-400 text-sm mt-4 ">
        Your Searched for: {searchTerm}
      </p>
      <ol className="space-y-5 p-5">
        {searchResults?.organic_results?.map((item) => (
          <li key={item.position} className="list-decimal">
            <p className="font-bold">{item.title}</p>
            <p>{item.snippet}</p>
          </li>
        ))}
      </ol>
    </>
  );
};

export default SearchResults;
