import { QRCard } from '@/components/qr-card';
import { HomeIcon } from '@radix-ui/react-icons';
import { Button } from '@ui/button';
import Link from 'next/link';

export default function Home() {
  const items = [
    `WiFi`,
    `Link`,
    `Text`,
    `Contact`,
    `Email`,
    `Phone`,
    `SMS`,
    `Location`,
  ];
  // choose random item from array
  const getItemName = () => items[Math.floor(Math.random() * items.length)];

  return (
    <>
      <main className="min-h-screen grid grid-cols-3 gap-8  items-centerX justify-center p-24">
        <QRCard bookmark title="Hello World" />
        <QRCard bookmark itemName={getItemName()} />
        <QRCard title="Aditya Was Not Here" />
        <QRCard title="Unstable Diffusion"></QRCard>
        <QRCard itemName={getItemName()}></QRCard>
        <QRCard itemName={getItemName()}></QRCard>
        <QRCard itemName={getItemName()}></QRCard>
        <QRCard itemName={getItemName()}></QRCard>
        <QRCard itemName={getItemName()}></QRCard>
        <QRCard itemName={getItemName()}></QRCard>
        <QRCard itemName={getItemName()}></QRCard>
      </main>

      <Button
        variant="default"
        size="icon"
        className="fixed top-px right-2/4 flex items-center border-primary border-0 rounded-full p-2"
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
