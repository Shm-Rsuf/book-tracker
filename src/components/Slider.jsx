/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const Slider = ({ data, loading }) => {
  const books = data.slice(0, 5);

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? books.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === books.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  if (loading) return;

  return (
    <div className='frame relative mt-20'>
      <div
        className='slider'
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {books.map((book) => (
          <Slide book={book} key={book.id} />
        ))}
      </div>

      <div className='btns absolute z-[10] text-gray-700 text-2xl flex gap-10 bottom-10 w-screen justify-center'>
        <button
          onClick={prevSlide}
          className='prev-btn h-10 w-14 flex justify-center items-center bg-amber-400 text-violet-200 border border-violet-200 hover:bg-amber-500 hover:text-gray-300 hover:border-amber-300 duration-300'
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className='next-btn h-10 w-14 flex justify-center items-center bg-amber-400 text-violet-200  border border-violet-200 hover:bg-amber-500 hover:text-gray-300 hover:border-amber-300 duration-300'
        >
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
