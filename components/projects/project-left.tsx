"use client";

import {
  PiMagicWandThin,
  PiShapesThin,
  PiHouseLight,
} from "react-icons/pi";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";



interface ProjectLeftProps {
    title: string;
    imageUrl: string;
    stack: string[];
    download: number;
  }

  export default function ProjectLeft({title, download, stack, imageUrl}: ProjectLeftProps){
    
    return (
        <div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, type: "spring", stiffness: 175 },
          }}
          className=" hidden md:block bg-[#1c1c1c00] w-full md:w-70  h-fit sticky top-5 "
        >
          <div className=" md:w-70 w-full p-3 border border-neutral-800   rounded-2xl h-full bg-[#2121226b]  ">
            <div className="flex">
              <div className="w-full relative">
                
              <img
                className="w-28 h-28 rounded-full shadow"
                src={imageUrl}
                alt={"alt"}
              />
                
                <h1 className="font-bold text-xl  text-neutral-300 mt-3">
                  {title}
                </h1>
                <p className="text-xs font-medium text-neutral-300 mt-2">
                📧  info@horizondevelopers.co.za 
                </p>
  
                <p className="text-xs font-medium text-neutral-300 mt-1">
                  🌍  www.horizondevelopers.co.za
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
              
              <div className="mt-6 flex justify-between text-sm">
                <div className="flex items-center gap-x-1">
                  <PiShapesThin />
                  <span className="text-xs font-medium">
                    Downloads
                  </span>
                </div>
                <div className="flex items-center gap-x-1">
                  <PiMagicWandThin />
                  <span className="text-xs font-medium">{download}</span>
                </div>
              </div>
  

            </div>
          </div>
        </motion.div>
      </div>
    )
  }