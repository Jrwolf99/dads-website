'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ThemeButton from './ThemeButton';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuBarStyles =
    'block w-full h-[2.5px] rounded-full bg-black dark:bg-white transition-all duration-300 ease-in-out';
  return (
    <nav className="py-4 relative w-full">
      <div className="flex justify-between items-center py-2 px-5">
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 focus:outline-none space-y-[7px]"
          >
            <div
              className={`${menuBarStyles} ${
                isOpen ? 'transform rotate-45 translate-y-[9.5px]' : ''
              }`}
            />
            <div className={`${menuBarStyles} ${isOpen ? 'opacity-0' : ''}`} />
            <div
              className={`${menuBarStyles} ${
                isOpen ? 'transform -rotate-45 -translate-y-[9.5px]' : ''
              }`}
            />
          </button>
        </div>
        <div className="sm:ml-auto">
          <ThemeButton />
        </div>
      </div>
      <ul
        className={`flex flex-col sm:flex-row justify-center items-center p-2 gap-4 sm:gap-0 transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        } sm:flex`}
      >
        <li>
          <Link href="/">
            <Button onClick={() => setIsOpen(false)} variant="outline">
              Music
            </Button>
          </Link>
        </li>
        {/* <li>
          <Link href="/events">
            <Button onClick={() => setIsOpen(false)} variant="ghost">
              Events
            </Button>
          </Link>
        </li> */}
        <li>
          <Link href="/about-us">
            <Button onClick={() => setIsOpen(false)} variant="ghost">
              About Us
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
