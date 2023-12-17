/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import {
  BellIcon,
  DrawingPinFilledIcon as BookmarkedIcon,
  DrawingPinIcon as NotBookmarkedIcon,
  Share1Icon,
  TextIcon,
} from '@radix-ui/react-icons';

import {
  TrashIcon as HeroTrashIcon,
  EyeDropperIcon,
  PencilIcon,
  PencilSquareIcon,
  InboxStackIcon,
  ArrowDownIcon,
  ClipboardDocumentIcon,
  ClipboardIcon,
  PaperClipIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  EyeIcon,
  WifiIcon,
  LinkIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
  UserCircleIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';

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
import Image from 'next/image';

export interface CardProps extends React.ComponentProps<typeof Card> {
  type?: string;
  title?: string;
  description?: string;
  isBookmark?: boolean;
  data?: object;
}
type WifiCardProps = CardProps & {
  type: `wifi`;
  data: {
    name: string;
  };
};
type LinkCardProps = CardProps & {
  type: `link`;
  data: {
    link: string;
  };
};
type TextCardProps = CardProps & {
  type: `text`;
  data: {
    text: string;
  };
};
type ContactCardProps = CardProps & {
  type: `contact`;
  data: {
    name: string;
    phoneNumber: string;
    email: string;
  };
};
type EmailCardProps = CardProps & {
  type: `email`;
  data: {
    email: string;
    subject: string;
    body: string;
  };
};
type PhoneCardProps = CardProps & {
  type: `phone`;
  data: {
    phoneNumber: string;
  };
};
// mix the prop types
type QRCardProps =
  | CardProps
  | WifiCardProps
  | LinkCardProps
  | TextCardProps
  | ContactCardProps
  | EmailCardProps
  | PhoneCardProps;

// Define a general interface for the data object
interface GeneralQrData {
  // Add other properties as needed
  author?: string;
  body?: string;
  company?: string;
  email?: string;
  link: string;
  name: string;
  phone: string;
  subject: string;
  text: string;
  title?: string;
}

const getQrData = (type: string, data: GeneralQrData) => {
  let Icon: React.ElementType;
  let typeText;
  let dataTitleText = data.title;
  switch (type) {
    case `book`:
      typeText = `Book`;
      dataTitleText = data.title;
      if (data.author) {
        dataTitleText = `${dataTitleText} (${data.author})`;
      }
      Icon = BookOpenIcon;
      break;
    case `phone`:
      typeText = `Phone`;
      dataTitleText = data.phone;
      if (data.name) {
        dataTitleText = `${dataTitleText} (${data.name})`;
      }

      Icon = PhoneIcon;
      break;
    case `contact`:
      typeText = `Contact`;
      dataTitleText = data.name || data.email || data.phone;

      if (data.company) {
        dataTitleText = `${dataTitleText} (${data.company})`;
      }
      Icon = UserIcon;
      break;
    case `wifi`:
      typeText = `WiFi`;
      dataTitleText = data.name;
      Icon = WifiIcon;
      break;
    case `link`:
      typeText = `Link`;
      dataTitleText = data.link;
      Icon = LinkIcon;
      break;
    case `text`:
      typeText = `Text`;
      dataTitleText = data.text;
      Icon = TextIcon;
      break;
    case `email`:
      typeText = `Email`;
      dataTitleText = `Email: ${data.body || ``}`;

      Icon = EnvelopeIcon;
      break;
    case `sms`:
      typeText = `SMS Message`;
      dataTitleText = data.text;
      Icon = ChatBubbleBottomCenterTextIcon;
      break;
    default:
      typeText = `Unknown`;
      Icon = EyeIcon;
  }
  return {
    typeText,
    Icon,
    dataTitleText,
  };
};

export function QRCard({
  className = `items - center shadow sm: flex`,
  ...props
}: QRCardProps) {
  const { type, title, description, data, isBookmark, ...cardProps } = props;

  const { Icon, typeText, dataTitleText } = getQrData(type, data);
  const cardTitleText = title ?? `Untitled ${typeText ?? `Item`}`;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const BookmarkIcon = useMemo(() => {
    // Select initial icon based on bookmark status
    let IconToReturn = isBookmark ? BookmarkedIcon : NotBookmarkedIcon;

    // If hovered, toggle the icon
    if (isHovered) {
      IconToReturn = isBookmark ? NotBookmarkedIcon : BookmarkedIcon;
    }
    return IconToReturn;
  }, [isHovered, isBookmark]);

  return (
    <Card
      className={cn(`flex flex-col relative max-w-full`, className)}
      {...cardProps}
    >
      <CardHeader className="max-w-full mb-auto">
        <CardTitle className="truncate">{cardTitleText}</CardTitle>
        <CardDescription className="truncate">{description}</CardDescription>
      </CardHeader>
      <CardContent className="max-w-full grid gap-4">
        <div className="w-full items-center p-0 flex flex-row gap-4">
          <Icon className="flex-none mr-1 h-6 w-6" />
          <div className="flex-col space-y-1">
            <p className="text-sm font-medium leading-none line-clamp-1">
              {dataTitleText}
            </p>
            <p className="text-sm text-muted-foreground truncate">{typeText}</p>
          </div>
        </div>
        <Image
          src="/qr.png"
          height={200}
          width={200}
          alt={`QR Code for ${cardTitleText}`}
          className="place-self-center dark:contrast-125 dark:brightness-75 mt-auto"
        />
      </CardContent>

      <CardFooter className="w-full flex flex-row justify-between	bg-muted py-4 mb-0">
        <div className="flex gap-2">
          <Button
            size={`icon`}
            variant={`ghost`}
            className="xw-full xflex xitems-center hover:text-primary px-2 py-2"
          >
            <ArrowDownIcon className="h-8 w-8" />
          </Button>
          <Button
            size={`icon`}
            variant={`ghost`}
            className="xw-full flex items-center hover:text-primary px-2 py-2"
          >
            <ClipboardDocumentIcon className="h-8 w-8" />
          </Button>
          <Button
            size={`icon`}
            variant={`ghost`}
            className="xw-full xflex xitems-center hover:text-primary px-2 py-2"
          >
            <Share1Icon className="h-8 w-8" />
          </Button>
        </div>

        <div className="flex gap-2">
          <Button
            size={`icon`}
            variant={`ghost`}
            className="xw-full xflex xitems-center hover:text-primary px-2 py-2"
          >
            <PencilSquareIcon className="h-8 w-8" />
          </Button>
          <Button
            size={`icon`}
            variant={`ghost`}
            className="xw-full xflex xitems-center hover:text-destructive px-2 py-2 hover:none"
          >
            <HeroTrashIcon className="h-8 w-8" />
          </Button>
        </div>
      </CardFooter>
      {React.createElement(BookmarkIcon, {
        className: `absolute cursor-pointer px-2 py-2 top-4 right-4 h-9 w-9`,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
    </Card>
  );
}
