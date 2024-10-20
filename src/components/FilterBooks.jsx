import { useContext } from "react";
import { BooksContext } from "../../BooksContext";

const FilterBooks = () => {
  const { searchTerm, setSearchTerm } = useContext(BooksContext);

  return (
    <div className='mb-10 min-[600px]:w-[20rem]'>
      <h3 className='py-2'>Filter Your Books</h3>
      <input
        type='text'
        name='filterBooks'
        id='filterBooks'
        className='border p-2 w-full focus:outline-none'
        placeholder='Search by title...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default FilterBooks;
