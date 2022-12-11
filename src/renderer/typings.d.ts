import 'umi/typings';

declare global {
  interface Window {
    "electron"?: {
      versions:ElectronVersion
      appAction:(channel:"min"|"max"|"close")=>void
      platform:NodeJS.Platform
      scaleApp:(factor:number)=>void
    },
    "app_store"?:{
        getStore:(key:string)=>Promise<any>
        setStore:(key:string,value:any)=>Promise<any>
        updateStore:(storeKey:string,key:string,newData:any)=>Promise<any>
    }
  }
}
