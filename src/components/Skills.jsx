import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGit, 
  FaReact, 
  FaDesktop, 
  FaBrain,
  FaTelegramPlane // <- імпорт іконки
} from 'react-icons/fa';
import { SiDjango, SiFlask } from 'react-icons/si';

const skills = [
  { id: 'python', icon: <FaPython size={40} />, label: 'Python', description: 'Основна мова розробки, автоматизація, скрипти, бекенд.' },
  { id: 'db', icon: <FaDatabase size={40} />, label: 'Бази Даних', description: 'MySQL, PostgreSQL — проєктування та запити.' },
  { id: 'gui', icon: <FaDesktop size={40} />, label: 'GUI', description: 'Tkinter — створення графічних застосунків.' },
  { id: 'ai', icon: <FaBrain size={40} />, label: 'AI', description: 'ML, штучний інтелект, основи обробки даних.' },
  { id: 'html', icon: <FaHtml5 size={40} />, label: 'HTML5', description: 'Верстка сторінок, семантика.' },
  { id: 'css', icon: <FaCss3Alt size={40} />, label: 'CSS3', description: 'Стилізація, адаптивність, Tailwind.' },
  { id: 'js', icon: <FaJs size={40} />, label: 'JavaScript', description: 'Інтерактивність на фронтенді.' },
  { id: 'git', icon: <FaGit size={40} />, label: 'Git', description: 'Контроль версій, GitHub.' },
  { id: 'django', icon: <SiDjango size={40} />, label: 'Django', description: 'Потужний фреймворк для бекенду.' },
  { id: 'flask', icon: <SiFlask size={40} />, label: 'Flask', description: 'Мінімалістичний веб-фреймворк Python.' },
  { id: 'frontend', icon: <FaReact size={40} />, label: 'Frontend', description: 'React.js для SPA, компоненти, інтерактивність.' },
  { id: 'telegram', icon: <FaTelegramPlane size={40} />, label: 'Telegram боти', description: 'Створення ботів для Telegram з використанням Python та API Telegram.' },
];

const Skills = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="py-20 bg-gray-900" id="skills">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-teal-400 mb-8">Знання та Навички</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-white hover:text-teal-300"
              onClick={() => setActive(skill.id === active ? null : skill.id)}
            >
              <div className="flex flex-col items-center">
                {skill.icon}
                <span className="mt-2 text-sm">{skill.label}</span>
              </div>
              {active === skill.id && (
                <p className="text-gray-300 text-xs mt-2 max-w-[150px]">
                  {skill.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
