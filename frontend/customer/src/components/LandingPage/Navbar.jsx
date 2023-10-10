import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { close, close2, logo, menu, menu2 } from '../../assets';
import { navLinks } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  function logout() {
    sessionStorage.clear();
    navigate('/login');
  }

  useEffect(() => {
    // Fungsi untuk mengatur state navbar ketika di-scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Mendaftarkan event listener ketika komponen dimount
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full flex justify-between items-center navbar ${
        isScrolled ? 'fixed top-0 left-0 right-0 bg-white shadow-md' : ''
      }`}
    >
      <img src={logo} alt="hoobank" className='w-[160] h-[160px]' />

      {/* Desktop Breakpoints */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 mr-10'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-8'
            } text-gray hidden-print`}
          >
            <Link
              to={`${nav.to}`}
              className={`block px-2 py-2 rounded-md font-medium text-[#faa935] hover:text-white hover:bg-[#faa935] ${nav.isActive ? 'bg-[#faa935]' : ''}`}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>



      {/* Mobile Breakpoints */}
      <div className='sm:hidden flex flex-1 justify-end items-center z-10'>
        <img
          src={toggle ? close2 : menu2}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 gray-bg absolute top-32 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[14px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-gray hidden-print`}
              >
                <Link to={`${nav.to}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={logout}
        className='w-[93px] h-[52px] text-white bg-alert rounded-lg hidden-print sm:block'
      >
        Keluar
      </button>
    </nav>
  );
};

export default Navbar;
