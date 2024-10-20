import { useContext } from "react";
import { BooksContext } from "../../BooksContext";
import SVGIMG from "../assets/Spin@1x-2.0s-200px-200px.gif";
import BookItem from "./BookItem";
import FilterBooks from "./FilterBooks";
import PaginationList from "./PaginationList";
import SectionTitle from "./shared/SectionTitle";
import Slider from "./Slider";

/* eslint-disable react/prop-types */
const BooksPage = ({
  loading,
  error,
  books,
  onFilter,
  next,
  previous,
  fetchBooks,
  currentPage,
  setCurrentPage,
}) => {
  const { filteredBooks } = useContext(BooksContext);
  if (loading)
    return (
      <div className='text-center flex justify-center items-center top-0 left-0 right-0 bottom-0 w-full h-[100vh] z-[111] relative'>
        <img src={SVGIMG} className='text-center' />
      </div>
    );
  if (error) return <p>Error fetching books: {error.message}</p>;

  books.slice(0, 5);

  return (
    <>
      <Slider data={books} loading={loading} />
      <SectionTitle title='List Of Books' />
      <main className='wrapper'>
        <FilterBooks books={books} onFilter={onFilter} />

        <div className=' grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredBooks
            ? filteredBooks.map((book) => (
                <BookItem key={book?.title} book={book} />
              ))
            : books.map((book) => <BookItem key={book?.title} book={book} />)}
        </div>
        {filteredBooks.length === 0 && (
          <p className='text-center text-2xl'>Books not found</p>
        )}

        <PaginationList
          next={next}
          previous={previous}
          fetchBooks={fetchBooks}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </>
  );
};

export default BooksPage;
