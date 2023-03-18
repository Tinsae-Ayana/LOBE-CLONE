export const SlideToRightAnimationHelper = (index, interval) => {
   switch (index) {
      case 1:
         return `-left-[130%]  animate-[toright_10s_linear_infinite]`;
      case 2:
         return "-left-[100%]" + ` animate-[toright_${Math.floor((2 * interval) / 2.25)}s_linear_infinite]`;
      case 3:
         return "-left-3/4" + ` animate-[toright_${Math.floor((1.75 * interval) / 2.25)}s_linear_infinite]`;
      case 4:
         return "-left-1/2" + ` animate-[toright_${Math.floor((1.5 * interval) / 2.25)}s_linear_infinite]`;
      case 5:
         const name5 = "-left-1/4" + ` animate-[toright_${Math.floor((1.25 * interval) / 2.25)}s_linear_infinite]`;
         return name5;
      case 6:
         const name6 = "left-0" + ` animate-[toright_${Math.floor(interval / 2.25)}s_linear_infinite]`;
         return name6;
   }
};
