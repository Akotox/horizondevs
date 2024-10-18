"use client";

import Link from "next/link";
import React from "react";
import {
  PiArrowLeftThin,
  PiAppStoreLogo,
  PiGooglePlayLogo,
  PiGoogleChromeLogo,
} from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import profile from "../public/images/testimonial-03.jpg";
import Image from "next/image";
import FeatureCard from "../feature-card";

export default function ProjectInfo() {
  const features = [
    {
      title: "User Authentication",
      description:
        "Secure login and registration options using email, social media, or phone number.",
    },
    {
      title: "Product Catalog",
      description:
        "A visually appealing grid or list of products with images, descriptions, and prices.",
    },
    {
      title: "Search Functionality",
      description:
        "Allows users to search for products by name, category, or tags.",
    },
    {
      title: "Filters and Sorting",
      description:
        "Options to filter products by categories, prices, and ratings, and sort by popularity or price.",
    },
    {
      title: "Shopping Cart",
      description:
        "A feature that enables users to add products to their cart and view their selections before checkout.",
    },
    {
      title: "Wishlist",
      description: "Users can save products they like for future purchase.",
    },
    {
      title: "Product Details",
      description:
        "Detailed product pages with images, descriptions, specifications, and user reviews.",
    },
    {
      title: "Checkout Process",
      description:
        "A smooth and secure checkout experience, including payment methods and shipping options.",
    },
    {
      title: "Order Tracking",
      description: "Users can track the status of their orders after purchase.",
    },
    {
      title: "Push Notifications",
      description:
        "Notifications for order updates, promotions, and new arrivals.",
    },
    {
      title: "User Profiles",
      description:
        "Users can manage their profiles, including personal information and order history.",
    },
    {
      title: "Reviews and Ratings",
      description:
        "Customers can leave reviews and rate products, enhancing community trust.",
    },
  ];

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
          className="text-3xl font-bold text-center "
        >
          How to write type-safe CSS Modules
        </motion.h1>
        <div className="flex items-center gap-x-2 justify-center my-4">
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px] ">
            TypeScript
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">Sunday, July 22, 2023</span>
        </div>

        <div className="flex items-center gap-6 justify-center my-6">
          <a
            href="#"
            aria-label="App Store"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white mr-4"
          >
            <PiAppStoreLogo className="w-6 h-6 text-black hover:text-blue-600" />
          </a>
          <a
            href="#"
            aria-label="Google Play"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white mr-4"
          >
            <PiGooglePlayLogo className="w-6 h-6 text-black hover:text-blue-600" />
          </a>
          <a
            href="#"
            aria-label="Chrome"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white"
          >
            <PiGoogleChromeLogo className="w-6 h-6 text-black hover:text-blue-600" />
          </a>
        </div>

        <div className="my-11 font-medium">

        <h2 className="text-2xl font-extrabold my-5">App Description</h2>

        <p className="my-7">
          One of the benefits of using TypeScript is that it significantly
          reduces the occurrence of specific bugs, like typos; it even makes
          it easier to access prototype methods and perform refactoring. Bugs
          caught at compile time make for more uptime, happier customers, and
          less on-call stress for developers.
        </p>

          <img
            className="w-full rounded-xl shadow "
            src={
              "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg"
            }
            alt={"alt"}
          />

          <h2 className="text-2xl font-extrabold my-5">App Architecture</h2>

          <p className="my-7">
            One of the benefits of using TypeScript is that it significantly
            reduces the occurrence of specific bugs, like typos; it even makes
            it easier to access prototype methods and perform refactoring. Bugs
            caught at compile time make for more uptime, happier customers, and
            less on-call stress for developers.
          </p>

          <h2 className="text-2xl font-extrabold my-5">Frontend Features</h2>

          <div>
          {features.map((feature, index) => (
              <FeatureCard index={index+1} title={feature.title} description={feature.description} />
            ))}
          </div>

          <p className="my-7">
            In this article, we’ll discuss what CSS Modules are, explore their
            developer experience shortcomings, and learn how to address them by
            using automation with TypeScript. Let’s get started!
          </p>

          <div className="my-9">
            <img
              className="w-full rounded-xl shadow "
              src={
                "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg"
              }
              // width={1000}
              // height={1000}
              alt={"alt"}
            />
          </div>

          <h2 className="text-2xl font-extrabold my-5">Backend Features</h2>

          <div>
          {features.map((feature, index) => (
              <FeatureCard index={index+1} title={feature.title} description={feature.description} />
            ))}
          </div>


          <h2 className="text-2xl font-extrabold my-5">Upcoming Features</h2>

          <div>
            {features.map((feature, index) => (
              <FeatureCard index={index+1} title={feature.title} description={feature.description} />
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
