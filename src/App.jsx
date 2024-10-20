/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BooksProvider } from "../BooksContext";

import BookDetails from "./components/BookDetails";
import BooksPage from "./components/BookPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WishList from "./pages/WishList";

export default function App() {
  const [filteredBooks, setFilteredBooks] = useState([]);

  // State for books data, next and previous links
  const [books, setBooks] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  const handleFilteredBooks = (filtered) => {
    setFilteredBooks(filtered);
  };

  // Function to fetch data using fetch API
  const fetchBooks = async (url = "https://gutendex.com/books/") => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError(error);
    }
    setLoading(false);
  };

  // Fetch books on initial component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <BooksProvider booksData={books}>
        <Routes>
          <Route
            path='/'
            element={
              <BooksPage
                loading={loading}
                error={error}
                books={books}
                onFilter={handleFilteredBooks}
                next={next}
                previous={previous}
                fetchBooks={fetchBooks}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            }
          />
          <Route path='/book/:id' element={<BookDetails />} />
          <Route path='/wishlist' element={<WishList />} />
        </Routes>
      </BooksProvider>
      <Footer />
    </>
  );
}
