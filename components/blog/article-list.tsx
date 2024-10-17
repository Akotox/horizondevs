import React from 'react';

const articles = [
  {
    title: "9 Essential Javascript Functions",
    description: "A brief overview of key functions in JavaScript.",
  },
  {
    title: "How to Easily Create React Animations: Framer Motion",
    description: "Learn how to create stunning animations in React.",
  },
  {
    title: "TailwindCSS Tips",
    description: "Tips and tricks to enhance your TailwindCSS experience.",
  },
  {
    title: "9 Essential Javascript Functions",
    description: "A brief overview of key functions in JavaScript.",
  },
  {
    title: "How to Easily Create React Animations: Framer Motion",
    description: "Learn how to create stunning animations in React.",
  },
  {
    title: "TailwindCSS Tips",
    description: "Tips and tricks to enhance your TailwindCSS experience.",
  },
  {
    title: "9 Essential Javascript Functions",
    description: "A brief overview of key functions in JavaScript.",
  },
  {
    title: "How to Easily Create React Animations: Framer Motion",
    description: "Learn how to create stunning animations in React.",
  },
  {
    title: "TailwindCSS Tips",
    description: "Tips and tricks to enhance your TailwindCSS experience.",
  },
];

const ArticleList: React.FC = () => {
  return (
    <div className="text-neutral-400">
      {articles.map((article, index) => (
        <div key={index} className="flex items-center gap-x-3 hover:bg-neutral-800 p-2 rounded-md">
          <h3 className="text-xs font-bold">
            {article.title} <br />
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
