'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-primary text-foreground p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          Premier League Ratings
        </Link>
        <Link href="/about" className="text-foreground hover:text-accent">
          About us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
