'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-16 bg-[#f5f9fd] text-[#2c2f3f]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-pink-500 mb-2 uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        <motion.p
          className="text-xl text-gray-700 font-semibold mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Who I Am
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column (Image) */}
          <motion.img
            src="/profile.jpg"
            alt="Sara Asif"
            className="rounded-lg shadow-md w-90 h-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          {/* Right Column (Details) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#173b6c]">
              Front-End Developer & Creative Designer
            </h3>
            <p className="text-gray-600 mb-6 leading-7">
       

               I&apos;m Sara Asif, a passionate Front-End Developer with strong command over modern web technologies like HTML, CSS, JavaScript, TypeScript, Tailwind CSS, and Next.js. I blend creativity with code to build premium, responsive, and pixel-perfect websites.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <p><span className="font-bold">🎓 Degree:</span> Matriculation (Computer Science)</p>
              <p><span className="font-bold">📧 Email:</span> saraasif0101@gmail.com</p>
              <p><span className="font-bold">🚀 Freelance:</span> Available</p>
              <p><span className="font-bold">📊 Experience:</span> 1 Year+</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
