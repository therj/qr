import Link from 'next/link';
import type { Metadata } from 'next';

import { Button } from '@ui/button';

export const metadata: Metadata = {
  title: `404 Not Found`,
};

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          {`Sorry, we couldn\u2019t find the page you\u2019re looking for.`}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/" className="font-semibold">
              Go back home
            </Link>
          </Button>
          <Link href="/contact" className="text-sm font-semibold">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
