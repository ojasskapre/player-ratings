'use client';

import Link from 'next/link';
import ThemeModeToggle from './ThemeModeToggle';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="p-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold">
          Premier League Ratings
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">
            <Link href="/about" className="text-foreground transition-colors">
              About us
            </Link>
          </Button>
          <ThemeModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
