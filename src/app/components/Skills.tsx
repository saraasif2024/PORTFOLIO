'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML', value: 90 },
  { name: 'CSS', value: 80 },
  { name: 'JavaScript', value: 55 },
  { name: 'TypeScript', value: 80 },
//   { name: 'Tailwind CSS', value: 90 },
  { name: 'Next.js', value: 85 },
  { name: 'Python', value: 40 },
  { name: 'Photoshop', value: 40 },
  { name: 'Canva', value: 60 },
];

const Skills = () => {
  const leftSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const rightSkills = skills.slice(Math.ceil(skills.length / 2));

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section id="skills" className="px-6 py-16 bg-gray-50 text-[#2c2f3f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-500 mb-2 uppercase">Skills</h2>
        <p className="text-xl text-gray-700 font-semibold mb-10">
          My professional skillset
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[leftSkills, rightSkills].map((column, i) => (
            <div key={i}>
              {column.map((skill, index) => (
                <div key={index} data-aos="fade-up" className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm">{skill.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-pink-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
