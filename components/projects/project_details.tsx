"use client";

import Link from "next/link";
import React from "react";
import {
  PiArrowLeftThin,
  PiAppStoreLogo,
  PiGooglePlayLogo,
  PiGoogleChromeLogo,
} from "react-icons/pi";
import { motion } from "framer-motion";
import { Project } from "@/lib/interfaces/projects";
import ContentRenderer from "./project-content-render";
import FeaturesSection from "./reusable-feature";

interface ProjectInfoProps {
  data: Project;
}

export default function ProjectInfo({ data }: ProjectInfoProps) {

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
      <div className="top-5 ">
        <div className=" ">
          <div className="mt-1">
            <div className="bg-blue-600/30 backdrop-blur-md h-10 w-full rounded-xl flex items-center gap-x-7 ">
              <Link href="/">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center ml-3">
                  <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
                    <PiArrowLeftThin className="text-black text-lg" />
                  </div>
                </div>
              </Link>

              <Link href="/">
                <button className="text-xs bg-blue-600/30 p-1 w-18 h-6 rounded-md items-center justify-center hover:bg-white hover:text-black">
                  Home
                </button>
              </Link>

              <Link href="/blogs">
                <button className="text-xs bg-blue-600/30 p-1 w-18 h-6 rounded-md items-center justify-center hover:bg-white hover:text-black">
                  Blog
                </button>
              </Link>

              <Link href="/underconstruction">
                <button className="text-xs bg-blue-600/30 p-1 w-18 h-6 rounded-md items-center justify-center hover:bg-white hover:text-black">
                  Tutorials
                </button>
              </Link>

              <Link href="/underconstruction">
                <button className="text-xs bg-blue-600/30 p-1 w-18 h-6 rounded-md items-center justify-center hover:bg-white hover:text-black">
                  Templates
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="  mt-9 w-full p-5 border border-neutral-900  backdrop-blur-md rounded-2xl h-full bg-transparent ">
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
          className="text-3xl font-bold text-center mb-6"
        >
          {data.title}
        </motion.h1>

        <div className="flex flex-wrap gap-2 items-center justify-center">
          {data.technologies.map((tech, index) => (
            <p
              key={index}
              className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[13px]"
            >
              {tech}
            </p>
          ))}
        </div>

        <div className="flex items-center gap-6 justify-center my-6">
          <a
            href={data.appStoreLink}
            aria-label="App Store"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white mr-4"
          >
            <PiAppStoreLogo className="w-6 h-6 text-black hover:text-blue-600" />
          </a>
          <a
            href={data.playStoreLink}
            aria-label="Google Play"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white mr-4"
          >
            <PiGooglePlayLogo className="w-6 h-6 text-black hover:text-blue-600" />
          </a>
          <a
            href={data.website}
            aria-label="Chrome"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white"
          >
            <PiGoogleChromeLogo className="w-6 h-6 text-black hover:text-blue-600" />
          </a>
        </div>

        <div className="my-11 font-medium">
          <ContentRenderer contentItems={data.content} />

          <div>
            <FeaturesSection
              title="Frontend Features"
              features={data.frontendFeatures}
            />
            <FeaturesSection
              title="Backend Features"
              features={data.backendFeatures}
            />
            <FeaturesSection
              title="Upcoming Features"
              features={data.upcomingFeatures}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
