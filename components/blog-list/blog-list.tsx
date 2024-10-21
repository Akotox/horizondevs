"use client";

import { PiArrowLeftThin } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";
import Cta from "@/components/cta";
import BlogTile from "@/components/blog/blog-tile";
import { notFound } from "next/navigation";
import { BlogList, Convert } from "@/lib/interfaces/blog-list";

interface BlogListProps {
    data: BlogList[]
}

export default async function BlogsList({data}: BlogListProps) {
//   const blogs: BlogList[] = await getBlogs(); 
  
  const blogs: BlogList[] = [
    {
      id: "67149523be816f00b5d0a5f0",
      title: "Building Responsive UI in Flutter",
      author: "Andre",
      tags: ["Flutter", "Responsive UI", "Layout", "MediaQuery"],
      image: "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
      headlines:
        "Master responsive design techniques in Flutter for a better user experience.",
      date: "2024-10-20T05:29:07.542Z",
    },
    {
      id: "6714a6120c261d2ae529bfb3",
      title: "State Management in Flutter: An Overview",
      author: "Andre",
      tags: ["Flutter", "State Management", "Provider", "Riverpod"],
      image: "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
      headlines:
        "Explore various state management solutions to enhance your Flutter applications.",
      date: "2024-10-20T06:41:22.019Z",
    },
    {
      id: "6714a7000c261d2ae529bfc8",
      title: "Creating a Multi-Module Django App",
      author: "Your Name",
      tags: ["Django", "Web Development", "Multi-Module", "Python"],
      image: "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
      headlines:
        "Learn how to create a multi-module Django application from scratch.",
      date: "2024-10-20T06:45:20.753Z",
    },
    {
        id: "6714a6120c261d2ae529bfb3",
        title: "State Management in Flutter: An Overview",
        author: "Andre",
        tags: ["Flutter", "State Management", "Provider", "Riverpod"],
        image: "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
        headlines:
          "Explore various state management solutions to enhance your Flutter applications.",
        date: "2024-10-20T06:41:22.019Z",
      },
      {
        id: "6714a7000c261d2ae529bfc8",
        title: "Creating a Multi-Module Django App",
        author: "Your Name",
        tags: ["Django", "Web Development", "Multi-Module", "Python"],
        image: "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
        headlines:
          "Learn how to create a multi-module Django application from scratch.",
        date: "2024-10-20T06:45:20.753Z",
      },
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
            <Cta title="Checkout out latest blogs and tech news" height={168} />
          </div>

          <div className="flex flex-col">
            {data.map((blog) => (
              <BlogTile
                key={blog.id}
                id={blog.id}
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
