import { useEffect, useState } from "react";

const SwitchText = () => {
   const [listOfTexts] = useState(["identify Plant", "See Gestures", "Count reps", "Feel emotions", "Sense Colors", "Check Safety"]);
   const [index, setIndex] = useState(0);

   const swichIndex = (peri) => {
      if (peri < 5) {
         return peri + 1;
      } else {
         return 0;
      }
   };

   const switchWithInterval = () => {
      setInterval(() => {
         setIndex(swichIndex);
      }, 5000);
   };

   useEffect(switchWithInterval, listOfTexts);
   return (
      <div>
         <h1 className='lg:text-6xl text-3xl text-primaryColor font-bold  mt-2 lg:text-left text-center animate-popup'>{listOfTexts[index]}</h1>
      </div>
   );
};

export default SwitchText;
