import Link from "next/link";



export default function Hero(){
    return(
        <>
   
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white  py-30 px-6 text-center">
      <div className="max-w-3xl mx-auto ">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 p-3">
          Welcome to <span className="text-yellow-300">TechVerse Blog</span>
        </h1>

        {/* Short Tagline */}
        <p className="text-lg md:text-xl text-blue-100 mb-8">
          Discover the latest insights in Web Development, SEO, and AI Tools — all in one place.
        </p>

        {/* Call To Action */}
        <Link
          href="/blog"
          className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition duration-300"
        >
          Read Posts
        </Link>
      </div>
    </section>
  );



        </>
    )
}