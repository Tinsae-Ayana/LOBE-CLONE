const LobeFeaturesCard = ({ text, title, iconSrc }) => {
   return (
      <div className='flex  lg:flex-col flex-row  justify-start  lg:w-1/4 '>
         <div className='w-10 h-10 rounded-lg overflow-hidden m-2'>
            <video src={iconSrc} muted autoPlay loop className='object-cover w-10 h-10'></video>
         </div>
         <div>
            <h1 className='text-bigTextColor font-bold lg:text-3xl text-lg '>{title}</h1>
            <p className='text-bigTextColor lg:text-2xl text-sm text-left'>{text}</p>
         </div>
      </div>
   );
};

export default LobeFeaturesCard;
