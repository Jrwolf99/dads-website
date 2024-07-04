import { Button } from '@/components/ui/button';
import React from 'react';
import ThemeButton from './ThemeButton';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="py-4 relative w-full">
      <ul className="flex flex-col sm:flex-row justify-center items-center p-2 gap-4">
        <li>
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
        </li>

        <li>
          <Link href="/music">
            <Button variant="ghost">Music</Button>
          </Link>
        </li>

        <li>
          <Link href="/events">
            <Button variant="ghost">Events</Button>
          </Link>
        </li>

        <li>
          <Link href="/portal" as="contact-us">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </li>
      </ul>
      <div className="ml-auto absolute top-[15px] right-[15px]">
        <ThemeButton />
      </div>
    </nav>
  );
}
