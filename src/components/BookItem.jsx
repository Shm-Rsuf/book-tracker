/* eslint-disable react/prop-types */
import { FaEye, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
  const nagigate = useNavigate();
  /* addToWishListHandaler */
  const addToWishListHandaler = (wishListbook) => {
    const storeBookWishList =
      JSON.parse(localStorage.getItem("booksWishList")) || [];
    const isExist = storeBookWishList.some(
      (wbook) => wbook.id === wishListbook.id
    );

    if (isExist) {
      alert("Already added");
      return;
    }
    localStorage.setItem(
      "booksWishList",
      JSON.stringify([...storeBookWishList, wishListbook])
    );
    nagigate("/wishlist");
  };

  return (
    <div className='cart-item'>
      <div className='cover-img h-[250px] overflow-hidden group rounded'>
        <img
          src={book?.formats["image/jpeg"]}
          alt={book?.title}
          className='w-full h-full object-cover group-hover:scale-105 rounded'
        />
      </div>
      <div className='body-info mt-5 flex flex-col gap-5'>
        <div className='book-title h-20 overflow-hidden'>
          <h3 className='truncate text-2xl font-semibold hover:text-amber-400 duration-500 cursor-pointer'>
            <Link to={`/book/${book.id}`}>{book?.title}</Link>
          </h3>
          <p>{book?.authors[0]?.name}</p>
        </div>

        <div className='flex justify-between'>
          <button
            onClick={() => addToWishListHandaler(book)}
            title='wishlist'
            className='bg-amber-400 py-2 px-2 rounded-md text-center font-semibold tracking-wider text-lg w-16 flex justify-center items-center hover:bg-amber-500 duration-500 cursor-pointer group'
          >
            <FaHeart
              className={`group-hover:text-red-600 group-hover:scale-110 duration-300`}
            />
          </button>
          <Link
            to={`/book/${book.id}`}
            title='view details'
            className='bg-amber-400 py-2 px-2 rounded-md text-center font-semibold tracking-wider text-lg w-16 flex justify-center items-center hover:bg-amber-500 duration-500 cursor-pointer group'
          >
            <FaEye className='group-hover:text-red-600 group-hover:scale-110 duration-300' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
