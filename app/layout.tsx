import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.scss';

import { cn } from '@/lib/utils';
import { app } from '../src/constants';

const fontSans = FontSans({
  /* eslint-disable quotes */
  subsets: ['latin'],
  variable: '--font-sans',
  /* eslint-enable quotes */
});

export const metadata: Metadata = {
  title: app.title,
  description: app.description,
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
          attribute="data-theme"
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
