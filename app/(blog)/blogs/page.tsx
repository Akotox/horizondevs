'use client'

import Image, { StaticImageData } from "next/image";
import { PiArrowLeftThin } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";
import Cta from "@/components/cta";
import profile from '@/public/images/testimonial-03.jpg'
import BlogTile from "@/components/blog/blog-tile";

interface Blog {
  _id:       string;
  title:     string;
  author:    string;
  date:      string;
  tags:      string[];
  image:     string;
  headlines: string;
}

export default function BlogsList() {
  const blogs: Blog[] = [
    {
        "_id": "6713b8267c241aa444180edd",
        "title": "Flutter REST API Caching with NoSQL Cache Manager",
        "author": "Your Name",
        "date": "2023-10-19T00:00:00.000Z",
        "tags": [
            "Flutter",
            "API",
            "Caching",
            "NoSQL"
        ],
        "image": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
        "headlines": "Learn how to implement caching in Flutter for better performance."
    },
    {
        "_id": "6713b9747c241aa444180eed",
        "title": "Building Responsive UIs in Flutter",
        "author": "Your Name",
        "tags": [
            "Flutter",
            "Responsive Design",
            "UI"
        ],
        "image": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
        "headlines": "Learn how to create responsive UIs that adapt to screen sizes.",
        "date": "2024-10-19T13:51:48.063Z"
    },
    {
        "_id": "6713ba197c241aa444180efc",
        "title": "State Management in Flutter with Provider",
        "author": "Andre",
        "tags": [
            "Flutter",
            "State Management",
            "Provider"
        ],
        "image": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
        "headlines": "Master state management in Flutter with the Provider package.",
        "date": "2024-10-19T13:54:33.217Z"
    }
];

  return (
    <section className="p-4">
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="sticky top-6 -mt-6 z-50">
            <div className="bg-neutral-700/25 backdrop-blur-md h-10 w-full rounded-xl flex items-center gap-x-7">
              <Link href="/">
                <div className="bg-neutral-700/50 h-8 w-8 rounded-full flex items-center justify-center ml-3">
                  <div className="bg-neutral-300 rounded-full h-5 w-5 flex items-center justify-center">
                    <PiArrowLeftThin className="text-black text-lg" />
                  </div>
                </div>
              </Link>

              <Link href="/">
                <button className="text-xs bg-neutral-700/25 p-1 w-16 h-6 rounded-md">
                  Home
                </button>
              </Link>
            </div>
          </div>

          <div className="px-4">
          <Cta  title="Checkout out latest blogs and tech news" height={268}/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {blogs.map((blog) => (
                <BlogTile
                    key={blog._id}
                    id={blog._id}
                    title={blog.title}
                    author={blog.author}
                    date={blog.date}
                    headings={blog.headlines}
                    tags={blog.tags}
                    image={blog.image} // Use the static profile image or pass in dynamically
                />
                ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
