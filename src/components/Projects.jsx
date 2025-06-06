// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer, FaDesktop } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Vidme Academy',
    description:
      'Проект з онлайн‑курсами: містить платні та безкоштовні курси з можливістю підписки. Зареєстровані користувачі із підпискою можуть отримати доступ до платних уроків. Адміністратор може додавати курси та уроки, керувати доступністю контенту. Усе це упаковано в сучасний, приємний дизайн.',
    image: '/vidme-academ.png',
    siteUrl: 'https://vidme-academy-712a7ca9bfb9.herokuapp.com/',
    githubUrl: 'https://github.com/Nikkeen22/vidme-academy',
  },
  {
    id: 2,
    title: 'Інтернет‑магазин на Django + React',
    description:
      'Розробка інтернет‑магазину з Django REST API бекендом (Python Django, розгорнуто на Heroku) та React‑фронтендом (розгорнуто на Vercel).',
    image: '/shop.png',
    backendUrl: 'https://my-unique-shop-backend-c2411867a870.herokuapp.com/',
    frontendUrl: 'https://nikkeenshop.vercel.app/',
    githubUrl: 'https://github.com/Nikkeen22/backend-shop',
  },
  {
    id: 3,
    title: 'AI Cover Generator',
    description:
      'Генерація зображень обкладинок за допомогою штучного інтелекту. Введи текст — отримай AI-арт! Написаний на React та Hugging Face.',
    image: '/ai-cover.png',
    siteUrl: 'https://ai-cover-three.vercel.app/',
    githubUrl: 'https://github.com/Nikkeen22/ai-cover',
  },
  {
    id: 4,
    title: 'Сервіс скорочення URL',
    description:
      'Веб‑ресурс для скорочення посилань з повноцінною системою реєстрації/авторизації, особистим кабінетом, власними стилями, додаванням нових посилань, переглядом списку власних скорочених URL та автоматичним редиректом при переході за скороченим посиланням.',
    image: '/shortener.png',
    siteUrl: 'https://vidme-shortener-7cdd83e6d1e9.herokuapp.com/',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Nikkeen Music Website',
    description:
      'Персональний сайт виконавця Nikkeen, де представлено його музику, альбоми, кліпи та інші творчі матеріали. Реалізовано з використанням React та Tailwind CSS.',
    image: '/nikkeen-music.png',
    siteUrl: 'https://nikkeen-music.vercel.app/',
    githubUrl: 'https://github.com/Nikkeen22/music_app',
  },
  {
    id: 6,
    title: 'Сайт‑блог на Django',
    description:
      'Блог, написаний на Django і розгорнутий на Heroku. Має повноцінну систему реєстрації та авторизації користувачів, а також форму «Зв’язатися з адміністратором», що надсилає повідомлення безпосередньо на електронну пошту адміністратора.',
    image: '/blog.png',
    siteUrl: 'https://nikkeen-blog-ca6fac3ba986.herokuapp.com/',
    githubUrl: '',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-teal-400 mb-12 text-center">Проєкти</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({ id, title, description, image, siteUrl, githubUrl, frontendUrl, backendUrl }) => (
              <motion.div
                key={id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: id * 0.1 }}
              >
                <img src={image} alt={title} className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-300 flex-grow">{description}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {/* Якщо зазначені frontendUrl і backendUrl, рендеримо окремі кнопки */}
                    {frontendUrl && (
                      <a
                        href={frontendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded transition"
                      >
                        <FaDesktop /> Front‑end
                      </a>
                    )}
                    {backendUrl && (
                      <a
                        href={backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded transition"
                      >
                        <FaServer /> Back‑end
                      </a>
                    )}

                    {/* Якщо є класичний siteUrl, рендеримо кнопку "Подивитись сайт" */}
                    {!frontendUrl && siteUrl && (
                      <a
                        href={siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded transition"
                      >
                        <FaExternalLinkAlt /> Подивитись сайт
                      </a>
                    )}

                    {/* Якщо є githubUrl */}
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
