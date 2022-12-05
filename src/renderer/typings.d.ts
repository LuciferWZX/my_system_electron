import 'umi/typings';

declare global {
  interface Window {
    "electron"?: {
      versions:ElectronVersion
    },
  }
}
