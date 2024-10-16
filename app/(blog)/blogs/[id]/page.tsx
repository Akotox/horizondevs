import BlogInfo from "@/components/blog/blog-details";
import BlogLeft from "@/components/blog/blog-left";
import BlogRight from "@/components/blog/blog-right";

export default function BlogDetails({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-[78rem] mx-auto ">
      <div className=" gap-4 flex md:mt-5 flex-col md:flex-row  ">
        <div className="hidden lg:block lg:w-1/3">
          <BlogLeft author="" date="" bio="" stack="" />
        </div>

        <BlogInfo />
        <BlogRight />
      </div>
    </div>
  );
}
