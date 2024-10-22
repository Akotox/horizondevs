import BlogInfo from "@/components/blog/blog-details";
import BlogLeft from "@/components/blog/blog-left";
import BlogRight from "@/components/blog/blog-right";
import { Blog } from "@/lib/interfaces/blog";

import { notFound } from 'next/navigation'
 
async function getBlog(id: string) {
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
  try {
    let res = await fetch('https://horizondevelopers.co.za/api/blogs/all');
    if (!res.ok) throw new Error('Failed to fetch posts');
    let posts = await res.json();

    return posts.map((post: Blog) => ({
      id: post.id,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return []; // Return an empty array to avoid crashes
  }
}

 
export async function generateMetadata({ params }: { params: { id: string } }) {
  let post = await getBlog(params.id);

  return {
    title: post.title || 'Default Title',
    description: post.headlines || 'Default description',
    keywords: post.tags ? post.tags.join(', ') : '',
    author: post.author || 'Unknown',
    image: post.image || 'default-image.jpg',
    publishDate: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    openGraph: {
      title: post.title || 'Default Title',
      description: post.headlines || 'Default description',
      url: `https://horizondevelopers.co.za/blogs/${post.id}`,
      image: post.image || 'default-image.jpg',
    },
    twitter: {
      cardType: 'summary_large_image',
      title: post.title || 'Default Title',
      description: post.headlines || 'Default description',
      image: post.image || 'default-image.jpg',
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
