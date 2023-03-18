const ExampleCard = ({ videoSrc, title, desc }) => {
   return (
      <div className='overflow-hidden rounded-3xl shadow-2xl'>
         <video src={videoSrc} loop muted autoPlay playsInline className='object-cover w-full h-auto'></video>
         <div className='py-10 px-6'>
            <h1 className='text-bigTextColor md:text-2xl text-lg font-bold text-left pb-2'>{title}</h1>
            <p className='md:text-2xl text-lg text-smallTextColor text-left '>{desc}</p>
         </div>
      </div>
   );
};

export default ExampleCard;
