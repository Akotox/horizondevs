import BlogInfo from "@/components/blog/blog-details";
import BlogLeft from "@/components/blog/blog-left";
import BlogRight from "@/components/blog/blog-right";
import { Convert } from "@/lib/interfaces/blog";
import { formatDate } from "@/lib/utils/date-convertor";


export default function BlogDetails({ params }: { params: { id: string } }) {




  const data: string = JSON.stringify({
    "_id": "6713b8267c241aa444180edd",
    "title": "Flutter REST API Caching with NoSQL Cache Manager",
    "content": [
        {
            "contentType": "heading",
            "content": "Introduction",
            "_id": "6713b8267c241aa444180ede"
        },
        {
            "contentType": "pg",
            "content": "In this article, we will explore how to effectively cache REST API responses in Flutter using the NoSQL Cache Manager.",
            "_id": "6713b8267c241aa444180edf"
        },

        
        {
            "contentType": "code",
            "content": "import 'package:flutter_cache_manager/flutter_cache_manager.dart';",
            "lang": "dart",
            "heading": "Install the package",
            "imageUrl": "http://flutter",
            "_id": "6713b8267c241aa444180ee0"
        },
        {
            "contentType": "heading",
            "content": "What is NoSQL Cache Manager?",
            "_id": "6713b8267c241aa444180ee1"
        },
        {
            "contentType": "pg",
            "content": "The NoSQL Cache Manager is a library that allows developers to store and retrieve cached data easily.",
            "_id": "6713b8267c241aa444180ee2"
        },
        {
            "contentType": "code",
            "content": "class MyCustomCacheManager extends BaseCacheManager {\n  static const key = 'customCache';\n\n  MyCustomCacheManager() : super(key, maxNrOfCacheObjects: 100);\n}",
            "_id": "6713b8267c241aa444180ee3"
        },
        {
            "contentType": "heading",
            "content": "How to Use It",
            "_id": "6713b8267c241aa444180ee4"
        },
        {
            "contentType": "pg",
            "content": "To use the NoSQL Cache Manager, you can create an instance of your custom cache manager.",
            "_id": "6713b8267c241aa444180ee5"
        },
        {
            "contentType": "code",
            "content": "final manager = MyCustomCacheManager();",
            "_id": "6713b8267c241aa444180ee6"
        },
        {
          "contentType": "image",
          "imageUrl": "https://cruip-tutorials.vercel.app/masonry/masonry-01.jpg",
          "content": "",
          "_id": "6713b8267c241aa444180edf",
          "heading": "Google settings"
        },
        {
            "contentType": "heading",
            "content": "Conclusion",
            "_id": "6713b8267c241aa444180ee7"
        },
        {
            "contentType": "pg",
            "content": "Caching API responses can significantly improve the performance of your Flutter application by reducing network calls.",
            "_id": "6713b8267c241aa444180ee8"
        }
    ],
    "author": "Your Name",
    "date": "2023-10-19T00:00:00.000Z",
    "tags": [
        "Flutter",
        "API",
        "Caching",
        "NoSQL"
    ],
    "image": "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg",
    "related": [
        {
            "title": "Caching Strategies in Flutter",
            "id": "related1",
            "_id": "6713b8267c241aa444180ee9"
        }
    ],
    "headlines": "Learn how to implement caching in Flutter for better performance.",
    "repo": "https://github.com/yourusername/flutter_nosql_cache_manager",
    "suggestedCourses": [
        {
            "title": "Flutter Development Bootcamp",
            "id": "course1",
            "url": "https://example.com/course/flutter-development",
            "_id": "6713b8267c241aa444180eea"
        }
    ],
    "email": "youremail@example.com",
    "website": "https://yourwebsite.com",
    "createdAt": "2024-10-19T13:46:14.193Z",
    "updatedAt": "2024-10-19T13:46:14.193Z",
    "__v": 0
})

const blog = Convert.toBlog(data)

  return (
    <div className="max-w-[78rem] mx-auto ">
      <div className=" gap-4 flex md:mt-5 flex-col md:flex-row  ">
        <div className="hidden lg:block lg:w-1/3">
          <BlogLeft author={blog.author} date={formatDate(blog.date.toISOString())} bio="" stack={blog.tags} website={blog.website} email={blog.email} image={blog.image}/>
        </div>
        <BlogInfo data={blog}/>
        <BlogRight />
      </div>
    </div>
  );
}
