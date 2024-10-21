export const metadata = {
  title: "Horizon Developers Blog",
  description: "Explore the latest insights and trends in full-stack web development, software solutions, and technology. Join Horizon Developers as we share tips, tutorials, and best practices for building efficient web applications.",
  openGraph: {
    type: 'article',
    title: "Horizon Developers Blog",
    description: "Your go-to source for web development tips and software solutions.",
    url: "https://horizondevelopers.co.za/blog",
    siteName: "Horizon Developers",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/electro-523c1.appspot.com/o/blog-image.png?alt=media&token=a456925b-fa96-4996-9eef-fb554800eb17",
        width: 800,
        height: 600,
        alt: "Horizon Developers Blog",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@YourTwitterHandle',
    title: "Horizon Developers Blog",
    description: "Stay updated with the latest in web development and software solutions on the Horizon Developers Blog.",
    image: "https://firebasestorage.googleapis.com/v0/b/electro-523c1.appspot.com/o/blog-image.png?alt=media&token=a456925b-fa96-4996-9eef-fb554800eb17",
  },
  canonical: "https://horizondevelopers.co.za/blog",
  robots: "index, follow",
  keywords: "blog, flutter, golang, development, software solutions, web applications, horizon developers, technology, tutorials",
  author: "Horizon Developers",
};


import { notFound } from "next/navigation";
import { BlogList, Convert } from "@/lib/interfaces/blog-list";
import BlogListLeft from "@/components/blog-list/bloglist-left";
import BlogsList from "@/components/blog-list/blog-list";
import BlogListRight from "@/components/blog-list/bloglist-right";


async function getBlogs() {
  let res = await fetch(`https://horizondevelopers.co.za/api/blogs/all`);

  const blogs: BlogList[] = await res.json();

  
  if (!blogs || blogs.length === 0) {
    notFound(); // Handle the case where no blogs are found
  }

  return blogs;
}


export default async function Blogs() {
  let blogs = await getBlogs();
  return (
    <div className="max-w-[78rem] mx-auto ">
      <div className=" gap-4 flex md:mt-5    flex-col md:flex-row  ">
        
        <div className="hidden lg:block lg:w-1/3">
          <BlogListLeft author={""} email={""} website={""} repo={""} image={""} stack={[]} />
        </div>

        <BlogsList data={blogs}/>
        <BlogListRight appLogo={""} relatedApps={[]} adverts={[]} testAppLink={""} />
      </div>
    </div>
  );
}

