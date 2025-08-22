// 'use client';
// import React, { useEffect, useRef } from 'react';
// import Typed from 'typed.js';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   const typedEl = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(typedEl.current, {
//       strings: ['Front-End Developer', 'Freelancer'],
//       typeSpeed: 120,
//       backSpeed: 60,
//       loop: true,
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="h-screen bg-gray-50 flex items-center justify-center px-6 sm:px-16"
//     >

//      <div className=
//    "absolute top-10 left-0.5 bg-pink-900 w-[990px] h-[540px]  shadow-lg"
//    >
//     </div>

//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">

//         {/* LEFT SIDE - Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center md:text-left"
//         >
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
//             Hi, I&apos;m <span className="text-pink-600">Sara </span>
//           </h1>
//           <h2 className="text-xl sm:text-2xl text-pink-500">
//             <span ref={typedEl} className="text-pink-500 font-semibold" />
//           </h2>
//         </motion.div>

//         {/* RIGHT SIDE - Avatar / Hexagon Ring */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="hidden md:flex justify-center relative"
//         >
//           {/* Hexagon Ring */}
//           <div className="relative left-20 w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
//             <div
//               className="absolute inset-0 bg-gradient-to-r from-sky-300 to-pink-300 "
//               style={{
//                 clipPath:
//                   "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
//               }}
//             ></div>

//             {/* Inner Hexagon with Image */}
//             <div
//               className="w-60 h-60 overflow-hidden shadow-xl relative bg-white"
//               style={{
//                 clipPath:
//                   'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
//               }}
//             >
//               <img
//                 src="/profile.jpg"
//                 alt="Sara Avatar"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Hero = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Front-End Developer", "Freelancer"],
      typeSpeed: 120,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="h-screen bg-gray-50 flex items-center justify-center px-6 sm:px-16 relative"
    >
      {/* Background Box (responsive) */}
      <div
        className="hidden lg:block  md:block absolute top-10 left-4 
             bg-sky-100
             w-[80%] 
             h-[500px] 
             rounded-xl shadow-lg"
      ></div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
        {/* LEFT SIDE - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Hi, I&apos;m <span className="text-pink-600">Sara </span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-pink-500">
            <span ref={typedEl} className="text-pink-500 font-semibold" />
          </h2>
        </motion.div>

        {/* RIGHT SIDE - Avatar / Hexagon Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center relative"
        >
          {/* Hexagon Ring */}
          <div className="relative left-20 w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-gradient-to-r from-sky-300 to-pink-300"
              style={{
                clipPath:
                  "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              }}
            ></div>

            {/* Inner Hexagon with Image */}
            <div
              className="w-60  h-66 overflow-hidden  shadow-xl relative bg-white"
              style={{
                clipPath:
                  "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
              }}
            >
              <img
                src="/profile.jpg"
                alt="Sara Avatar"
                className="w-full  object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
