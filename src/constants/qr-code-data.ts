import { nanoid } from 'nanoid';

import { TQr } from '@/types/card';
import QRCodeTypeEnum from '@/constants/enums';

const qrCodeData: TQr[] = [
  {
    id: nanoid(),
    type: QRCodeTypeEnum.wifi,
    title: `Mero Internet`,
    description: `Second floor only`,
    isBookmark: true,
    createdAt: new Date(`2023-12-20T00:00:00.000Z`).toISOString(),
    updatedAt: new Date(`2023-12-20T00:00:00.000Z`).toISOString(),
    data: {
      networkType: `wpa/wpa2`,
      name: `ALHN-69B5`,
      password: `12345678`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.link,
    title: `Personal Website`,
    description: `Visit my personal website`,
    isBookmark: true,
    createdAt: new Date(`2023-12-19T00:00:00.000Z`).toISOString(),
    updatedAt: new Date(`2023-12-19T00:00:00.000Z`).toISOString(),
    data: {
      url: `https://www.example.com`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.text,
    title: `Important Note`,
    description: `Important note to self`,
    createdAt: new Date(`2023-12-18T00:00:00.000Z`).toISOString(),
    updatedAt: new Date(`2023-12-18T00:00:00.000Z`).toISOString(),
    data: {
      text: `Remember to buy groceries. Remember to buy groceries. Again! Remember to buy groceries. Remember to buy groceries. Again!`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.book,
    title: `The Abominable - Dan Simmons`,
    description: `A thrilling tale of high-altitude death and survival set on the snowy summits of Mount Everest, from the bestselling author of The Terror.`,
    createdAt: new Date(`2023-12-16T00:00:00.000Z`).toISOString(),
    updatedAt: new Date(`2023-12-16T00:00:00.000Z`).toISOString(),
    data: {
      title: `The Abominable`,
      author: `Dan Simmons`,
      isbn13: `9780316198837`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.contact,
    title: `Contact Information`,
    description: `Reach out to me anytime`,
    createdAt: new Date(`2023-12-16T00:00:00.000Z`).toISOString(),
    updatedAt: new Date(`2023-12-16T00:00:00.000Z`).toISOString(),
    data: {
      name: `John Doe`,
      phoneNumber: `123-456-7890`,
      email: `john.doe@example.com`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.contact,
    title: `Business Card`,
    description: `Connect with me professionally`,
    createdAt: new Date(`2023-12-15T00:00:00.000Z`).toISOString(),
    updatedAt: new Date(`2023-12-15T00:00:00.000Z`).toISOString(),
    data: {
      name: `Jane Smith`,
      jobTitle: `CEO`,
      company: `XYZ Corp`,
      email: `jane.smith@xyzcorp.com`,
      phoneNumber: `987-654-3210`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.sms,
    title: `Meeting with the God`,
    description: `Access code to the heaven`,
    createdAt: new Date(`2023-12-15T00:00:00.000Z`).toISOString(),
    updatedAt: new Date(`2023-12-15T00:00:00.000Z`).toISOString(),

    data: {
      to: `9876543210`,
      text: `What time is the world ending?`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.link,
    title: `Social Media Profile`,
    description: `Connect with me on social media`,
    createdAt: new Date(`2023-12-15T00:00:00.000Z`).toISOString(),
    updatedAt: new Date(`2023-12-15T00:00:00.000Z`).toISOString(),

    data: {
      url: `https://www.twitter.com/example`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.phone,
    title: `Emergency Contact`,
    description: `In case of emergencies`,
    createdAt: new Date(`2023-11-23T00:00:00.000Z`).toISOString(),
    updatedAt: new Date(`2023-11-23T00:00:00.000Z`).toISOString(),
    data: {
      name: `John Doe`,
      phoneNumber: `123-456-7890`,
      email: `johndoe@example.com`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.email,
    title: `Send Mail to PO`,
    description: `Get Approval for deployment`,
    createdAt: new Date(`2023-11-23T00:00:00.000Z`).toISOString(),
    updatedAt: new Date(`2023-11-23T00:00:00.000Z`).toISOString(),
    data: {
      to: `johndoe@example.com`,
      cc: `johndoe2@example.com`,
      subject: `Emergency Services`,
      body: `Deployment Approval, please`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.text,
    title: `Text Message`,
    description: `Important text`,
    createdAt: new Date(`2023-11-01T00:00:00.000Z`).toISOString(),
    updatedAt: new Date(`2023-11-01T00:00:00.000Z`).toISOString(),
    data: {
      text: `Read this important message!`,
    },
  },
];

export default qrCodeData;
