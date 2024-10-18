import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogTileProps {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  tags: string[];
  profileImage: StaticImageData; // Adjust the type based on your image import
}

export default function BlogTile({
  id,
  title,
  author,
  date,
  excerpt,
  tags,
  profileImage,
}: BlogTileProps) {
  return (
    <Link href="blogs/[id]" as={`/blogs/${id}`}>
      <div className="flex flex-col md:flex-row bg-neutral-600/25 backdrop-blur-md rounded-lg p-2 md:p-4">
        {/* Image hidden on small screens */}
        <div className="hidden md:block w-1/4">
        <img
                    className="w-24 h-24 rounded-lg shadow "
                    src={
                      "https://images.ui8.net/uploads/full-preview-1_1725799823019.jpg"
                    }
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
            <span className="text-xs">{date}</span>
          </div>
          {/* <p className="mt-2 text-gray-300">{excerpt}</p> */}
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
    </Link>
  );
}
