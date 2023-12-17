import { cn } from '@/lib/utils';
import { qrCodeData } from '@/constants';
import { QRCard } from './qr-card';
import ExtraCards from './extra-cards.temp';

interface cardListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardList: React.FC<cardListProps> = ({ className }) => {
  return (
    <div
      className={cn(
        `mb-6 lg:mb-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8`,
        className
      )}
    >
      {qrCodeData.map((qrCode) => (
        <QRCard
          key={qrCode.type + qrCode.title || qrCode.description || ``}
          {...qrCode}
        />
      ))}

      {/* 4 extra cards */}
      <ExtraCards />
    </div>
  );
};

export default CardList;
