import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(book);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://gutendex.com/books/${id}`);
        if (!response.ok) {
          throw new Error("Book not found");
        }
        const data = await response.json();
        setBook(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='wrapper mt-20 py-5'>
      {book ? (
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          <div className='cover-img h-[400px] overflow-hidden group rounded opacity-90 hover:opacity-100'>
            <img
              src={book?.formats["image/jpeg"]}
              alt={book?.title}
              className='w-full h-full object-cover group-hover:scale-105 rounded'
            />
          </div>
          <div>
            <h1 className='text-3xl font-semibold'>{book?.title}</h1>
            <p>
              <strong>Author:</strong> {book?.authors[0]?.name}
            </p>
            <p>
              <strong>Downloaded:</strong> {book?.download_count}
            </p>
            <Link
              to='#'
              className='bg-amber-400 py-2 px-4 rounded-md inline-block text-center font-semibold tracking-wider text-xl hover:bg-amber-500 duration-500 cursor-pointer mt-5'
            >
              Add To Cart
            </Link>
          </div>
        </div>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default BookDetails;
