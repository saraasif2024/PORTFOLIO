'use client';

import React from 'react';
import { motion } from 'framer-motion';

const resumeItems = [
  {
    type: 'education',
    title: 'Intermediate (Ongoing)',
    place: 'Sir Syed Government Girls College',
    time: '2023 – Present',
    description: 'Currently pursuing Intermediate with a focus on Computer Science.',
  },
  {
    type: 'education',
    title: 'Artificial Intelligence and Cloud Computing (Ongoing)',
    place: 'GIAIC – Governed Initiative For AI & Cloud Computing',
    time: '2024 – Present',
    description: 'Learning AI agents and cloud fundamentals.',
  },
  {
    type: 'education',
    title: 'Matriculation',
    place: "Sir Syed Children's Academy",
    time: '2022 – 2024',
    description: 'Completed Matriculation with distinction in Science subjects.',
  },
  {
    type: 'experience',
    title: 'Frontend Developer Intern',
    place: 'Intern Intelligence',
    time: 'July 2025 – Aug 2025',
    description:
      'Built responsive websites with HTML, CSS, JavaScript, and Tailwind. Contributed to dynamic components using Next.js. Collaborated on UI improvements and bug fixes.',
  },
];

export default function ResumePage() {
  return (
    <section
      id="resume"
      className=" px-6 py-16 bg-[#f5f8fd] text-[#2c2f3f]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-pink-500 mb-2 uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-[#173b6c] font-semibold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My Resume
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Education Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#173b6c] mb-8 border-b border-gray-300 pb-2">
              Education
            </h3>
            {resumeItems
              .filter((item) => item.type === 'education')
              .map((item, index) => (
                <motion.div
                  key={index}
                  className="mb-10 pl-4 border-l-4 border-pink-500"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-[#173b6c]">{item.title}</h4>
                  <p className="italic text-sm text-pink-500">{item.place}</p>
                  <p className="text-sm text-gray-400 mb-1">{item.time}</p>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </motion.div>
              ))}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#173b6c] mb-8 border-b border-gray-300 pb-2">
              Experience
            </h3>
            {resumeItems
              .filter((item) => item.type === 'experience')
              .map((item, index) => (
                <motion.div
                  key={index}
                  className="mb-10 pl-4 border-l-4 border-pink-500"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-[#173b6c]">{item.title}</h4>
                  <p className="italic text-sm text-pink-500">{item.place}</p>
                  <p className="text-sm text-gray-400 mb-1">{item.time}</p>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
