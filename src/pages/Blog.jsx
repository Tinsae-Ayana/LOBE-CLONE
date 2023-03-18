import BlogCard from "../components/BlogCard";
import { listOfBlogs } from "../utils/DummyData";
import Footer from "../components/Footer";

const Blog = () => {
   return (
      <div>
         <section>
            <div className='lg:w-1/2 w-[95%]  text-center m-auto lg:pt-16 pt-8'>
               <h1 className='lg:text-5xl text-3xl text-bigTextColor font-bold'>
                  Lobe <span className='text-primaryColor'>Blog</span>
               </h1>
               <p className='lg:text-2xl text-lg text-bigTextColor pt-4'>
                  Read about our newest releases, and get tips on how to create custom machine learning models with Lobe.
               </p>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 w-4/5 m-auto pt-10'>
               {listOfBlogs.map((blog, index) => {
                  return <BlogCard key={index} imgSrc={blog.imgSrc} title={blog.title} desc={blog.desc} date={blog.date}></BlogCard>;
               })}
            </div>
         </section>
         <section>
            <Footer></Footer>
         </section>
      </div>
   );
};

export default Blog;
