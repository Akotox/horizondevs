import BlogInfo from "@/components/blog/blog-details";
import BlogLeft from "@/components/blog/blog-left";
import BlogRight from "@/components/blog/blog-right";
import { Convert } from "@/lib/interfaces/blog";
import { formatDate } from "@/lib/utils/date-convertor";

import { Blog } from "@/lib/interfaces/blog";

import { notFound } from 'next/navigation'
 

 
async function getBlog(id: string) {
  let res = await fetch(`https://horizondevelopers.co.za/api/blogs/${id}`)
  let post: Blog = await res.json()
  if (!post) notFound()
  return post
}
 
export async function generateStaticParams() {
  let posts = await fetch('https://horizondevelopers.co.za/api/blogs/all').then((res) =>
    res.json()
  )
 
  return posts.map((post: Blog) => ({
    id: post.id,
  }))
}
 
export async function generateMetadata({ params }: { params: { id: string } }) {
  let post = await getBlog(params.id)
 
  return {
    title: post.title,
    description: post.headlines, // Use the headlines as a description
    keywords: post.tags.join(', '), // Join tags for keywords
    author: post.author,
    image: post.image,
    publishDate: new Date(post.date).toISOString(),
    openGraph: {
      title: post.title,
      description: post.headlines,
      url: `https://horizondevelopers.co.za/blog/${post.id}`, // Assuming this is your blog URL structure
      image: post.image,
    },
    twitter: {
      cardType: 'summary_large_image',
      title: post.title,
      description: post.headlines,
      image: post.image,
    }
  }
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
