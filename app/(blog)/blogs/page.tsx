'use client'

import Image, { StaticImageData } from "next/image";
import { PiArrowLeftThin } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";
import Cta from "@/components/cta";
import profile from '@/public/images/testimonial-03.jpg'
import BlogTile from "@/components/blog/blog-tile";

interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
  tags: string[];
  excerpt: string;
  // image: StaticImageData; // Static image path
}

export default function BlogsList() {
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Understanding React Hooks",
      author: "John Doe",
      date: "October 17, 2024",
      tags: ["React", "JavaScript", "Web Development"],
      // image: profile,
      excerpt:
        "Learn how to manage state and side effects in your React applications using hooks.",
    },
    {
      id: 2,
      title: "Getting Started with Node.js",
      author: "Jane Smith",
      date: "October 10, 2024",
      tags: ["Node.js", "Backend", "JavaScript"],
      // image: profile,
      excerpt:
        "An introduction to Node.js, its architecture, and building your first server.",
    },

    {
      id: 3,
      title: "Getting Started with Node.js",
      author: "Jane Smith",
      date: "October 10, 2024",
      tags: ["Node.js", "Backend", "JavaScript"],
      // image: profile,
      excerpt:
        "An introduction to Node.js, its architecture, and building your first server.",
    },

    {
      id: 4,
      title: "Getting Started with Node.js",
      author: "Jane Smith",
      date: "October 10, 2024",
      tags: ["Node.js", "Backend", "JavaScript"],
      // image: profile,
      excerpt:
        "An introduction to Node.js, its architecture, and building your first server.",
    },

    {
      id: 6,
      title: "Getting Started with Node.js",
      author: "Jane Smith",
      date: "October 10, 2024",
      tags: ["Node.js", "Backend", "JavaScript"],
      // image: profile,
      excerpt:
        "An introduction to Node.js, its architecture, and building your first server.",
    },

    {
      id: 8,
      title: "Getting Started with Node.js",
      author: "Jane Smith",
      date: "October 10, 2024",
      tags: ["Node.js", "Backend", "JavaScript"],
      // image: profile,
      excerpt:
        "An introduction to Node.js, its architecture, and building your first server.",
    },

    {
      id: 9,
      title: "Getting Started with Node.js",
      author: "Jane Smith",
      date: "October 10, 2024",
      tags: ["Node.js", "Backend", "JavaScript"],
      // image: profile,
      excerpt:
        "An introduction to Node.js, its architecture, and building your first server.",
    },
    // Add more blog objects as needed
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {blogs.map((blog) => (
                <BlogTile
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    author={blog.author}
                    date={blog.date}
                    excerpt={blog.excerpt}
                    tags={blog.tags}
                    profileImage={profile} // Use the static profile image or pass in dynamically
                />
                ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
