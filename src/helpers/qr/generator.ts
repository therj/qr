import { QRCodeTypeEnum } from '@/constants/enums';
import { faker } from '@faker-js/faker';
import { TQr } from '@/types/qr';
import qrMap from './_generatorMap';

const getQrCodeData = <T extends QRCodeTypeEnum>(
  type?: QRCodeTypeEnum
): T extends undefined ? TQr : ReturnType<(typeof qrMap)[T]> => {
  const availableTypes = Object.values(QRCodeTypeEnum);
  const chosenType = type || faker.helpers.arrayElement(availableTypes);

  return qrMap[chosenType]() as T extends undefined
    ? TQr
    : ReturnType<(typeof qrMap)[T]>;
};

export default getQrCodeData;
