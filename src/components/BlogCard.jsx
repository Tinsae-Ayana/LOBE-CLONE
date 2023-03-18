const BlogCard = ({ imgSrc, desc, title, date }) => {
   return (
      <div className='rounded-3xl overflow-hidden  aspect-[90/100] shadow-2xl hover:scale-105 duration-500'>
         <div>
            <img src={imgSrc} alt='blog image' />
         </div>
         <div className='sm:pl-8 sm:pt-8 sm:pb-10 pl-4 pt-2 pb-4 pr-2 flex flex-col justify-between h-1/2'>
            <div>
               <h2 className='font-bold sm:text-2xl text-lg text-bigTextColor'>{title}</h2>
               <p className='text-smallTextColor sm:text-xl text-sm sm:pt-4 pt-2'>{desc}</p>
            </div>
            <div>
               <h2 className='text-gray-500  sm:text-xl text-sm  font-bold '>{date}</h2>
            </div>
         </div>
      </div>
   );
};

export default BlogCard;
