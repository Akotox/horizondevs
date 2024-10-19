"use client";

import Link from "next/link";
import React from "react";
import { PiArrowLeftThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import CodeSnippet from "@/components/code-snippets";
import { Blog } from "@/lib/interfaces/blog";
import { formatDate } from "@/lib/utils/date-convertor";
import { renderContent } from "./render-blog";

interface BlogInfoProps {
  data: Blog;
}

export default function BlogInfo({ data }: BlogInfoProps) {
  const images = [
    "https://cruip-tutorials.vercel.app/masonry/masonry-01.jpg",
    "https://cruip-tutorials.vercel.app/masonry/masonry-02.jpg",
    "https://cruip-tutorials.vercel.app/masonry/masonry-03.jpg",
    "https://cruip-tutorials.vercel.app/masonry/masonry-04.jpg",
  ];
  const exampleCode: string = `import 'package:flutter/material.dart';
import { renderContent } from './render-blog';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Simple Counter')),
        body: Counter(),
      ),
    );
  }
}

class Counter extends StatefulWidget {
  @override
  _CounterState createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text('Count: $_count', style: TextStyle(fontSize: 24)),
          SizedBox(height: 20),
          ElevatedButton(
            onPressed: () => setState(() => _count++),
            child: Text('Increment'),
          ),
        ],
      ),
    );
  }
};`;

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
          <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[10px] ">
            {data.tags[0]}
          </p>
          <div className="w-1 h-1 rounded-full bg-neutral-400" />
          <span className="text-xs">{formatDate(data.date.toISOString())}</span>
        </div>

        <div className="my-11">

          <div>
            {renderContent(data.content)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
