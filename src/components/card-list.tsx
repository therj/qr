import { cn } from '@/lib/utils';
import { QRCard } from './qr-card';
import ExtraCards from './extra-cards.temp';

interface cardListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardList: React.FC<cardListProps> = ({ className }) => {
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
    <div
      className={cn(
        `mb-6 lg:mb-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8`,
        className
      )}
    >
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
      {/* 4 extra cards */}
      <ExtraCards />
    </div>
  );
};

export default CardList;
