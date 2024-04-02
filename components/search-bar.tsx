"use client";

import { scrapeAndStoreProduct } from "@/actions";
import React, { FormEvent, useState } from "react";

// Host in this case is amazon
const isValidHostProductUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    // Check if hostname includes amazon
    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

const Searchbar = () => {
  const [searchPropmt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidLink = isValidHostProductUrl(searchPropmt);

    if (!isValidLink) return alert("Please provide a valid Amazon link");

    try {
      setIsLoading(true);

      // Scrape product
      const product = await scrapeAndStoreProduct(searchPropmt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter product link"
        value={searchPropmt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        className="searchbar-input"
      />
      <button
        disabled={searchPropmt === ""}
        type="submit"
        className="searchbar-btn"
      >
        {isLoading ? "Searching" : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;
