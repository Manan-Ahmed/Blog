import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export default function LatestPost() {
  // Read all markdown/MDX files inside posts folder
  const files = fs.readdirSync(path.join("posts"));

  // Extract metadata (frontmatter) from each file
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data } = matter(markdownWithMeta);

    return {
      slug,
      ...data,
    };
  });

  // 🔥 Sort posts by date (latest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // (Optional) Limit to latest 3 or 6 posts
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          📰 Latest Blog Posts
        </h2>

        {/* Latest posts grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
              <Image
                src={post.cover}
                alt={post.title}
                width={400}
                height={250}
                className="object-cover w-full h-56"
              />
             </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-3">{post.description}</p>
                <p className="text-sm text-gray-400 mb-2">
                  📅 {new Date(post.date).toLocaleDateString()}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
