import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './theme-provider';
import NavBar from './NavBar';
import SampleButton from '@/components/SampleButton';
import { headers } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GW Designs',
  description: 'GW Designs provides web design and development services.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={inter.className}>
          <NavBar />
          <main className="min-h-screen flex flex-col items-center justify-between px-4 max-w-5xl mx-auto">
            {children}
          </main>
          <footer className="flex flex-col items-center justify-center w-full h-24 border-t mt-16 mb-8 pt-12 pb-6 gap-4">
            <p>© 2024 Wolf Music Productions</p>
            <p className="text-sm text-gray-500">
              Website designed and made by{' '}
              <a
                href="https://jrwolf.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Jonathan Wolf
              </a>
            </p>
          </footer>
          <SampleButton />
        </body>
      </ThemeProvider>
    </html>
  );
}
