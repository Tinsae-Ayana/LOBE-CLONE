import LobeFeaturesCard from "../components/LobeFeaturesCard";
import ProjecTamplateCard from "../components/ProjectTamplateCard";
import Footer from "../components/Footer";
import BubbleContainer from "../components/BubbleContainer";
import TestimonyCard from "../components/TestimonyCard";
import { listOfTestimonies } from "../utils/DummyData";
import { AiOutlinePlayCircle } from "react-icons/ai";
import SwitchText from "../components/SwitchText";
import { FaChevronDown } from "react-icons/fa";

const Overview = () => {
   //function used to scrolldown

   const movedown = () => {
      window.scrollTo({
         top: window.innerHeight,
         behavior: "smooth",
      });
   };

   //function used to display and remove downarrow

   const togglebutton = () => {
      const scrollLen = document.documentElement.scrollTop;

      if (document.getElementById("downarrow")) {
         if (scrollLen > 100) {
            document.getElementById("downarrow").classList.remove("lg:block");
         } else {
            document.getElementById("downarrow").classList.add("lg:block");
         }
      }
   };

   window.addEventListener("scroll", togglebutton);

   return (
      <div id='overview'>
         <section className='relative'>
            <div className='w-4/5 flex lg:flex-row flex-col-reverse  justify-start items-center m-auto pb-10'>
               <div className='md:w-1/2'>
                  <h1 className='text-bigTextColor font-bold lg:text-6xl text-3xl lg:text-left text-center'>Train apps to</h1>
                  <SwitchText></SwitchText>
                  <h2 className='text-bigTextColor lg:text-3xl text-lg mt-4 lg:text-left text-center'>
                     <span className='lg:inline hidden'>Lobes helps you</span> <span className='lg:hidden'>Create</span> train machine learning models with a
                     free, easy to use tool.
                  </h2>
                  <div className='flex items-center space-x-3 mt-8 justify-center'>
                     <button className=' bg-primaryColor text-white font-bold lg:text-lg text-sm rounded-3xl lg:px-8 px-4 lg:py-2 py-1 hover:scale-105 duration-700'>
                        Download
                     </button>
                     <div className='flex items-center space-x-4 hover:scale-105 duration-700 '>
                        <h2 className='text-primaryColor font-bold lg:text-xl text-sm'>Watch Tour</h2>
                        <div>
                           <AiOutlinePlayCircle className='fill-primaryColor w-6 h-6'></AiOutlinePlayCircle>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='lg:w-1/2 w-full'>
                  <video src='./assets/lobe_vid_1.mp4' autoPlay playsInline muted loop className='w-full h-auto'></video>
               </div>
            </div>
            <div className='lg:block hidden' id='downarrow'>
               <FaChevronDown className='absolute bottom-10 left-1/2 w-10 h-10 animate-bounce fill-gray-500 ' onClick={() => movedown()}></FaChevronDown>
            </div>
         </section>
         <section className='bg-sectionBgColor py-10'>
            <div className='md:w-1/2  w-3/4  md:ml-40 ml-4 text-left mb-4'>
               <h1 className='text-bigTextColor font-bold lg:text-7xl text-4xl pt-8 '>
                  Machine learing made <span className='text-primaryColor'>easy</span>
               </h1>
            </div>
            <div className='md:w-1/2  w-11/12  md:ml-40 ml-4 text-left mb-4'>
               <p className='text-bigTextColor mt-4 text-lg lg:text-2xl'>
                  Lobe has everything you need to bring your machine learning ideas to life. Just show it examples of what you want it to learn, and it
                  automatically trains a custom machine learning model that can be shipped in your app.
               </p>
            </div>
            <img src='./assets/view_img.jpg' alt='' className='w-11/12 m-auto' />
            <div className='flex lg:flex-row flex-col justify-around w-10/12 m-auto'>
               <LobeFeaturesCard
                  title='Easy to use'
                  text='Designed to be easy enough for anyone to use. No code or experience required.'
                  iconSrc='./assets/icons/lightbulb.mp4'
               ></LobeFeaturesCard>
               <LobeFeaturesCard
                  title='Free and Private'
                  text='Train for free on your own computer without uploading your data to the cloud.'
                  iconSrc='./assets/icons/lock.mp4'
               ></LobeFeaturesCard>
               <LobeFeaturesCard
                  title='Export Anywhere'
                  text='Available for Mac and Windows. Export your model and ship it on any platform you choose.'
                  iconSrc='./assets/icons/shipicon.mp4'
               ></LobeFeaturesCard>
            </div>
            <div className='md:w-1/2  w-3/4  md:ml-40 ml-4 text-left mb-4 pt-10'>
               <h1 className='text-primaryColor font-bold lg:text-7xl text-4xl pt-8 '>
                  Project <span className='text-bigTextColor'>Templete</span>
               </h1>
            </div>
            <div className='md:w-1/2  w-11/12  md:ml-40 ml-4 text-left mb-4'>
               <p className='text-bigTextColor mt-4 text-lg lg:text-2xl'>
                  Lobe will automatically select the right machine learning architecture for your project. Image classification is available now, with more
                  templates coming soon.
               </p>
            </div>
            <div className='flex lg:justify-around justify-start px-10 space-x-10 lg:w-11/12 w-full  m-auto overflow-auto scrollbar-none'>
               <ProjecTamplateCard
                  title='Image classification'
                  status='ready'
                  iconSrc='./assets/icons/imgClass.mp4'
                  text='Label an image based on its content.'
               ></ProjecTamplateCard>
               <ProjecTamplateCard
                  title='Object Detection'
                  status='read'
                  iconSrc='./assets/icons/objectDet.mp4'
                  text='Locate an object inside of an image.'
               ></ProjecTamplateCard>
               <ProjecTamplateCard
                  title='Data classification'
                  status='read'
                  iconSrc='./assets/icons/dataClass.mp4'
                  text='Label data in a table based on its content.'
               ></ProjecTamplateCard>
            </div>
         </section>
         {/* the zig zag vidoe section */}
         <section className='z-0 pb-20'>
            <div className='md:w-2/4 md:ml-40 ml-4 pt-36'>
               <h1 className='font-bold md:text-4xl text-2xl text-bigTextColor pb-4'>
                  Label, Train,<span className='text-primaryColor'> Use</span>
               </h1>
               <p className='lg:text-2xl text-lg text-bigTextColor'>
                  Lobe simplifies the process of machine learning into three easy steps. Collect and label your images. Train your model and understand your
                  results. Then play, improve, and export your model.
               </p>
            </div>
            {/* first video display */}
            {/* first row of vidoe display */}
            <div className='relative lg:pt-40 pt-10 overflow-hidden'>
               <video src='./assets/lobe_vid_2.mp4' className='  aspect-video object-cover -z-1 ' loop autoPlay muted playsInline></video>
               <div className='md:w-2/4 md:ml-40 ml-4 lg:pt-36 lg:absolute lg:bottom-0'>
                  <h1 className='font-bold lg:text-4xl text-2xl text-primaryColor pb-4'>
                     Label <span className='text-bigTextColor'> your images</span>
                  </h1>
                  <p className='lg:text-2xl text-lg text-bigTextColor'>
                     Collect bursts using your webcam, or drag in a folder of images from your computer. Then quickly label your images to create a machine
                     learning dataset.
                  </p>
               </div>
            </div>
            <div className='relative lg:pt-40 pt-10 overflow-hidden'>
               <video src='./assets/lobe_vid_3.mp4' className=' aspect-video object-cover -z-1' loop autoPlay muted></video>
               <div className='md:w-2/4 lg:right-32 lg:pt-36 ml-4 lg:absolute bottom-0'>
                  <h1 className='font-bold lg:text-4xl text-2xl text-primaryColor pb-4'>
                     Train <span className='text-bigTextColor'> automatically</span>
                  </h1>
                  <p className='lg:text-2xl text-xl text-bigTextColor'>
                     Automatically train on your own computer without any setup or configuration. Understand the strengths and weaknesses of your model with
                     live visual results.
                  </p>
               </div>
            </div>
            <div className='relative lg:pt-40 pt-10 overflow-hidden'>
               <video src='./assets/lobe_vid_2.mp4' className=' aspect-video object-cover -z-1' loop autoPlay muted></video>
               <div className='lg:w-2/4 md:ml-40 ml-4 lg:pt-36 pt-10 lg:absolute bottom-0'>
                  <h1 className='font-bold lg:text-4xl text-2xl text-primaryColor pb-4'>
                     Use <span className='text-bigTextColor'> your model</span>
                  </h1>
                  <p className='lg:text-2xl text-lg text-bigTextColor'>
                     Use your model with your webcam or images from your computer. Improve your results by giving your model feedback on its predictions, then
                     finally export it to your app.
                  </p>
               </div>
            </div>
         </section>
         <section id='bubble' className='bg-sectionBgColor relative lg:pb-16'>
            <BubbleContainer></BubbleContainer>
            <div className='flex lg:justify-center justify-start space-x-10  px-10 lg:px-0 py-32 m-auto lg:w-[85%] overflow-auto scrollbar-none'>
               {listOfTestimonies.map((t, index) => (
                  <TestimonyCard imgSrc={t.imgSrc} testimony={t.testimony} name={t.name} role={t.role} index={index} key={index}></TestimonyCard>
               ))}
            </div>
            <div>
               <div className='lg:w-[60%] lg:mx-[15%] mx-4 lg:py-28 py-5'>
                  <h1 className='font-bold lg:text-7xl text-4xl text-primaryColor pb-6'>
                     <span className='text-bigTextColor'>Lobe</span> Example
                  </h1>
                  <p className='lg:text-3xl text-xl text-bigTextColor  '>
                     One tool, endless possibilities. Discover all the things you can train your app to do with Lobe.
                  </p>
               </div>
               {/* <div className='relative lg:h-60 h-32 overflow-hidden'>
                  <VideoCard videoSrc='src/assets/plantSpeicies.mp4' index={1}></VideoCard>
                  <VideoCard videoSrc='src/assets/scientificResearch.mp4' index={2}></VideoCard>
                  <VideoCard videoSrc='src/assets/smartCheckout.mp4' index={3}></VideoCard>
                  <VideoCard videoSrc='src/assets/telescopiciImagery.mp4' index={4}></VideoCard>
                  <VideoCard videoSrc='src/assets/whateWatching.mp4' index={5}></VideoCard>
                  <VideoCard videoSrc='src/assets/wildlifeBehavior.mp4' index={6}></VideoCard>
               </div>
               <div className='relative h-60 overflow-hidden mt-10 '>
                  <VideoCard videoSrc='src/assets/plantSpeicies.mp4' index={1}></VideoCard>
                  <VideoCard videoSrc='src/assets/scientificResearch.mp4' index={2}></VideoCard>
                  <VideoCard videoSrc='src/assets/smartCheckout.mp4' index={3}></VideoCard>
                  <VideoCard videoSrc='src/assets/telescopiciImagery.mp4' index={4}></VideoCard>
                  <VideoCard videoSrc='src/assets/whateWatching.mp4' index={5}></VideoCard>
                  <VideoCard videoSrc='src/assets/wildlifeBehavior.mp4' index={6}></VideoCard>
               </div> */}
            </div>
         </section>
         <Footer></Footer>
      </div>
   );
};

export default Overview;
