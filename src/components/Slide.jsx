/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Slide = ({ book }) => {
  return (
    <div
      className='slide'
      style={{ backgroundImage: `url(${book?.formats["image/jpeg"]})` }}
    >
      <div className='slide-texts container mx-auto md:px-5 flex flex-col justify-center items-start h-full gap-3 text-amber-400'>
        <h1 className='space-font text-4xl max-[640px]:text-lg max-[640px]:w-2/3 text-amber-400 uppercase relative z-[5] w-2/5'>
          {book?.title}
        </h1>

        <Link
          t0='#'
          className='slide-btn uppercase h-14 w-72 border text-amber-400 border-violet-50 py-2 px-4 duration-500 hover:text-violet-50 mt-5 max-[480px]:hidden'
        >
          <span className='z-[11] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center max-[640px]:text-sm'>
            {book?.title}
          </span>
        </Link>
      </div>
      <div className='ovelay w-full h-full absolute z-[0] bg-slate-700/10 top-0 left-0 right-0 bottom-0'></div>
    </div>
  );
};

export default Slide;
