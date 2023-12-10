import { QRCard } from '@/components/qr-card';

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
  );
}
