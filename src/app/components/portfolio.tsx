

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: "/project1.png",
    link: "https://ui-ux-hackathon-sara.vercel.app/",
  },
  {
    id: 2,
    title: "Dynamic Resume Builder",
    image: "/project2.png",
    link: "https://hackathon-milestone4-5-by-saraasif.vercel.app",
  },
  {
    id: 3,
    title: "File Converter",
    image: "/project3.png",
    link: "https://saraasif2024-growth-mind-set-project-01-file-converter-9nhp31.streamlit.app/",
  },
  {
    id: 4,
    title: "Unit Converter",
    image: "/project4.png",
    link: "https://saraasif2024-growth-mind-set-project-02-unit-converter-lg4xei.streamlit.app/",
  },
  {
    id: 5,
    title: "Password Generator and Manager",
    image: "/project5.png",
    link: "https://saraasif2024-growth-mind-set-project-03-app-6tlwx2.streamlit.app/",
  },
  {
    id: 6,
    title: "Dynamic Resume",
    image: "/project6.png",
    link: "https://hackathon-milestone01-by-sara-asif.vercel.app/",
  },
];

export default function PortfolioPage() {
  return (
    <section
      id="portfolio"
      className=" px-10 py-16 bg-gray-50 text-[#2c2f3f]" >
    <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-pink-500 mb-6 uppercase"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            Portfolio
            </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#f5f8fd] text-[#2c2f3f]  border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Link href={project.link} target="_blank">
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
