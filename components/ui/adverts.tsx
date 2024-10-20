import Link from "next/link";

interface AdvertsProps {
    imageUrl?: string;
    title: string;
    buttonText: string;
    url?: string;
  }

  const placeholder = process.env.PLACEHOLDER_URL;
  
  export default function Adverts({ imageUrl, title, buttonText, url }: AdvertsProps) {
    return (
      <Link href={""}>
        <div className="bg-[#1C1C1C] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 text-neutral-50">
        <img
          className="h-24 w-56 object-cover rounded-lg"
          src={imageUrl! || placeholder}
          alt="advertisement"
        />
        <p className="my-3 font-medium text-sm">{title}</p>
        <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-medium hover:bg-[#234ca5]">
          {buttonText}
        </button>
      </div>
      </Link>
    );
  }
  