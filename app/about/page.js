// app/about/page.jsx
import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 my-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Welcome to our blog! We share insights on Web Development, SEO, and AI tools —
          helping beginners and professionals grow their digital skills.
        </p>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side - Image */}
          <div className="flex-1">
            <Image
              src="/images/about-us.jpg"
              alt="About Us"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Right Side - Text */}
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We’re a team of passionate developers and marketers who love building
              high-performance websites, exploring the latest SEO strategies, and 
              experimenting with AI tools to make online work smarter.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our mission is to educate and empower creators, freelancers, and
              businesses to leverage the power of the web — through easy tutorials,
              useful tools, and honest advice.
            </p>

            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-bold mb-2 text-gray-700">💡 What We Do</h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          From web app tutorials to SEO experiments — we document our learning
          journey to help others succeed faster. Follow us for weekly guides,
          tips, and practical projects.
        </p>
      </div>
    </section>
  );
}
