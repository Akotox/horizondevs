"use client";


import { motion } from "framer-motion";
import ArticleList from "./article-list";
import { Related } from "@/lib/interfaces/blog";
import Adverts from "../ui/adverts";

interface SuggestionProps {
  related: Related[];
  courses: Related[];
}

export default function BlogRight({related, courses}: SuggestionProps) {
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

            <ArticleList articles={related}/>

              <div className="border border-neutral-700 my-5" />
          
          </div>
        </div>

        {
          courses.length > 0 && (
            <div>
              {
                courses.map((course, index) => (
                  <Adverts
                    key={index}
                    imageUrl={course.imageUrl}
                    title={course.title}
                    buttonText="View"
                    url={course.url}
                  />
                ))
              }
            </div>
          )
        }
      </div>
    </motion.div>
  );
}
