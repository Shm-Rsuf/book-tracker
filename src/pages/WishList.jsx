import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const WishList = () => {
  const [booksWishList, setBooksWishList] = useState(
    JSON.parse(localStorage.getItem("booksWishList")) || []
  );

  const handleRemovebook = (bookId) => {
    const filteresbooks = booksWishList?.filter((book) => book.id !== bookId);
    localStorage.setItem("booksWishList", JSON.stringify(filteresbooks));
    setBooksWishList(JSON.parse(localStorage.getItem("booksWishList")));
  };

  return (
    <div className='mt-20 min-h-[62vh] relative'>
      {booksWishList.length !== 0 ? (
        <div className='absolute mt-20 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2'>
          <table className='mx-auto p-2 w-full border-1 border-gray-200'>
            <thead className='p-2 bg-gray-200'>
              <tr className=''>
                <th className='p-2'>Title</th>
                <th className='p-2'>Action</th>
              </tr>
            </thead>
            <tbody className='p-5'>
              {booksWishList.map((book) => (
                <tr key={book?.id} className='p-2 border'>
                  <td className='p-2'>{book?.title}</td>
                  <td className='py-1 flex justify-end items-center gap-1'>
                    <button className='bg-black text-white py-1 px-2 group'>
                      <Link to={`/book/${book?.id}`}>
                        <FaEye className='group-hover:text-red-600 group-hover:scale-110 duration-300' />
                      </Link>
                    </button>
                    <button
                      className='bg-rose-300 py-1 px-2 group'
                      onClick={() => handleRemovebook(book?.id)}
                    >
                      <FaTrash className='group-hover:text-red-600 group-hover:scale-110 duration-300' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='relative min-h-[62vh]'>
          <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            No data found
          </p>
        </div>
      )}
    </div>
  );
};

export default WishList;
