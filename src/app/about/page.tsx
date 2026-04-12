export default function AboutPage() {
  return (
    <main id="about" className="min-h-screen bg-[#F5F1E9] text-[#3E2F25] px-6 py-20">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-8">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-lg text-[#7A6A5F] mb-6 leading-relaxed">
          I’m a builder focused on developing intelligent systems at the intersection of AI, security, and embedded systems.
          My work combines machine learning with real-world applications — from anomaly detection systems to robotics and smart surveillance.
        </p>

        {/* What you do */}
        <p className="text-lg text-[#7A6A5F] mb-6 leading-relaxed">
          I enjoy solving complex problems by designing end-to-end systems — from data processing and model development 
          to backend integration and deployment. My approach is deeply technical, with an emphasis on performance, reliability, and scalability.
        </p>

        {/* Focus */}
        <p className="text-lg text-[#7A6A5F] mb-10 leading-relaxed">
          Currently, I’m focused on advancing in AI/ML and building systems that can operate in real-world environments — 
          particularly in cybersecurity, anomaly detection, and intelligent automation.
        </p>

        {/* Skills */}
        <h2 className="text-2xl font-semibold mb-4">
          Skills & Tools
        </h2>

        <div className="flex flex-wrap gap-3 mb-12">
          {[
            "Python",
            "Machine Learning",
            "FastAPI",
            "OpenCV",
            "ESP32",
            "Arduino",
            "Data Analysis",
            "System Design",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm bg-[#FAF7F2] border border-[#E5D9CC]"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="/#contact"
            className="px-6 py-3 bg-[#3E2F25] text-white rounded-xl hover:bg-[#2f241d] transition"
          >
            Get in Touch
          </a>
        </div>

      </div>

    </main>
  );
}