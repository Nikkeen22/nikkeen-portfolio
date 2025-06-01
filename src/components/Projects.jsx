// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Проект 1',
    description: 'Короткий опис проекту 1',
    image: '/placeholder.png', // заміни пізніше
    siteUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Проект 2',
    description: 'Короткий опис проекту 2',
    image: '/placeholder.png',
    siteUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Проект 3',
    description: 'Короткий опис проекту 3',
    image: '/placeholder.png',
    siteUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Проект 4',
    description: 'Короткий опис проекту 4',
    image: '/placeholder.png',
    siteUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Проект 5',
    description: 'Короткий опис проекту 5',
    image: '/placeholder.png',
    siteUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Проект 6',
    description: 'Короткий опис проекту 6',
    image: '/placeholder.png',
    siteUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-teal-400 mb-12 text-center">Проєкти</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, description, image, siteUrl, githubUrl }) => (
            <motion.div
              key={id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: id * 0.1 }}
            >
              <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-300 flex-grow">{description}</p>
                <div className="mt-4 flex gap-4">
                  <a
                    href={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded transition"
                  >
                    <FaExternalLinkAlt /> Подивитись сайт
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
