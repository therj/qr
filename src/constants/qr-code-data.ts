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
    data: {
      url: `https://www.example.com`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.text,
    title: `Important Note`,
    description: `Important note to self`,
    data: {
      text: `Remember to buy groceries. Remember to buy groceries. Again! Remember to buy groceries. Remember to buy groceries. Again!`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.book,
    title: `The Abominable - Dan Simmons`,
    description: `A thrilling tale of high-altitude death and survival set on the snowy summits of Mount Everest, from the bestselling author of The Terror.`,
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
    data: {
      url: `https://www.twitter.com/example`,
    },
  },
  {
    id: nanoid(),
    type: QRCodeTypeEnum.phone,
    title: `Emergency Contact`,
    description: `In case of emergencies`,
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
    data: {
      text: `Read this important message!`,
    },
  },
];

export default qrCodeData;
