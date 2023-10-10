import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { close2, logo, menu2 } from '../../assets';
import { navLinks } from '../../constants';

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.clear();
    navigate('/loginAdmin');
  }

  return (
    <div className={`h-screen flex overflow-hidden bg-gray-100 border-r-2 ${toggle ? 'sidebar-open' : ''}`}>
      {/* Sidebar */}
      <div className="bg-white shadow-xl sidebar w-full">
        <div className=" pt-2 pb-3 space-y-1 ">
          <img src={logo} alt="hoobank" className="w-[160px] h-[160px] mx-auto " />

          {navLinks.map((nav, index) => (
            <Link
              key={nav.id}
              to={nav.to}
              className={`block px-3 py-5 rounded-md text-xl  font-medium text-gray-400 hover:text-gray-900 hover:bg-[#faa83586] ${
                sessionStorage.getItem('role') === 'resepsionis' ? 'hidden' : ''
              }`}
            >
              {nav.title}
            </Link>
          ))}

          <Link
            to="/dataPemesanan"
            className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 ${
              sessionStorage.getItem('role') === 'admin' ? 'hidden' : ''
            }`}
          >
            Pemesanan
          </Link>
          <div className='w-full flex justify-center mt-20'>
          <button
            onClick={logOut}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-14 mx-auto rounded focus:outline-none focus:ring focus:border-blue-300 mt-10"
          >
            Log Out
          </button>
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto focus:outline-none">
        {/* Add your page content here */}
        {/* For example, you can add a router outlet for displaying different pages */}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="fixed inset-0 flex z-40 sm:hidden">
        <div
          className={`fixed inset-0 transition-opacity ${
            toggle ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
        </div>

        <div
          className={`relative flex-1 flex flex-col max-w-xs w-full bg-white transform transition ease-in-out duration-300 ${
            toggle ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="absolute top-0 right-0 -mr-14 p-1">
            <button
              onClick={() => setToggle(false)}
              className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
            >
              <img src={close2} alt="close" className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Sidebar content here */}
          {/* You can use the same content as the desktop sidebar */}
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Add links here */}
          </div>
        </div>

        <div className="flex-shrink-0 w-14">{/* Spacer */}</div>
      </div>
    </div>
  );
};

export default Sidebar;
