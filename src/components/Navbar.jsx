import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
   const activeDec = " text-bigTextColor font-bold text-lg hover:scale-105 duration-700";
   const notActiveDec = "text-smallTextColor font-bold text-lg hover:scale-105 duration-700";
   const [navShown, setShown] = useState(false);

   const showNav = () => {
      if (navShown) {
         document.getElementById("linkList").classList.remove("h-[80vh]");
         document.getElementById("linkList").classList.add("h-0");
         setShown(false);
      } else {
         document.getElementById("linkList").classList.remove("h-0");
         document.getElementById("linkList").classList.add("h-[80vh]");
         setShown(true);
      }
   };
   return (
      <nav className='bg-mainBgColor opacity-95 sticky top-0  z-10 h-fit'>
         <div className='flex justify-between lg:flex-row items-start py-4 px-7 relative'>
            <div className='flex justify-between items-center w-full lg:w-fit'>
               <div className='h-10'>
                  <img src='./assets/lobeLogo.png' alt='company log' className=' h-full object-cover ' />
               </div>
               <div className='lg:hidden rounded-full bg-btnBgColor p-2' onClick={showNav}>
                  <AiOutlineMenu className={`duration-700 ${navShown ? "hidden" : "block"}`}></AiOutlineMenu>
                  <AiOutlineClose className={`duration-700 ${navShown ? "block" : "hidden"}`}></AiOutlineClose>
               </div>
            </div>
            <div
               id='linkList'
               className='overflow-hidden bg-white lg:flex  lg:flex-row flex-col justify-evenly lg:w-4/5 w-full lg:px-2 px-7 space-y-7 lg:space-y-0 lg:relative absolute left-0 lg:top-0 top-14 lg:h-fit h-0 duration-700  '
            >
               <hr className='duration-700 lg:hidden block mt-5'></hr>
               <div className='flex  lg:flex-row flex-col justify-evenly w-1/2 lg:px-2 px-0 space-y-7 lg:space-y-0' onClick={showNav}>
                  <NavLink to='' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Overview
                  </NavLink>
                  <NavLink to='Example' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Examples
                  </NavLink>
                  <NavLink to='Tour' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Tour
                  </NavLink>
                  <NavLink to='Blog' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Blog
                  </NavLink>
                  <NavLink to='Help' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Help
                  </NavLink>
               </div>
               <button
                  id='download'
                  className='lg:block bg-primaryColor text-white hover:scale-105 duration-150 font-bold text-lg rounded-3xl px-6 py-2 lg:w-fit w-full'
               >
                  Download
               </button>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
