"use client";


import { motion } from "framer-motion";
import ArticleList from "./article-list";

export default function BlogRight() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="lg:block w-ful lg:w-fit hidden  max-xl:hidden "
    >
      <div className=" md:w-60 w-full rounded-2xl h-fit sticky top-5 ">
        <div>
          <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 h-fit">
            <h2 className="font-bold text-neutral-200">Related Articles</h2>
            
            <div className="border border-neutral-700 my-5" />

            <ArticleList />

              <div className="border border-neutral-700 my-5" />
          
          </div>
        </div>

        <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 text-neutral-50 "><img
                    className="h-32 w-56 object-cover rounded-lg"
                    src={
                      "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg"
                    }
                    alt={"alt"}
                  />
        
          <p className="my-3 font-medium text-sm">3D Games in Reactjs</p>
          <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-medium hover:bg-[#234ca5]">
            Get Now @20% OFF
          </button>
        </div>
      </div>
    </motion.div>
  );
}
