"use client";

import Image from "next/image";

interface VideoDisplayProps {
  thumb: string; // Thumbnail for the video
  thumbAlt: string; // Alt text for the thumbnail
  video: string; // Video URL
}

export default function VideoDisplay({
    thumb,
    thumbAlt,
    video,
  }: VideoDisplayProps) {
    return (
      <div className="relative mb-5">
        {/* Video thumbnail wrapped in a link */}
        <a
          href={video}
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security measure
          className="group relative flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring focus-visible:ring-indigo-200"
          aria-label="Watch the video"
        >
          <figure className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
            <img
              className="opacity-50 grayscale"
              src={thumb}
              width={1920}  // Set width to 1920
              height={1080} // Set height to 1080
              alt={thumbAlt}
            />
          </figure>
          {/* Play icon */}
          <span className="pointer-events-none absolute p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-gray-950 before:duration-300 group-hover:before:scale-110">
            <span className="relative flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
              >
                <path
                  fill="url(#pla)"
                  fillRule="evenodd"
                  d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z"
                  clipRule="evenodd"
                />
                <defs>
                  <linearGradient
                    id="pla"
                    x1={10}
                    x2={10}
                    y1={0}
                    y2={20}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6366F1" />
                    <stop offset={1} stopColor="#6366F1" stopOpacity=".72" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-sm font-medium leading-tight text-gray-300">
                Watch Demo
              </span>
            </span>
          </span>
        </a>
      </div>
    );
  }
  