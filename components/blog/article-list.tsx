import { Related } from "@/lib/interfaces/blog";
import Link from "next/link";
import React from "react";

interface RelatedProps {
  articles: Related[];
}

export default function ArticleList({ articles }: RelatedProps) {
  return (
    <div className="text-neutral-400">
      {articles.map((article, index) => (
        <Link key={index} href={`/blogs/${article.id}`}>
          <div
            key={index}
            className="flex items-center gap-x-3 hover:bg-neutral-800 p-2 rounded-md"
          >
            <h3 className="text-xs font-bold hover:text-blue-500">
              {article.title} <br />
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
