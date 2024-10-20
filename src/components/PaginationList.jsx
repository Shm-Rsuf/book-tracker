import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
/* eslint-disable react/prop-types */
const PaginationList = ({
  next,
  previous,
  fetchBooks,
  currentPage,
  setCurrentPage,
}) => {
  // Handle navigation to the next page
  const handleNextPage = () => {
    if (next) {
      fetchBooks(next);
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  // Handle navigation to the previous page
  const handlePreviousPage = () => {
    if (previous) {
      fetchBooks(previous);
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  return (
    <section className='m-10 flex justify-center items-center py-5 gap-0'>
      <div className='flex justify-center items-center border border-violet-50'>
        <button
          onClick={handlePreviousPage}
          disabled={!previous}
          className=' text-center py-2 px-4 rounded-l-md bg-gray-200 cursor-pointer disabled:cursor-default disabled:bg-slate-300'
        >
          <BsArrowLeft className='text-2xl' />
        </button>
        <button className='py-2 px-4 font-semibold'>{currentPage}</button>
        <button
          onClick={handleNextPage}
          disabled={!next}
          className='py-2 text-center px-4 rounded-r-md bg-gray-200 cursor-pointer disabled:cursor-default disabled:bg-slate-300'
        >
          <BsArrowRight className='text-2xl' />
        </button>
      </div>
    </section>
  );
};

export default PaginationList;
