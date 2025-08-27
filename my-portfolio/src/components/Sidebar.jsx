// src/components/Sidebar.jsx

import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-96 bg-dark-bg text-light-text p-12 flex flex-col justify-between shadow-lg z-10">
      <div>
        <h1 className="text-6xl font-bold">Brittany Chiang</h1>
        <h2 className="text-2xl mt-2 text-gray-text">Front End Engineer</h2>
        <p className="text-lg mt-6 leading-relaxed">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>

      <nav className="my-10">
        <ul className="space-y-4 font-bold text-lg">
          <li>
            <a href="#experience" className="block text-gray-text hover:text-light-text transition-colors">
              <span className="inline-block h-px w-8 bg-gray-text mr-4 transition-all hover:w-16 hover:bg-light-text"></span>
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="#projects" className="block text-gray-text hover:text-light-text transition-colors">
              <span className="inline-block h-px w-8 bg-gray-text mr-4 transition-all hover:w-16 hover:bg-light-text"></span>
              PROJECTS
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex space-x-6 text-gray-text">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-light-text transition-colors">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-light-text transition-colors">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-light-text transition-colors">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;