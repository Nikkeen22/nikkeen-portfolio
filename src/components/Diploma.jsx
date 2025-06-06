import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaFileDownload } from 'react-icons/fa';

const Diploma = () => {
  return (
    <section id="diploma" className="py-20 bg-gray-950 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-teal-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Дипломи та сертифікати
        </motion.h2>

        {/* Сертифікат Python */}
        <motion.img
          src="/diploma.jpg"
          alt="Diploma Python"
          className="mx-auto mb-6 rounded-lg shadow-lg max-w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://itproger.com/view-diplom/f03921c4fe094ede61b05b25400c4df7/python/ua"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded transition"
          >
            <FaExternalLinkAlt /> Переглянути онлайн
          </a>
          <a
            href="/diploma.pdf"
            download
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition"
          >
            <FaFileDownload /> Завантажити PDF
          </a>
        </motion.div>

        {/* Сертифікат AI */}
        <motion.img
          src="/certificate_ai.jpg"
          alt="Сертифікат ШІ"
          className="mx-auto mb-6 rounded-lg shadow-lg max-w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://www.iesfukr.org/certificates"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded transition"
          >
            <FaExternalLinkAlt /> Переглянути онлайн
          </a>
          
        </motion.div>

        {/* Сертифікат Unity */}
        <motion.img
          src="/certificate_unity.jpg"
          alt="Сертифікат Unity"
          className="mx-auto mb-6 rounded-lg shadow-lg max-w-full sm:w-[300px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://itproger.com/view-sertificate/38befc839af7615226b5da2c2ded4a41/android-game"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded transition"
          >
            <FaExternalLinkAlt /> Переглянути онлайн
          </a>
          <a
            href="/certificate_unity.pdf"
            download
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded transition"
          >
            <FaFileDownload /> Завантажити PDF
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Diploma;
