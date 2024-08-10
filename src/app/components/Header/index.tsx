'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre Mim', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Contato', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    navigation.forEach((section) => {
      const element = document.querySelector(section.href);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.clientHeight;
        if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + height - 50) {
          setActiveSection(section.href);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it once to set the initial state
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-amber-100 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-2 md:p-4">
        <img src="/logo_icon_linear.png" alt="Minha Logo" className="h-10 md:h-14" />
        <div className="hidden md:flex">
          <nav>
            <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base text-amber-600">
              {navigation.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`relative inline-block ${
                      activeSection === item.href ? 'text-amber-800' : ''
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 bottom-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                        activeSection === item.href ? 'scale-x-100' : ''
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-amber-600">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-amber-100 p-4">
          <nav>
            <ul className="space-y-4 text-sm text-amber-600">
              {navigation.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`relative inline-block ${
                      activeSection === item.href ? 'text-amber-800' : ''
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 bottom-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                        activeSection === item.href ? 'scale-x-100' : ''
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
