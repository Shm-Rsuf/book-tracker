import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import ZeptoLogo from "../assets/Zepto-logo.avif";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <header className='fixed left-0 right-0 top-0 z-[555] flex h-20 w-full items-center border-b border-gray bg-white/80 backdrop-blur-md'>
      <nav className='wrapper flex justify-between items-center'>
        <div>
          <Link to='/' className=''>
            <img src={ZeptoLogo} alt='Logo' style={{ height: "40px" }} />
          </Link>
        </div>
        <div className='max-[767px]:hidden'>
          <ul className='flex justify-center items-center gap-5'>
            <li className='nav-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='#'>About</Link>
            </li>
            <li className='nav-item'>
              <Link to='#'>Services</Link>
            </li>
          </ul>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          className='visible min-[768px]:hidden'
        >
          {toggle ? (
            <FaBars className='text-2xl ml-5' />
          ) : (
            <RxCross1 className='text-2xl ml-5' />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
