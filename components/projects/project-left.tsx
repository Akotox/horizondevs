"use client";

import {
  PiMagicWandThin,
  PiShapesThin,
  PiHouseLight,
  PiAppStoreLogo,
  PiGooglePlayLogo,
  PiGoogleChromeLogo,

} from "react-icons/pi";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import profile from '@/public/images/testimonial-03.jpg'


interface ProjectLeftProps {
    author: string;
    date: string;
    bio: string;
    stack: string;
  }

  export default function ProjectLeft({author, date, bio, stack}: ProjectLeftProps){
    
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
                
                <Image
                  width={1000}
                  height={1000}
                  className="w-28 h-28 rounded-full object-cover"
                  src={profile}
                  alt=""
                />
                
                <h1 className="font-bold text-xl  text-neutral-300 mt-3">
                  {author}
                </h1>
                <p className="text-xs font-medium text-neutral-300 mt-2">
                📧  info@horizondevelopers.co.za 
                </p>
  
                <p className="text-xs font-medium text-neutral-300 mt-1">
                  🌍  www.horizondevelopers.co.za
                </p>
  
                <div className="flex w-full   ">
                  <div className="flex gap-x-1  text-xs my-4">
                    <p className="bg-[#ffffff] text-black rounded-lg px-2 h-5 flex items-center justify-center text-[11px] font-bold">
                      Flutter
                    </p>
                    <p className="bg-[#ffffff] text-black rounded-lg px-2 h-5 flex items-center justify-center text-[11px] font-bold">
                      GetX
                    </p>
                    <p className="bg-[#ffffff] text-black rounded-lg px-2 h-5 flex items-center justify-center text-[11px] font-bold">
                      Django
                    </p>
                    <p className=" bg-[#ffffff] text-black rounded-lg px-2 h-5 flex items-center justify-center text-[11px] font-bold shrink-0 ">
                      Stripe
                    </p>
                    <p className=" bg-[#ffffff] text-black rounded-lg px-2 h-5 flex items-center justify-center text-[11px] font-bold shrink-0 ">
                      PayPal
                    </p>
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
  
            <div className="w-full mt-5 text-neutral-300">
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
  

            </div>
          </div>
        </motion.div>
      </div>
    )
  }