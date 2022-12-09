import 'umi/typings';

declare global {
  interface Window {
    "electron"?: {
      versions:ElectronVersion
      appAction:(channel:"min"|"max"|"close")=>void
      platform:NodeJS.Platform
      scaleApp:(factor:number)=>void
    },
    "app_db"?:{
      getAll:(dbName:string)=>Promise<any>
      find:(dbName:string, config?:{
            selector?:any
            fields?:string[],
            sort?:string[],
          limit?:number
          })=>Promise<any>
      update:(dbName:string,newData:any,config?:{
          selector?:any
          fields?:string[],
          indexFields?:string[]

      })=>Promise<any>
    }
  }
}
