import Footer from "../components/Footer";
import { NavLink, Outlet } from "react-router-dom";

const Help = () => {
   const activeDec = "font-semibold text-xl text-white py-2  w-40 bg-primaryColor rounded-xl w-44 px-4";
   const notActiveDec = "font-semibold text-xl text-bigTextColor py-2 w-40 px-4";
   return (
      <div>
         <section>
            <div className='lg:w-1/2 w-[95%]  text-center m-auto lg:pt-16 pt-8'>
               <h1 className='lg:text-5xl text-3xl text-bigTextColor font-bold'>
                  Lobe <span className='text-primaryColor'>Help</span>
               </h1>
               <p className='lg:text-2xl text-lg text-bigTextColor pt-4'>Everything you need to know to train great machine learning models with Lobe.</p>
            </div>
            <div className='flex w-2/3 m-auto pt-16'>
               <div className='lg:flex flex-col basis-[25%] hidden '>
                  <NavLink to='' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     WelCome
                  </NavLink>
                  <NavLink to='Label' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Label
                  </NavLink>
                  <NavLink to='Train' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Train
                  </NavLink>
                  <NavLink to='Results' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Results
                  </NavLink>
                  <NavLink to='Play' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Play
                  </NavLink>
                  <NavLink to='Export' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Export
                  </NavLink>
                  <NavLink to='Improving' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Improving
                  </NavLink>
                  <NavLink to='Tips' className={({ isActive }) => (isActive ? activeDec : notActiveDec)}>
                     Tips
                  </NavLink>
                  <a href='https://www.reddit.com/r/Lobe/' target='_blank' className='font-semibold text-xl text-bigTextColor pt-10 pb-4 w-40 px-4'>
                     Comminuty
                  </a>
                  <NavLink to='/Tour' className='font-semibold text-xl text-bigTextColor py-3 w-40 px-4'>
                     Lobe Four
                  </NavLink>
                  <NavLink to='/Example' className='font-semibold text-xl text-bigTextColor py-3 w-40 px-4'>
                     Examples
                  </NavLink>
                  <a href='mailto:tinsaeaeroastro@gmail.com' className='font-semibold text-xl text-bigTextColor py-3 w-40 px-4'>
                     Contact us
                  </a>
               </div>
               <div>
                  <Outlet></Outlet>
               </div>
            </div>
         </section>
         <section>
            <Footer></Footer>
         </section>
      </div>
   );
};

export default Help;
