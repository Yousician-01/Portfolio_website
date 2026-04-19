import Projects from "./components/Projects";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import Link from "next/link";

export default function Home() {
  return (
    <>

    <main className="min-h-screen bg-transparent text-[#3E2F25] flex flex-col items-center justify-center text-center px-6">
    
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Atharva Sandeep Raut
      </h1>

      <p className="text-lg md:text-xl text-[#7A6A5F] max-w-2xl mb-6">
        Building AI-powered systems at the intersection of security, robotics, and data science.
      </p>

      <div className="flex gap-4">
        {/* Primary Button */}
        <Link href="/projects">
        <button className="px-6 py-3 bg-[#3E2F25] text-white rounded-xl font-semibold hover:scale-105 hover:bg-[#2f241d] transition duration-300">
          View Projects
        </button>
        </Link>

        {/* Secondary Button */}
        <Link href="#contact">
        <button className="px-6 py-3 border border-[#E5D9CC] rounded-xl hover:bg-[#FAF7F2] transition duration-300">
          Contact Me
        </button>
        </Link>
      </div>

      
    </main>
    
    
    <Projects />

    <AboutPage />

    <ContactPage />

    </>
  );
}