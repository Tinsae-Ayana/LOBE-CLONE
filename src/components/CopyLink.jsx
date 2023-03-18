import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineContentCopy } from "react-icons/md";

const CopyLink = () => {
   const [copied, setCopied] = useState(false);

   const copyLink = () => {
      if (!copied) {
         navigator.clipboard.writeText("https://www.youtube.com/watch/Mdcw3Sb98DA");
         setCopied(true);
         setTimeout(() => {
            setCopied(false);
         }, 1000);
      }
   };

   return (
      <div className='absolute top-2 right-44 z-[9999]' onClick={() => copyLink()}>
         {!copied ? (
            <MdOutlineContentCopy className='w-7 h-7 fill-white'></MdOutlineContentCopy>
         ) : (
            <AiOutlineCheck className='w-7 h-7 fill-white'></AiOutlineCheck>
         )}
         <div>{!copied ? <h1 className='text-white hover:bg-black'>Copy Link</h1> : <h1 className='text-white hover:bg-black '>Link Copied</h1>}</div>
      </div>
   );
};

export default CopyLink;
