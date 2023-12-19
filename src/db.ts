'use client';

import Dexie, { Table } from 'dexie';
import { TQr } from '@/types/card';

export class MySubClassedDexie extends Dexie {
  // 'qrs' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case

  qrs!: Table<TQr>;

  constructor() {
    super(`mero_qr_idb`, { autoOpen: true });
    this.version(1).stores({
      qrs: `id, type, title, description, isBookmark, data`,
    });
  }
}

export const db = new MySubClassedDexie();
