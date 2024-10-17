"use client";
import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";
import { SiCss3, SiFramer } from "react-icons/si";

// import TestimonialTooltip from "@/app/TestimonialTooltip/page";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

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
            <h2 className="font-bold text-neutral-200">Download Test Apk</h2>
            <p className="text-xs my-3 text-neutral-400 font-normal">
              Easily install the Test Apk and start exploring <br />
              its features today! <br />
              Get started with just one click below.
            </p>
            <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-medium text-neutral-50 hover:bg-[#234ca5] hover:text-white">
              Download
            </button>

            <div className="border border-neutral-700 my-5" />

            <div className="text-neutral-400">
              <h1 className="font-bold text-neutral-200">Related Apps</h1>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md ">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <PiGithubLogoLight className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  9 Essential Javascript <br /> Functions
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiFramer className="text-lg" />
                </div>
                <h3 className="text-xs ">
                  How to easily creat React <br /> animations: Framer Motion
                </h3>
              </div>
              <div className="flex items-center gap-x-3 mt-6 hover:bg-neutral-800  p-2 rounded-md">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center">
                  <SiCss3 className="text-lg" />
                </div>
                <h3 className="text-xs ">TailwindCSS tips</h3>
              </div>

              <div className="border border-neutral-700 my-5" />
            </div>
          </div>
        </div>

        <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 text-neutral-50 ">
          <Image
            width={1000}
            height={1000}
            className="h-32 w-56 object-cover rounded-lg"
            src="/game.jpg"
            alt=""
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
