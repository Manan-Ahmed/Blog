import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Featured from "@/components/Latest";
export default function BlogList() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      description: data.description,
      cover:data.cover
    };
  });

  return (
    <>
   
    {/* <div> */}
    <div className="text-center mt-4 p-4">
      <h2>All Blogs</h2>
    </div>
      
    
<div className="max-w-7xl mx-auto px-4 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
    {posts.map((post, index) => (
      <div
        key={index}
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition-transform hover:scale-105 duration-200"
      >
        <Link href={`/blog/${post.slug}`}>
          <Image
            width={800}
            height={400}
            className="rounded-t-lg w-full h-48 object-cover"
            src={post.cover}
            alt={post.title}
          />
        </Link>

        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h5>
          <p className="mb-3 text-gray-700 dark:text-gray-400">
            {post.description}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>



    </>
   
  );
}
