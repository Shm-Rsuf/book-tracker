const Footer = () => {
  return (
    <div>
      <h2 className=' footer bg-slate-200 text-black py-10 mt-10 font-medium flex justify-center items-center'>
        <p className='text-xl'>
          &copy;{new Date().getFullYear()},{" "}
          <span className='text-blue-600 font-semibold'>ZeptoApp</span>. All
          rights reserved.
        </p>
      </h2>
    </div>
  );
};

export default Footer;
