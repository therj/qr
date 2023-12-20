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
import {
  TBook,
  TContact,
  TEmail,
  TLink,
  TPhone,
  TSms,
  TText,
  TQr,
} from '@/types/card';
import QRCodeTypeEnum from '@/constants/enums';

const getQrData = (type: string, data: TQr[`data`]) => {
  let Icon: React.ElementType;
  let typeText;
  let dataTitleText = ` data.title`;
  switch (type) {
    case QRCodeTypeEnum.book:
      // eslint-disable-next-line no-case-declarations
      const bookData = data as TBook[`data`];
      typeText = `Book`;
      dataTitleText = bookData.title;
      if (bookData.author) {
        dataTitleText = `${dataTitleText} (${bookData.author})`;
      }
      Icon = BookOpenIcon;
      break;
    case QRCodeTypeEnum.phone:
      typeText = `Phone`;
      // eslint-disable-next-line no-case-declarations
      const phoneData = data as TPhone[`data`];
      dataTitleText = phoneData.phoneNumber;
      if (phoneData.phoneNumber) {
        dataTitleText = `${dataTitleText}`;
        if (phoneData.name) {
          dataTitleText = `${dataTitleText} (${phoneData.name})`;
        }
      }

      Icon = PhoneIcon;
      break;
    case QRCodeTypeEnum.contact:
      typeText = `Contact`;
      // eslint-disable-next-line no-case-declarations
      const contactData = data as TContact[`data`];

      dataTitleText =
        contactData.name || contactData.email || contactData.phoneNumber;

      if (contactData.company) {
        dataTitleText = `${dataTitleText} (${contactData.company})`;

        if (contactData.jobTitle) {
          dataTitleText = `${dataTitleText} (${contactData.company}, ${contactData.jobTitle})`;
        }
      }
      Icon = UserIcon;
      break;
    case `wifi`:
      typeText = `WiFi`;
      // eslint-disable-next-line no-case-declarations
      const wifiData = data as TContact[`data`];
      dataTitleText = wifiData.name;
      Icon = WifiIcon;
      break;
    case `link`:
      typeText = `Link`;
      // eslint-disable-next-line no-case-declarations
      const linkData = data as TLink[`data`];
      dataTitleText = linkData.url;
      Icon = LinkIcon;
      break;
    case `text`:
      typeText = `Text`;
      // eslint-disable-next-line no-case-declarations
      const textData = data as TText[`data`];
      dataTitleText = textData.text;
      Icon = TextIcon;
      break;
    case `email`:
      typeText = `Email`;
      // eslint-disable-next-line no-case-declarations
      const emailData = data as TEmail[`data`];

      dataTitleText = `Email: ${emailData.body || ``}`;

      Icon = EnvelopeIcon;
      break;
    case `sms`:
      typeText = `SMS Message`;
      // eslint-disable-next-line no-case-declarations
      const smsData = data as TSms[`data`];
      dataTitleText = smsData.text;
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

export function QRCard({ className = `shadow sm:flex`, ...props }: TQr) {
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
