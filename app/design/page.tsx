import CardList from '@/components/card-list';
import { HomeIcon } from '@radix-ui/react-icons';
import { Button } from '@ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="items-center justify-center gap-8 p-4 mx-auto max-w-screen-xl mt-16 lg:mt-20  sm:px-8 lg:px-4">
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
