export enum QRCodeTypeEnum {
  book = `Book`,
  contact = `Contact`,
  email = `Email`,
  link = `Link`,
  phone = `Phone`,
  sms = `Sms`,
  text = `Text`,
  wifi = `Wifi`,
}

export enum NetworkTypeEnum {
  open = `open`,
  wep = `wep`,
  wpa_wpa2 = `wpa/wpa2`,
}

export const QRGroup = [
  {
    name: `Personal`,
    items: [
      QRCodeTypeEnum.link,
      QRCodeTypeEnum.email,
      QRCodeTypeEnum.phone,
      QRCodeTypeEnum.sms,
      QRCodeTypeEnum.contact,
    ],
  },
  {
    name: `Utilities`,
    items: [QRCodeTypeEnum.text, QRCodeTypeEnum.wifi, QRCodeTypeEnum.book],
  },
];
