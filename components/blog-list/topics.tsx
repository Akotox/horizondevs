import React from "react";
import { CategoryList } from "../../lib/data/constant_data";
import Link from "next/link";

interface CategoryProp {
  data: CategoryList[];
  heading: string;
}

const CategoryCard: React.FC<CategoryProp> = ({ data, heading }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold underline">{heading}</h3>

      {data.map((d) => (
        <Link href={""}>
          <p key={d.id} className="text-xs font-medium text-neutral-300 mt-2 hover:text-blue-400">
            {d.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCard;
