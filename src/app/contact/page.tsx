"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    try{
      await emailjs.send(
        "service_zxieppb",
        "template_0a90zgi",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "X7JpsaaBZ5cJ4KtQb"
      );

      alert("Message sent successfully!");

      setForm({name: "", email: "", message: "",});
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.")
    }
  };

  return (
    <main id="contact" className="min-h-screen bg-[#F5F1E9] text-[#3E2F25] px-6 py-20">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6">
          Contact
        </h1>

        <p className="text-[#7A6A5F] mb-10">
          Have an idea, opportunity, or just want to connect? Feel free to reach out.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E5D9CC] focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E5D9CC] focus:outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E5D9CC] focus:outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-[#3E2F25] text-white rounded-xl hover:bg-[#2f241d] transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  );
}