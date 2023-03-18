import { Link } from "react-router-dom";
import { AiFillTwitterCircle, AiFillMessage, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
   return (
      <div>
         <div className='md:w-1/3 w-10/12 m-auto md:py-36  py-28'>
            <h1 className='text-center md:text-6xl  text-4xl  font-bold text-bigTextColor mb-10'>Train your app with Lobe</h1>
            <button className='block  bg-primaryColor text-white font-bold text-lg rounded-3xl px-6 py-2 m-auto hover:scale-105 duration-500'>Download</button>
         </div>
         <div className='flex md:flex-row  flex-wrap md:flex-nowrap flex-row md:justify-around   m-auto lg:w-4/5 border-solid border-gray-300 border-t pb-36'>
            <div className='flex flex-col md:items-start items-center order-5 md:order-1 justify-start space-y-2 text-start mt-20 w-full md:w-fit px-7'>
               <img src='src/assets/lobeLogo.png' alt='' />
               <h1 className='text-smallTextColor text-left ml-4'>A product by Microsoft.</h1>
               <h1 className='text-smallTextColor text-left ml-4'>All right reserved.</h1>
               <h1 className='text-smallTextColor text-left ml-4'>&copy; Microsoft 2021</h1>
            </div>
            <div className='flex flex-col md:items-start items-center justify-start space-y-2 text-start mt-20 order-1 md:order-2 w-1/2 md:w-fit px-7'>
               <Link className='text-smallTextColor text-left font-bold pb-4  hover:scale-105 duration-150 '>About</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>Download</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>Overview</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>Examples</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>Blog</Link>
            </div>
            <div className='flex flex-col md:items-start  items-center justify-start space-y-2 text-start mt-20 order-2 md:order-3 w-1/2 md:w-fit px-7'>
               <Link className='text-smallTextColor text-left font-bold pb-4   hover:scale-105 duration-150 '>General</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>Notice</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>License</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>Press Inquriy</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>Press Images</Link>
            </div>
            <div className='flex flex-col md:items-start items-center justify-start space-y-2 text-start mt-20 order-3 md:order-4 w-1/2 md:w-fit px-7'>
               <Link className='text-smallTextColor text-left font-bold pb-4   hover:scale-105 duration-150'>Resource</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>Help</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>Tour</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>Contact</Link>
               <Link className='text-smallTextColor text-left   hover:scale-105 duration-150'>Privacy</Link>
            </div>
            <div className=' lg:flex-row flex-col flex md:items-start items-center justify-between   mt-20 order-4 md:order-5 w-1/2 md:w-fit'>
               <Link className='px-7'>
                  <AiFillMessage className='w-10 h-10 fill-primaryColor  hover:scale-125 duration-150'></AiFillMessage>
               </Link>
               <Link className='px-7'>
                  <AiFillTwitterCircle className='w-10 h-10 fill-primaryColor  hover:scale-125 duration-150'></AiFillTwitterCircle>
               </Link>

               <Link className='px-7'>
                  <AiFillYoutube className='w-10 h-10 fill-primaryColor  hover:scale-125 duration-150'></AiFillYoutube>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Footer;
