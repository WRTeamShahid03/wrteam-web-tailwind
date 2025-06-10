import Link from "next/link";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { Blog } from "@/types/blogs";
import BlogImage from "./BlogImage";

interface BlogCardProps {
  blog: Blog;
  formatDate: (dateString: string) => string;
  priority?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  formatDate,
  priority = false,
}) => {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      title="Read full article"
    >

      <div className="flexColCenter !items-start border border-[#51535892] rounded-[16px] overflow-hidden space-y-2">
        <BlogImage
          src={blog.image || "/placeholder-image.jpg"}
          alt={blog.title}
          height={300}
          width={500}
          className="w-full object-cover"
          categoryName={blog.category?.name || "Uncategorized"}
          priority={priority}
        />
        <div className="flexColCenter !items-start p-3 gap-3">
          <div className="flexCenter gap-2 textSecondary text-sm font-semibold">
            <span>
              <MdDateRange className="primaryColor" size={20} />
            </span>
            <span>{formatDate(blog.created_at)}</span>
          </div>
          <h2 className="font-bold text-lg md:text-2xl line-clamp-2">
            {blog.title}
          </h2>
          <p className="sectionPara !leading-6 line-clamp-3">
            {blog.short_description}
          </p>
          <button
            className="flex items-center gap-2 border border-[#51535892] py-1 px-2 rounded-[8px] transition-all duration-300 hover:primaryBg hover:text-white text-sm md:text-base"
          >
            Read More <BsArrowRightCircle />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
