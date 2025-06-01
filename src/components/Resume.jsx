// src/components/Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-950 text-white text-center px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-teal-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Резюме
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Програміст Python з досвідом розробки бекенд-сервісів, веб-додатків на Django та Flask, а також інтеграції API. Активно працюю з базами даних, автоматизацією процесів і маю навички фронтенд-розробки на React.
        </motion.p>

        <motion.a
          href="/resume.pdf" // поклади резюме сюди
          download
          className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded font-semibold transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <FaFileDownload /> Завантажити резюме
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;
