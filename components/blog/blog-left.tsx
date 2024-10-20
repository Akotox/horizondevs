"use client";

import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectLeftProps {
  author: string;
  email: string;
  website: string;
  repo: string;
  image: string;
  stack: string[];
}

export default function BlogLeft({
  author,
  repo,
  stack,
  email,
  website,
  image,
}: ProjectLeftProps) {
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
              <img
                className="w-28 h-28 rounded-full shadow "
                src={image}
                alt={"alt"}
              />

              <h1 className="font-bold text-xl  text-neutral-300 mt-3">
                {author}
              </h1>
              <p className="text-xs font-medium text-neutral-300 mt-2">
                📧 {email}
              </p>

              <p className="text-xs font-medium text-neutral-300 mt-1">
                🌍 {website}
              </p>

              
            </div>

            <div className="flex gap-x-1 w-full h-fit">
              <Link href={"/"}>
                <div className="bg-neutral-700/50 h-7 w-7 hover:bg-blue-400 hover:scale-110 rounded-full flex items-center justify-center">
                  <PiHouseLight className="text-neutral-100" />
                </div>
              </Link>
            </div>
          </div>

          <div className="w-full mt-5 text-neutral-300">
           <Link href={repo}>
           <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-medium hover:bg-[#234ca5]">
              Github Code
            </button>
           </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
