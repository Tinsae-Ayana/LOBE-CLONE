const TestimonyCard = ({ imgSrc, name, role, testimony, index }) => {
   return (
      <div
         className={`bg-mainBgColor basis-[320px] lg:basis-[30%] shrink-0 hover:scale-105 duration-700 flex-col items-start justify-start rounded-3xl p-10 space-y-8 lg:h-1/2 + ${
            index == 1 ? "lg:mt-12" : index == 2 ? "lg:mt-24" : "lg:mt-0"
         } `}
      >
         <img src={imgSrc} alt='person image' className='rounded-full w-1/5 ' />
         <p className='text-bigTextColor lg:text-2xl text-lg cursor-pointer'>{testimony}</p>
         <div>
            <h1 className='text-black font-semibold lg:text-2xl text-lg cursor-pointer'>{name}</h1>
            <h2 className='text-bigTextColor font-semibold lg:text-2xl text-lg cursor-pointer'>{role}</h2>
         </div>
      </div>
   );
};

export default TestimonyCard;
