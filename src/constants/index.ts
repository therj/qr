import pkg from '../../package.json';
import QRCodeTypeEnum from './enums';
import qrCodeSeedData from './qr-code-data';

const app = {
  title: `Mero QR`,
  version: pkg.version,
  tagline: `Personal Data, Private QR`,
  description: `${pkg.description} - Mero QR`,
  descriptionLong: `Mero QR is a QR code generator and scanner app. It is a free app that can be used to generate QR codes for your personal and business needs. You can also scan QR codes using this app.`,
};

export { app, QRCodeTypeEnum, qrCodeSeedData };
