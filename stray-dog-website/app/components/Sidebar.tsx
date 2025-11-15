'use client';

import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '📖' },
    { name: 'Services', href: '#services', icon: '🐕' },
    { name: 'Gallery', href: '#gallery', icon: '📸' },
    { name: 'Contact', href: '#contact', icon: '📧' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-primary-800 text-white shadow-lg z-50">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-8 text-primary-100">Stray Dog</h1>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-primary-700">
        <p className="text-sm text-primary-300">© 2025 Stray Dog</p>
      </div>
    </aside>
  );
};

export default Sidebar;
