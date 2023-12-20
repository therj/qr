import * as R from 'ramda';
import { QRCodeTypeEnum } from '@/constants';
import { IBaseQr, TPhone, TQr, TText, TWifi } from '@/types/card';
import { nanoid } from 'nanoid';
import { faker } from '@faker-js/faker';

const getQrBaseData = (): Omit<IBaseQr, `type`> => {
  return {
    id: nanoid(),
    title: faker.lorem.words({ min: 2, max: 4 }),
    description: faker.lorem.sentence({ min: 2, max: 7 }),
    isBookmark: faker.datatype.boolean({ probability: 0.15 }),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

const generateRandomWifiQrCodeData = (): TWifi => {
  const baseData = getQrBaseData();
  const wifiData: TWifi = {
    ...baseData,
    type: QRCodeTypeEnum.wifi,
    data: {
      networkType: `wpa/wpa2`,
      name: faker.company.name(),
      password: `12345678`,
    },
  };

  return wifiData;
};
const generateRandomTextQrCodeData = (): TText => {
  const baseData = getQrBaseData();
  const textData: TText = {
    ...baseData,
    type: QRCodeTypeEnum.text,
    data: {
      text: faker.lorem.sentence({ min: 2, max: 7 }),
    },
  };

  return textData;
};

const generateRandomPhoneQrCodeData = (): TPhone => {
  const baseData = getQrBaseData();
  const phoneData: TPhone = {
    ...baseData,
    type: QRCodeTypeEnum.phone,
    data: {
      phoneNumber: faker.phone.number(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    },
  };

  if (faker.datatype.boolean(0.8)) {
    phoneData.data = R.omit([`name`], phoneData.data);
  }
  if (faker.datatype.boolean()) {
    phoneData.data = R.omit([`email`], phoneData.data);
  }

  return phoneData;
};

const getQrCodeData = (type?: QRCodeTypeEnum): TQr => {
  // const availableTypes = Object.values(QRCodeTypeEnum);

  const availableTypes = [
    QRCodeTypeEnum.text,
    QRCodeTypeEnum.wifi,
    QRCodeTypeEnum.phone,
  ];
  const chosenType = type || faker.helpers.arrayElement(availableTypes);

  switch (chosenType) {
    case QRCodeTypeEnum.text:
      return generateRandomTextQrCodeData();
    case QRCodeTypeEnum.phone:
      return generateRandomPhoneQrCodeData();
    default:
      return generateRandomWifiQrCodeData();
  }
};

export default getQrCodeData;
