import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import { cn } from '@/lib/utils';
// eslint-disable-next-line import/extensions
import pkg from '../package.json';

const fontSans = FontSans({
  /* eslint-disable quotes */
  subsets: ['latin'],
  variable: '--font-sans',
  /* eslint-enable quotes */
});

export const metadata: Metadata = {
  title: `Mero QR`,
  description: `${pkg.description} - Mero QR`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `min-h-screen bg-background font-sans antialiased`,
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
