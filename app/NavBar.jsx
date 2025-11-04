'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ThemeButton from './ThemeButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();

  const menuBarStyles =
    'block w-full h-[2.5px] rounded-full bg-black dark:bg-white transition-all duration-300 ease-in-out';
  return (
    <nav className="py-2 relative w-full">
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
        <div className="hidden sm:flex sm:gap-5 items-center">
          <Link href="/">
            <Button
              variant={
                path.includes('music') || path === '/' ? 'outline' : 'ghost'
              }
            >
              Music
            </Button>
          </Link>
          <Link href="/about-us">
            <Button
              variant={path.includes('about-us') ? 'outline' : 'ghost'}
            >
              About Us
            </Button>
          </Link>
        </div>
        {/* <div className="ml-auto">
          <ThemeButton />
        </div> */}
      </div>
      <ul
        className={`flex flex-col gap-4 justify-center items-center p-2 transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        } sm:hidden`}
      >
        <li>
          <Link href="/">
            <Button
              onClick={() => setIsOpen(false)}
              variant={
                path.includes('music') || path === '/' ? 'outline' : 'ghost'
              }
            >
              Music
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <Button
              onClick={() => setIsOpen(false)}
              variant={path.includes('about-us') ? 'outline' : 'ghost'}
            >
              About Us
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
