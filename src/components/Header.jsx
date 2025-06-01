import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: 'hero', label: 'Головна' },
    { to: 'skills', label: 'Знання' },
    { to: 'diploma', label: 'Диплом' },
    { to: 'projects', label: 'Проєкти' },
    { to: 'resume', label: 'Резюме' },
    { to: 'contact', label: 'Контакти' }
  ];

  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-teal-400">Nikkeen</div>

        {/* Меню для середніх і більших екранів */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-teal-300 transition"
                onClick={() => setMenuOpen(false)} // закрити меню при кліку (для мобілок)
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Іконка гамбургера для мобільних */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Простий гамбургер */}
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* Випадаюче меню для мобільних */}
      {menuOpen && (
        <ul className="flex flex-col bg-gray-800 text-white px-6 py-4 space-y-4 md:hidden">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-teal-300 transition block"
                onClick={() => setMenuOpen(false)} // закрити меню після вибору
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
