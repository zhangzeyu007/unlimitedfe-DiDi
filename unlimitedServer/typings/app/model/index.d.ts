// This file is created by egg-ts-helper@1.30.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDevice from '../../../app/model/device';

declare module 'egg' {
  interface IModel {
    Device: ReturnType<typeof ExportDevice>;
  }
}
