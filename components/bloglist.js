import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";




export default function BlogList(){
  const files = fs.readdirSync(path.join("posts"));
 
     const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      description: frontmatter.description,
      cover: frontmatter.cover,
    };
  });

  // 3️⃣ Sort by latest date
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // 4️⃣ Render posts
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <div
              key={post.slug || i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              {post.cover && (
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-56"
                />
              )}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-3">{post.description}</p>
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
    
    
    