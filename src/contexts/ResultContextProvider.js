import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Nike");

  // /videos, /search, /images
  const getResults = async (type, keyword = "Nike", num = 40) => {
    setIsLoading(true);

    const url = new URL(`${baseUrl}`);
    url.searchParams.set("query", keyword);
    url.searchParams.set("limit", num);
    url.searchParams.set("related_keywords", "true");

    console.log("sdsd", {
      env: process.env.REACT_APP_API_KEY,
    });

    const response = await fetch(url, {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '1145b2ca2cmsh195312dac74c2c9p1dcf77jsn852bc2ffcd28',
        'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
      },
    });
    const data = await response.json();

    console.log({ type, data });
    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/images")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
