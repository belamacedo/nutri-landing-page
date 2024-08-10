'use client'

import { useState } from 'react';
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-amber-100 shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        <img src="/logo_icon_linear.png" alt="Minha Logo" className="h-14" />
        <div className="hidden md:flex">
          <nav>
            <ul className="flex space-x-6 text-amber-600">
              {navigation.map((item) => (
                <li key={item.name} className="relative group">
                  <Link href={item.href} className="relative inline-block">
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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
            <ul className="space-y-4 text-amber-600">
              {navigation.map((item) => (
                <li key={item.name} className="relative group">
                  <Link href={item.href} className="relative inline-block">
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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
