"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className=" px-6 py-16 bg-[#f5f8fd] text-[#2c2f3f]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-pink-500 mb-2 uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-[#173b6c] font-semibold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Feel free to reach out via email or use the form below to send me a
          message!
        </motion.p>

        {/* Centered Form */}
        <div className="flex justify-center">
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-xl"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => { 
              e.preventDefault();
              alert("Thank you for your message! 📨");
            }
          }
          >

          
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-300 p-3 rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#149ddd] text-white px-6 py-2 rounded hover:bg-[#0f78c0] transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Footer Message */}
        <p className="text-center mt-10 text-sm text-gray-500">
          Made by Sara Asif ❤
        </p>
      </div>
    </section>
  );
}
