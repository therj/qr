'use client';

import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db';

import { cn } from '@/lib/utils';
import { qrCodeSeedData } from '@/constants';

import { useEffect, useState } from 'react';
import { QRCard } from './qr-card';
import ExtraCards from './extra-cards.temp';
import { QRCardSeed, QRCardSkeleton } from './skeleton-qr-card';

interface cardListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardList: React.FC<cardListProps> = ({ className }) => {
  const [loading, setLoading] = useState(true);

  const idbQrs = useLiveQuery(async () => {
    try {
      const qrs = await db.qrs.toArray();

      return qrs;
    } catch (error) {
      console.error(`🚀 Unable to fetch db.qrs in card-list`, error);
      return [];
    }
  }, []);

  useEffect(() => {
    if (idbQrs) {
      setLoading(false);
    }
  }, [idbQrs]);

  const seed = async () => {
    try {
      await db.qrs.bulkAdd(qrCodeSeedData);
    } catch (error) {
      console.error(`🚀 Seeding failed, db.qrs.bulkAdd:`, error);
    }
  };

  return (
    <div
      className={cn(
        `mb-6 lg:mb-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8`,
        className
      )}
    >
      {/* No data, seed me please */}
      {!loading && !idbQrs?.length && (
        <QRCardSeed
          seed={seed}
          disabled={loading}
          qrCodeDataLength={qrCodeSeedData.length}
        />
      )}

      {/* loading data from indexedDB */}
      {loading &&
        Array.from({ length: 6 }).map((_, i) => <QRCardSkeleton key={i} />)}

      {idbQrs?.map((qrCode) => (
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
