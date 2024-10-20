import { formatDate } from "@/lib/utils/date-convertor";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogTileProps {
  id: string;
  title: string;
  author: string;
  date: string;
  headings: string;
  tags: string[];
  image: string; // Adjust the type based on your image import
}

export default function BlogTile({
  id,
  title,
  author,
  date,
  headings,
  tags,
  image,
}: BlogTileProps) {
  return (
    <Link href="blogs/[id]" as={`/blogs/${id}`}>
      <div className="flex flex-col md:flex-row backdrop-blur-md rounded-lg p-2 md:p-4">
        {/* Image hidden on small screens */}
        <div className="hidden md:block w-1/8">
        <img
                    className="w-24 max-h-fit rounded-lg shadow "
                    src={image}
                    alt={"alt"}
                  />
        </div>
        <div className="w-full md:w-2/3 pl-0 md:pl-4">
          <h2 className="text-base font-bold text-white">{title}</h2>
          <div className="flex gap-x-2 items-center my-4">
            <p className="bg-[#ffffff] w-fit text-black font-medium rounded-full px-2 h-5 flex items-center justify-center text-[10px] ">
              {author}
            </p>
            <div className="w-1 h-1 rounded-full bg-neutral-400" />
            <span className="text-xs">{formatDate(date)}</span>
          </div>
          <p className="mt-2 text-gray-300 font-medium">{headings}</p>
          <div className="hidden md:block w-1/3flex flex-wrap mt-2 ">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#098bd6] text-white text-xs rounded-full px-2 mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

       
      </div>
      <div className="relative border-gray-300  px-4 border-b-[0.5px]"></div>
    </Link>
  );
}
