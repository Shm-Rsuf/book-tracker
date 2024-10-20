/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// Create a Context for the books
export const BooksContext = createContext();

// Create a Provider Component
export function BooksProvider({ children, booksData }) {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("");

  // State to hold filtered books
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  // Filter books based on the search term
  useEffect(() => {
    const filtered = booksData.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchTerm, booksData]);

  return (
    <BooksContext.Provider value={{ searchTerm, setSearchTerm, filteredBooks }}>
      {children}
    </BooksContext.Provider>
  );
}
