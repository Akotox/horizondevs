"use client";

import Link from "next/link";
import React from "react";
import { PiArrowLeftThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { Blog } from "@/lib/interfaces/blog";
import { renderContent } from "./render-blog";

interface BlogInfoProps {
  data: Blog;
}

export default function BlogInfo({ data }: BlogInfoProps) {
  return (
    <motion.div
      className="text-neutral-50 "
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
    >
      <div className="">
        <div className=" ">
          <div className="mt-2   ">
            <div className="bg-blue-600/30 backdrop-blur-md h-10  w-full rounded-xl flex items-center gap-x-7 ">
              <Link href={"/blogs"}>
                <div className="bg-blue-600/30 h-8 w-8 rounded-full flex items-center justify-center ml-3">
                  <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
                    <PiArrowLeftThin className="text-black text-lg" />
                  </div>
                </div>
              </Link>

              <Link href={"/"}>
                <button className="text-xs bg-blue-600/30 p-1 w-18 h-6 rounded-md items-center justify-center hover:bg-white hover:text-black">
                  Home
                </button>
              </Link>

              <Link href={"/projects"}>
                <button className="text-xs bg-blue-600/30 p-1 w-18 h-6 rounded-md items-center justify-center hover:bg-white hover:text-black">
                  Projects
                </button>
              </Link>

              <Link href={"/underconstruction"}>
                <button className="text-xs bg-blue-600/30 p-1 w-18 h-6 rounded-md items-center justify-center hover:bg-white hover:text-black">
                  Tutorials
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-9 w-full p-5 border border-neutral-900  backdrop-blur-md rounded-2xl h-full bg-transparent ">
        <motion.h1
          initial={{ x: 100, opacity: 0, filter: "blur(4px)" }}
          animate={{
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              duration: 0.8,
              delay: 0.9,
              type: "spring",
              stiffness: 200,
            },
          }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-center "
        >
          {data.title}
        </motion.h1>
        <div className="flex items-center gap-x-2 justify-center my-4">
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag, index) => (
              <p
                key={index}
                className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[13px]"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div className="my-11">
          <div>{renderContent(data.content)}</div>
        </div>
      </div>
    </motion.div>
  );
}
