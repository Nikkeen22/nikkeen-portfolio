import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24">
      
<motion.h3
        className="text-teal-400 text-lg sm:text-xl uppercase tracking-widest mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Моє портфоліо
      </motion.h3>

      <motion.img
  src="/img/ava.jpg"
  alt="My profile"
  className="w-40 h-40 rounded-full object-cover border-4 border-teal-400 shadow-lg mb-6"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
/>
      
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Тихоненко Микола Іванович
      </motion.h1>

      <motion.h2
        className="text-xl text-teal-400 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        @Nikkeen
      </motion.h2>

      <motion.p
        className="max-w-md text-gray-300 text-lg mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Python Developer
      </motion.p>

      <motion.div
        className="text-teal-300 text-md font-medium h-6 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Typewriter
  words={[
    "Знання мови Python",
    "Знання мови SQL та робота з нею",
    "Створення програм з UI",
    "Навички створення простого ШІ",
    "Впевнені знання HTML5, CSS3",
    "Знання JavaScript & jQuery",
    "Розробка на Vue JS та React JS",
    "Робота з Git та Bootstrap",
    "Сильні знання по Django",
    "Django Rest Framework",
    "Розробка телеграм ботів"
  ]}
  loop={0}
  cursor
  cursorStyle="|"
  typeSpeed={50}
  deleteSpeed={30}
  delaySpeed={2000}
/>

      </motion.div>
    </section>
  );
};

export default Hero;
