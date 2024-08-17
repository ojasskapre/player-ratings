import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Premier League Ratings',
  description: 'Rate Premier League matches and players',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-background">
            <Navbar />
            <div className="flex flex-grow">
              {/* <div className="flex-1">Left empty container</div> */}
              <main className="max-w-4xl mx-auto p-4 flex-grow">
                {children}
              </main>
              {/* <div className="flex-1">Right empty container</div> */}
            </div>
            <footer className="bg-primary text-secondary-foreground p-4 text-center">
              <p>&copy; 2024 Premier League Ratings</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
