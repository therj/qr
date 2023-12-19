'use client';

import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import { Skeleton } from '@ui/skeleton';
import { Button } from '@ui/button';

export function QRCardSkeleton({ className = `shadow sm:flex` }) {
  return (
    <Card className={cn(`flex flex-col relative max-w-full`, className)}>
      <CardHeader className="max-w-full mb-auto">
        <CardTitle className="truncate space-y-2">
          <Skeleton className="w-[200px] h-[10px]"></Skeleton>
        </CardTitle>
        <CardDescription className="">
          <Skeleton className="w-[200px] h-[10px]"></Skeleton>
        </CardDescription>
      </CardHeader>
      <CardContent className="max-w-full grid gap-4">
        <div className="w-full items-center p-0 flex flex-row gap-4">
          <Skeleton className="flex-none mr-1 h-6 w-6" />
          <div className="flex-col space-y-1">
            <p className="text-sm font-medium leading-none line-clamp-1">
              <Skeleton className="w-[200px] h-[10px]" />
            </p>
            <p className="text-sm text-muted-foreground truncate">
              <Skeleton className="w-[100px] h-[10px]" />
            </p>
          </div>
        </div>
        <Skeleton className="place-self-center dark:contrast-125 dark:brightness-75 mt-auto w-[200px] h-[200px]" />
      </CardContent>

      <CardFooter className="w-full flex flex-row justify-between	bg-muted py-4 mb-0">
        <div className="flex gap-6">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-6" />
        </div>

        <div className="flex gap-6">
          <Skeleton className="h-6 w-6" />
          <Skeleton className="h-6 w-6" />
        </div>
      </CardFooter>
      <Skeleton className="absolute cursor-pointer px-2 py-2 top-4 right-4 h-6 w-6"></Skeleton>
    </Card>
  );
}

export function QRCardLoading({ className = `shadow sm:flex` }) {
  return (
    <Card className={cn(`flex flex-col relative max-w-full`, className)}>
      <CardHeader className="max-w-full mb-auto">
        <CardTitle className="truncate">Loading...</CardTitle>
        <CardDescription className="truncate">
          Please wait while we load your QR data...
        </CardDescription>
      </CardHeader>
      <CardContent className="max-w-full grid gap-4">
        <div className="w-full items-center p-0 flex flex-row gap-4">
          <Button size={`lg`} variant={`outline`}>
            {`<Load Skeleton here>`}
          </Button>
        </div>
      </CardContent>

      <CardFooter className="w-full flex flex-row justify-between	bg-muted py-4 mb-0">
        <p className="text-sm text-muted-foreground truncate">
          You can seed items to begin with
        </p>
      </CardFooter>
    </Card>
  );
}

export function QRCardSeed({
  seed,
  qrCodeDataLength,
  disabled = false,
  className = `shadow sm: flex`,
}: {
  seed: () => Promise<void>;
  disabled: boolean;
  qrCodeDataLength?: number;
  className?: string;
}) {
  return (
    <Card className={cn(`flex flex-col relative max-w-full`, className)}>
      <CardHeader className="max-w-full">
        <CardTitle className="truncate">No QR Data</CardTitle>
        <CardDescription className="truncate">
          Add some QR data to see it here!
        </CardDescription>
      </CardHeader>
      <CardContent className="max-w-full grid gap-4 mt-auto mb-auto">
        <div className="w-full items-end p-0 flex flex-row gap-4">
          <Button size={`lg`} onClick={seed} disabled={disabled}>
            Seed QR Data
          </Button>
        </div>
      </CardContent>

      <CardFooter className="w-full flex flex-row justify-between	bg-muted py-4 mb-0">
        <p className="text-sm text-muted-foreground truncate">
          This will seed {qrCodeDataLength || `some`} items
        </p>
      </CardFooter>
    </Card>
  );
}
