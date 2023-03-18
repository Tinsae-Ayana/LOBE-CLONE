import Footer from "../components/Footer";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import CopyLink from "../components/CopyLink";

const Tour = () => {
   const [vidScreen, setVidScreen] = useState(false);
   const add = "fixed flex top-0 left-0 w-screen h-screen z-30 bg-blur overflow-hidden ";
   const remove = "fixed flex top-0 left-0 w-screen h-screen z-30 bg-blur  hidden";
   const toggle = () => {
      if (vidScreen) stopVideo("element");
      setVidScreen(!vidScreen);
   };

   var stopVideo = function (element) {
      var containerElement = document.getElementById(element);
      var iframe = containerElement.querySelector("iframe");
      if (iframe) {
         var iframeSrc = iframe.src;
         iframe.src = iframeSrc;
      }
   };

   return (
      <div className='relative'>
         <section>
            <div className='md:w-1/2 w-5/6 m-auto py-28 backdrop-blur-3xl'>
               <h1 className='font-bold md:text-5xl text-3xl text-bigTextColor pb-4 text-center'>
                  Lobe <span className='text-primaryColor'> Tour</span>
               </h1>
               <p className='md:text-3xl text-xl text-bigTextColor text-center'>
                  Build your first machine learning model in ten minutes. No code or experience required.
               </p>
            </div>
            <div className='w-2/3 overflow-hidden rounded-3xl m-auto hover:shadow-2xl duration-500' onClick={() => toggle()}>
               <img src='src/assets/playvidoeImage.jpg' alt='' />
            </div>
         </section>
         <section>
            <Footer></Footer>
         </section>
         <div className={vidScreen ? add : remove}>
            <div className='w-10/12 h-[95%] element m-auto rounded-3xl items-center overflow-hidden opacity-100 relative' id='element'>
               <iframe
                  className='w-full h-full object-cover '
                  src='https://www.youtube.com/embed/Mdcw3Sb98DA?autoplay=0&mute=0'
                  allowFullScreen
                  allow='autoplay'
               ></iframe>
               <CopyLink></CopyLink>
            </div>
            <AiOutlineClose
               className='fill-gray-400 absolute lg:right-6 right-1 lg:top-3 top-1 lg:w-14 w-7 lg:h-14  h-7'
               onClick={() => toggle()}
            ></AiOutlineClose>
         </div>
      </div>
   );
};

export default Tour;
