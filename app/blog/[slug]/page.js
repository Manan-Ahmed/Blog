import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import MDXComponents from "@/components/MDXComponents";


export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}


function MDXImage(props) {
  return (
    <Image
      {...props}
      alt={props.alt || "Blog image"}
      className="rounded-lg my-6 w-full object-cover"
      width={props.width || 800}
      height={props.height || 400}
      priority
    />
  );
}


export async function generateMetadata({ params }) {
  const filePath = path.join("posts", `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.description || "A blog post from my site",
    openGraph: {
      title: data.title,
      description: data.description || "",
      images: [
        {
          url: data.cover || "/default.jpg",
          width: 800,
          height: 400,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description || "",
      images: [data.cover || "/default.jpg"],
    },
  };
}


export default async function BlogPost({ params }) {
 
  const filePath = path.join("posts", `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContents);

  const files = fs.readdirSync(path.join("posts"));
  const allPosts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(".mdx", ""),
      ...data,
    };
  });

  const relatedPosts = allPosts.filter(
    (post) => post.category === data.category && post.slug !== params.slug
  );

  return (
    <>
    <div className="max-w-3xl mx-auto my-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden">
<div>
      {/* Blog Cover */}
      {data.cover && (
        <div className="w-full">
          <Image
            src={data.cover}
            alt={data.title}
            width={800}
            height={400}
            className="w-full h-80 object-cover"
            priority
          />
        </div>
      )}

      {/*  Blog Content */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {data.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">{data.date}</p>

        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote source={content} components={{ ...MDXComponents, Image: MDXImage }} />
        </div>
      </div>
</div>
</div>

<div className="max-w-3xl mx-auto my-12">
  <h2 className="text-2xl font-semibold text-center">Related Post</h2>
      {/*  Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="p-6 border-t border-gray-200 dark:border-gray-700">
         
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map((post) => (
              <li
                key={post.slug}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition"
              >
                <Image
                            width={800}
                            height={400}
                            className="rounded-t-lg w-full h-48 object-cover"
                            src={post.cover}
                            alt={post.title}
                          />
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {post.title}
                </Link>
                {post.date && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
   
    </>
  );
}





