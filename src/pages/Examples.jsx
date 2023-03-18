import Footer from "../components/Footer";
import ExampleCard from "../components/ExampleCard";
import { listofExamples } from "../utils/DummyData";

const Example = () => {
   return (
      <div>
         <section className='bg-mainBgColor'>
            <div className='md:w-1/2 w-11/12 m-auto py-28'>
               <h1 className='font-bold lg:text-5xl text-3xl text-primaryColor pb-4 text-center'>
                  Lobe <span className='text-bigTextColor'> Example</span>
               </h1>
               <p className='lg:text-3xl text-lg text-bigTextColor text-center'>
                  One tool, endless possibilities. Discover all the machine learning models you can train with Lobe.
               </p>
            </div>
            <div className='m-auto md:w-4/5 w-11/12 grid lg:grid-cols-2 grid-cols-1 gap-10'>
               {listofExamples.map((example, index) => {
                  return <ExampleCard title={example.title} desc={example.desc} videoSrc={example.videoSrc} key={index}></ExampleCard>;
               })}
            </div>
         </section>
         <section>
            <Footer></Footer>
         </section>
      </div>
   );
};

export default Example;
