const ProjecTamplateCard = ({ iconSrc, title, text, status }) => {
   return (
      <div className='bg-mainBgColor flex flex-col  px-10 basis-[300px] lg:basis-[30%] shrink-0 items-center rounded-3xl'>
         <video className='w-1/2 py-10' src={iconSrc} loop muted autoPlay></video>
         <div>
            <h1 className='text-black font-bold  text-xl  lg:text-2xl  text-center pb-3'>{title}</h1>
            <p className='text-bigTextColor lg:text-xl text-sm text-center mb-20 px-2'>{text}</p>
         </div>
         {status === "ready" ? (
            <button className='lg:block hidden bg-primaryColor text-white font-bold text-sm rounded-3xl px-4 py-1 w-3/4 mb-6'>AVAILABLE NOW</button>
         ) : (
            <button className='lg:block hidden bg-btnBgColor text-bigTextColor font-bold text-sm rounded-3xl px-4 py-1 w-3/4'>COMING SOON</button>
         )}
      </div>
   );
};

export default ProjecTamplateCard;
