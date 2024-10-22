import BlogInfo from "@/components/blog/blog-details";
import BlogLeft from "@/components/blog/blog-left";
import BlogRight from "@/components/blog/blog-right";
import { blogs } from "@/lib/data/constant_data";
import { Blog } from "@/lib/interfaces/blog";

import { notFound } from 'next/navigation'
 
async function getBlog(id: string) {
  // let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' })
  try {
    let res = await fetch(`https://horizondevelopers.co.za/api/blogs/${id}`);
    if (!res.ok) {
      notFound(); // Handle 404 responses
    }
    let post: Blog = await res.json();
    if (!post) notFound(); // Check if post is falsy
    return post;
  } catch (error) {
    console.error("Error fetching blog:", error);
    notFound(); // Handle other errors gracefully
  }
}
 
export async function generateStaticParams() {
  return  blogs.map((post) => ({
    id: post.id,
  }));
}
 
export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogs.find((p) => p.id === params.id); // Find the post by id
  
  if (!post) {
    return { title: 'Post Not Found' }; // Fallback for not found post
  }

  const title = post.title; 
  const description = post.headlines;
  const imageUrl = post.image; 

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: `https://horizondevelopers.co.za/projects/${params.id}}`, // Construct the project URL
      images: [
        {
          url: imageUrl,
          alt: "image", // Alt text for the image
        },
      ],
    },
    twitter: {
      card: 'summary_large_image', // Use large image card for Twitter
      title: title,
      description: description,
      image: imageUrl,
    },
  };
}


export default async function BlogDetails({ params }: { params: { id: string } }) {
    let blog = await getBlog(params.id)

  return (
    <div className="max-w-[78rem] mx-auto ">
      <div className=" gap-4 flex md:mt-5 flex-col md:flex-row  ">
        <div className="hidden lg:block lg:w-1/3">
          <BlogLeft author={blog.author} repo={blog.repo} stack={blog.tags} website={blog.website} email={blog.email} image={blog.image}/>
        </div>
        <BlogInfo data={blog}/>
        <BlogRight related={blog.related} courses={blog.suggestedCourses}/>
      </div>
    </div>
  );
}
