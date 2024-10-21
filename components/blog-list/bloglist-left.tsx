"use client";

import { PiHouseLight } from "react-icons/pi";

import { motion } from "framer-motion";
import Link from "next/link";
import Heading from "../ui/heading";
import CategoryCard from "./topics";
import { django, express, flutter, react, swift } from "@/lib/data/constant_data";

interface BlogListLeftProps {
  author: string;
  email: string;
  website: string;
  repo: string;
  image: string;
  stack: string[];
}



export default function BlogListLeft({
  author,
  repo,
  stack,
  email,
  website,
  image,
}: BlogListLeftProps) {
  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className=" hidden md:block bg-[#1c1c1c00] w-full md:w-70  h-fit sticky top-5 "
      >
        <div className=" md:w-70 w-full p-3 border border-neutral-800   rounded-2xl h-full bg-[#2121226b]  ">
          <div className="flex">
            <div className="w-full relative">
              
              <h1 className="font-bold text-xl  text-neutral-300 mt-3 pb-5">
              Other Topics
              </h1>

              <CategoryCard data={flutter} heading={"Flutter"} />
              <CategoryCard data={react} heading={"React Native"} />
              <CategoryCard data={swift} heading={"Swift UI"} />
              <CategoryCard data={django} heading={"Django"} />
              <CategoryCard data={express} heading={"Node Express"} />

            
            </div>

            
          </div>

        </div>
      </motion.div>
    </div>
  );
}
