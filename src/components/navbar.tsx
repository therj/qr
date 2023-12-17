'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-provider';

function NavBar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const isHome = usePathname() === `/`;
  const baseClasses = `border-b-2 py-2 px-4 sm:px-8 lg:px-4`;

  return (
    <nav
      className={cn(
        baseClasses,
        `fixed w-full z-20 top-0 start-0 border-b bg-background `,
        className
      )}
      {...props}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Button
          variant={`ghost`}
          className="text-2xl whitespace-nowrap flex items-center px-2 py-7 rounded-none select-none"
          asChild
        >
          <Link href="/">
            <Button
              variant={`ghost`}
              className="px-1 py-0 rounded text-xl font-bold leading-none"
              asChild
            >
              <span>Mero</span>
            </Button>
            <Button
              className="bg-primary px-2 py-0 rounded text-xl font-bold leading-none"
              asChild
            >
              <span>QR</span>
            </Button>
          </Link>
        </Button>
        <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
          <ThemeToggle className="sm:order-2" />
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
        </div>
      </div>
    </nav>
  );
}

export { NavBar };
