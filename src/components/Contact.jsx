// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-teal-400 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Контакти
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Форма з Formspree */}
          <form
            action="https://formspree.io/f/xzzgbpjr"  // ← тут вставте свій Formspree endpoint
            method="POST"
            onSubmit={() => setSubmitted(true)}     // просто ставимо submitted = true
            className="flex-1 bg-gray-800 p-6 rounded shadow-lg"
          >
            <label className="block mb-3">
              <span className="text-gray-300">Ім’я</span>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </label>
            <label className="block mb-3">
              <span className="text-gray-300">Email</span>
              {/* Formspree потребує поле з name="_replyto" */}
              <input
                type="email"
                name="_replyto"
                required
                className="w-full mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </label>
            <label className="block mb-3">
              <span className="text-gray-300">Повідомлення</span>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full mt-1 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </label>

            <button
              type="submit"
              className="mt-4 w-full bg-teal-500 hover:bg-teal-600 py-3 rounded font-semibold transition"
            >
              Відправити
            </button>

            {submitted && (
              <p className="mt-4 text-green-400 font-semibold">
                Дякую! Ваше повідомлення надіслано.
              </p>
            )}
          </form>

          {/* Контактна інформація */}
          <div className="flex-1 bg-gray-800 p-6 rounded shadow-lg text-gray-300 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-3 text-teal-400" />
              <a href="mailto:your.email@example.com" className="hover:underline">
                n1k.keen.05@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="mr-3 text-teal-400" />
              <a href="tel:+380123456789" className="hover:underline">
                +380 68 547 47 94
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-teal-400" />
              <span>Миронівка, Україна</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
