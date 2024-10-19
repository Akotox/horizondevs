"use client";

import {
  PiHouseLight,
} from "react-icons/pi";

import { motion,} from "framer-motion";
import Link from "next/link";

interface ProjectLeftProps {
  author: string;
  email: string;
  website: string;
  date: string;
  bio: string;
  image: string;
  stack: string[];
}

export default function BlogLeft({
  author,
  date,
  bio,
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

              <div className="flex w-full   ">
                <div className="flex gap-x-1  text-xs my-4">
                  {stack.map((item, index) => (
                    <p className="bg-[#ffffff] text-black rounded-lg px-2 h-5 flex items-center justify-center text-[11px] font-bold">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-x-1 w-full h-fit">
              <Link href={"/"}>
                <div className="bg-neutral-700/50 h-7 w-7 hover:bg-blue-400 hover:scale-110 rounded-full flex items-center justify-center">
                  <PiHouseLight className="text-neutral-100" />
                </div>
              </Link>
            </div>
          </div>

          {/* <div className="w-full mt-5 text-neutral-300">
              <h2 className="font-bold my-2">Description</h2>
              <p className="text-[12px]  font-medium my-3">
                The world of digital design and development is constantly
                evolving and so has my role over the last 7 years.
              </p>
  
              <div className="mt-6 flex justify-between text-sm">
                <div className="flex items-center gap-x-1">
                  <PiShapesThin />
                  <span className="text-xs font-medium">
                    Downloads
                  </span>
                </div>
                <div className="flex items-center gap-x-1">
                  <PiMagicWandThin />
                  <span className="text-xs font-medium">32 000</span>
                </div>
              </div>
  
              <div className="border border-[#ffffff] text-neutral-300 my-6" />

            <div className="flex justify-between">
                <a href="#" aria-label="App Store" className="flex items-center justify-center w-16 h-16 rounded-full bg-white mr-4">
                    <PiAppStoreLogo className="w-5 h-5 text-black hover:text-blue-600" />
                </a>
                <a href="#" aria-label="Google Play" className="flex items-center justify-center w-16 h-16 rounded-full bg-white mr-4">
                    <PiGooglePlayLogo className="w-5 h-5 text-black hover:text-blue-600" />
                </a>
                <a href="#" aria-label="Chrome" className="flex items-center justify-center w-16 h-16 rounded-full bg-white">
                    <PiGoogleChromeLogo className="w-5 h-5 text-black hover:text-blue-600" />
                </a>
            </div>

            </div> */}
        </div>
      </motion.div>
    </div>
  );
}
