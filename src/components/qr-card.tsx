/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { BellIcon, HomeIcon } from '@radix-ui/react-icons';

import {
  BookmarkIcon as BookmarkIconOutline,
  BookmarkSlashIcon as BookmarkSlashIconOutline,
} from '@heroicons/react/24/outline';
import {
  BookmarkIcon as BookmarkIconSolid,
  BookmarkSlashIcon as BookmarkSlashIconSolid,
} from '@heroicons/react/24/solid';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

const notifications = [
  {
    title: `Your call has been confirmed.`,
    description: `1 hour ago`,
  },
  {
    title: `You have a new message!`,
    description: `1 hour ago`,
  },
  {
    title: `Your subscription is expiring soon!`,
    description: `2 hours ago`,
  },
];

// type CardProps = React.ComponentProps<typeof Card>;

export interface CardProps extends React.ComponentProps<typeof Card> {
  bookmark?: boolean;
  itemName?: string;
}

export function QRCard({
  className,
  bookmark,
  title,
  itemName,
  ...props
}: CardProps) {
  // Temp
  const [renderCount, setRenderCount] = useState(0);

  // Increment the render count each time the component renders
  useEffect(() => {
    setRenderCount((prevCount) => prevCount + 1);
  }, []);
  // Temp End

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const bookmarkIcon = useMemo(() => {
    let iconComponent;

    if (isHovered) {
      iconComponent = bookmark ? BookmarkIconOutline : BookmarkIconSolid;
    } else {
      iconComponent = bookmark ? BookmarkIconSolid : BookmarkIconOutline;
    }

    return iconComponent;
  }, [isHovered, bookmark]);

  return (
    <Card className={cn(`w-[380px]`, `relative`, className)} {...props}>
      <CardHeader>
        {<CardTitle>{title ?? `Untitled ${itemName ?? `Item`}`}</CardTitle>}
        {/* <CardTitle>No Title</CardTitle> */}
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellIcon />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
        </div>
        <div>
          {/* {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full flex items-center">
          <Link href="/" className="flex items-center">
            <HomeIcon className="mr-2 h-4 w-4" /> Go Home
          </Link>
        </Button>
      </CardFooter>
      {React.createElement(bookmarkIcon, {
        className: `absolute cursor-pointer top-4 right-4 h-6 w-6`,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
      {/* <div
        style={{
          position: `absolute`,
          top: 0,
          left: 0,
          background: `rgba(255, 255, 255, 0.8)`,
          padding: `4px`,
          borderRadius: `4px`,
          fontSize: `12px`,
          color: `#333`,
        }}
      >
        {renderCount} rend
      </div> */}
      <span className="text-muted bg-muted-foreground absolute rounded -top-2 -left-2 text-xs p-1">
        {renderCount} renders
      </span>
    </Card>
  );
}
