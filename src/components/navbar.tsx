'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-provider';

function NavBar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const isHome = usePathname() === `/`;

  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b bg-background">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/favicon.ico"
            className="h-8 p-px p-x-1 bg-primary rounded-sm"
            alt="Mero QR Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap  hidden sm:block">
            Mero QR
          </span>
        </Link>
        <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
          <Button
            size={`lg`}
            variant={`secondary`}
            className="text-base px-4"
            asChild
          >
            {isHome ? (
              <Link href="/design">See Design</Link>
            ) : (
              <Link href="/">Home</Link>
            )}
          </Button>
          {/* <Link href="/">

          {/* <Button
            size={`lg`}
            variant={`outline`}
            className="text-base px-4"
            asChild
          >
            <Link href="/design">Go Home</Link>
          </Button> */}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export { NavBar };
