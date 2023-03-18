import { SlideToRightAnimationHelper } from "../utils/slideToRightAnimationHelper";

const VideoCard = ({ videoSrc, index }) => {
   return (
      <div className={`rounded-3xl hover:scale-105 duration-700 overflow-hidden w-1/3 absolute h-60  top-0 ` + SlideToRightAnimationHelper(index, 20)}>
         <video src={videoSrc} autoPlay loop muted className='object-cover'></video>
      </div>
   );
};

export default VideoCard;
