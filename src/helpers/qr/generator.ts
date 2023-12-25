import { QRCodeTypeEnum } from '@/constants/enums';
import { faker } from '@faker-js/faker';
import { TQr } from '@/types/qr';
import qrMap from './_generatorMap';

const getQrCodeData = <T extends QRCodeTypeEnum>(
  type?: QRCodeTypeEnum,
  options?: Partial<Omit<TQr, `type`>>
): T extends undefined ? TQr : ReturnType<(typeof qrMap)[T]> => {
  const availableTypes = Object.values(QRCodeTypeEnum);
  const chosenType = type || faker.helpers.arrayElement(availableTypes);

  const qrData = qrMap[chosenType]() as T extends undefined
    ? TQr
    : ReturnType<(typeof qrMap)[T]>;

  if (options?.isBookmark) {
    qrData.isBookmark = true;
  }

  return qrData;
};

export default getQrCodeData;
