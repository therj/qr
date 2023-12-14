import CardList from '@/components/card-list';
import { HomeIcon } from '@radix-ui/react-icons';
import { Button } from '@ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="items-center justify-center p-8 mx-auto mt-8 max-w-screen-xl lg:py-16 lg:px-6 gap-8 sm:p-16 md:p-20 lg:p-24">
        <CardList />
      </main>

      <Button
        variant="default"
        size="icon"
        className="fixed top-2 right-2/4 flex items-center border-primary border-0 rounded-full p-2"
        asChild
      >
        <Link href="/">
          <HomeIcon className="h-4 w-4" />
          <span className="sr-only">Go Home</span>
        </Link>
      </Button>
    </>
  );
}
