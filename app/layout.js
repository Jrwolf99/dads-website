import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './theme-provider';
import NavBar from './NavBar';

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
          <main className="min-h-screen flex flex-col items-center justify-between px-4 sm:px-24 md:px-32 lg:px-48 xl:px-64">
            {children}
          </main>
          <footer className="flex flex-col items-center justify-center w-full h-24 border-t mt-16">
            <p>
              Made with 💙 by GW Designs
            </p>
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
