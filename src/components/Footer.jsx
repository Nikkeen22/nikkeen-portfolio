// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaTelegramPlane, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <div className="max-w-4xl mx-auto flex justify-center gap-8">
        <a
          href="https://instagram.com/your_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transition"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transition"
          aria-label="Telegram"
        >
          <FaTelegramPlane size={24} />
        </a>
        <a
          href="https://github.com/your_github"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transition"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Nikkeen. Всі права захищені.</p>
    </footer>
  );
};

export default Footer;
