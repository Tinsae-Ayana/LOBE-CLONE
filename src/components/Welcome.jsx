import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const Welcome = () => {
   const [selected, setSelected] = useState(1);
   const hideContent = "hidden ";
   const displayContent = "";

   const toggleDisplay = (index) => {
      if (index == selected) {
         setSelected(null);
      } else {
         setSelected(index);
      }
   };
   return (
      <div className='lg:w-[600px] w-full'>
         <div className='border-b border-gray-200'>
            <div className='flex justify-between items-center font-bold text-xl text-smallTextColor pb-8' onClick={() => toggleDisplay(1)}>
               <h1>What is Lobe?</h1>
               {selected == 1 ? <FaChevronUp></FaChevronUp> : <FaChevronDown></FaChevronDown>}
            </div>
            <div className={selected == 1 ? displayContent : hideContent}>
               <p className='text-lg text-smallTextColor pb-5'>
                  Lobe is a free, private desktop application that has everything you need to take your machine learning ideas from prototype to production.
               </p>
               <ul className='text-lg text-smallTextColor list-none pb-8'>
                  <li className='py-3'>
                     <BsCheckCircleFill className='inline-block fill-primaryColor pr-1'></BsCheckCircleFill> Label your example
                  </li>
                  <li className='py-3'>
                     {" "}
                     <BsCheckCircleFill className='inline-block fill-primaryColor pr-1'></BsCheckCircleFill>Train your model
                  </li>
                  <li className='py-3'>
                     {" "}
                     <BsCheckCircleFill className='inline-block fill-primaryColor pr-1'></BsCheckCircleFill>Evalute training Results
                  </li>
                  <li className='py-3'>
                     {" "}
                     <BsCheckCircleFill className='inline-block fill-primaryColor pr-1'></BsCheckCircleFill>Play with your model
                  </li>
                  <li className='py-3'>
                     {" "}
                     <BsCheckCircleFill className='inline-block fill-primaryColor pr-1'></BsCheckCircleFill>Export and use your model in app
                  </li>
               </ul>
            </div>
         </div>
         <div className='border-b border-gray-200 pt-5'>
            <div className='flex justify-between items-center font-bold text-xl text-smallTextColor pb-8' onClick={() => toggleDisplay(2)}>
               <h1>What is Machine Learning?</h1>
               {selected == 2 ? <FaChevronUp></FaChevronUp> : <FaChevronDown></FaChevronDown>}
            </div>
            <div className={selected == 2 ? displayContent : hideContent}>
               <p className='text-lg text-smallTextColor pb-5'>
                  Machine learning is software that learns to perform a task from a collection of examples rather than through a person explicitly defining
                  rules and formulas. This learning software is called a model. Teaching a model through examples is called training.
               </p>
               <p className='text-lg text-smallTextColor pb-5'>Learn more in this beginner crash course.</p>
            </div>
         </div>
         <div className='border-b border-gray-200 pt-5'>
            <div className='flex justify-between items-center font-bold text-xl text-smallTextColor pb-8' onClick={() => toggleDisplay(3)}>
               <h1>What kind of machine learning can I train with Lobe?</h1>
               {selected == 3 ? <FaChevronUp></FaChevronUp> : <FaChevronDown></FaChevronDown>}
            </div>
            <div className={selected == 3 ? displayContent : hideContent}>
               <p className='text-lg text-smallTextColor pb-5'>
                  This version of Lobe learns to look at images using image classification - categorizing an image into a single label overall. We are working
                  to expand to more types of problems and data in future versions.
               </p>
               <p className='text-lg text-smallTextColor pb-5'>Learn more in this beginner crash course.</p>
            </div>
         </div>
         <div className='border-b border-gray-200 pt-5'>
            <div className='flex justify-between items-center font-bold text-xl text-smallTextColor pb-8' onClick={() => toggleDisplay(4)}>
               <h1>What is image classification?</h1>
               {selected == 4 ? <FaChevronUp></FaChevronUp> : <FaChevronDown></FaChevronDown>}
            </div>
            <div className={selected == 4 ? displayContent : hideContent}>
               <p className='text-lg text-smallTextColor pb-5'>
                  Image classification is categorizing an image into a single label to represent its content. Apps using image classification could:
               </p>
               <ul className='text-lg text-smallTextColor list-none pb-8'>
                  <li className='py-3'>
                     <BsCheckCircleFill className='inline-block fill-primaryColor pr-1'></BsCheckCircleFill> Tell you when someone is coming up your front steps
                  </li>
                  <li className='py-3'>
                     <BsCheckCircleFill className='inline-block fill-primaryColor pr-1'></BsCheckCircleFill>Send you photos of a new bird that just started
                     showing up at your bird feeder
                  </li>
                  <li className='py-3'>
                     <BsCheckCircleFill className='inline-block fill-primaryColor pr-1'></BsCheckCircleFill>Count the number of push-ups you’ve done in a
                     workout
                  </li>
                  <li className='py-3'>
                     <BsCheckCircleFill className='inline-block fill-primaryColor pr-1'></BsCheckCircleFill>Alert you when a shelf is empty
                  </li>
                  <li className='py-3'>
                     <BsCheckCircleFill className='inline-block fill-primaryColor pr-1'></BsCheckCircleFill>Read signs in you environment
                  </li>
               </ul>
            </div>
         </div>
         <div className='border-b border-gray-200 pt-5'>
            <div className='flex justify-between items-center font-bold text-xl text-smallTextColor pb-8' onClick={() => toggleDisplay(5)}>
               <h1>How to use my model</h1>
               {selected == 5 ? <FaChevronUp></FaChevronUp> : <FaChevronDown></FaChevronDown>}
            </div>
            <div className={selected == 5 ? displayContent : hideContent}>
               <p className='text-lg text-smallTextColor pb-5'>
                  A model is a piece of code. You can export your model into a variety of industry-standard formats to run on Mac and Windows, the web, or
                  mobile and edge devices. You can also export and use your model in Power Platform. See our GitHub for sample projects and other tools for
                  working with Lobe. We are also working on a collection of apps and integrations to help run your model without any code.
               </p>
            </div>
         </div>
         <div className='border-b border-gray-200 pt-5'>
            <div className='flex justify-between items-center font-bold text-xl text-smallTextColor pb-8' onClick={() => toggleDisplay(6)}>
               <h1>How much does lobe costs?</h1>
               {selected == 6 ? <FaChevronUp></FaChevronUp> : <FaChevronDown></FaChevronDown>}
            </div>
            <div className={selected == 6 ? displayContent : hideContent}>
               <p className='text-lg text-smallTextColor pb-5'>Lobe is free and runs entirely on your computer.</p>
            </div>
         </div>
         <div className='border-b border-gray-200 pt-5'>
            <div className='flex justify-between items-center font-bold text-xl text-smallTextColor pb-8' onClick={() => toggleDisplay(7)}>
               <h1>What kind of machine learning can I train with Lobe?</h1>
               {selected == 7 ? <FaChevronUp></FaChevronUp> : <FaChevronDown></FaChevronDown>}
            </div>
            <div className={selected == 7 ? displayContent : hideContent}>
               <p className='text-lg text-smallTextColor pb-5'>
                  This version of Lobe learns to look at images using image classification - categorizing an image into a single label overall. We are working
                  to expand to more types of problems and data in future versions.
               </p>
            </div>
         </div>
         <div className='border-b border-gray-200 pt-5'>
            <div className='flex justify-between items-center font-bold text-xl text-smallTextColor pb-8' onClick={() => toggleDisplay(8)}>
               <h1>Do I need any machine learning experience?</h1>
               {selected == 8 ? <FaChevronUp></FaChevronUp> : <FaChevronDown></FaChevronDown>}
            </div>
            <div className={selected == 8 ? displayContent : hideContent}>
               <p className='text-lg text-smallTextColor pb-5'>
                  No machine learning knowledge is necessary. Lobe follows best practices while automatically building and training a model for you.
               </p>
            </div>
         </div>
         <div className='border-b border-gray-200 pt-5'>
            <div className='flex justify-between items-center font-bold text-xl text-smallTextColor pb-8'>
               <h1>Ask question in the Lobe community.</h1>
               <FaChevronRight></FaChevronRight>
            </div>
         </div>
      </div>
   );
};

export default Welcome;
