import 'umi/typings';

declare global {
  interface Window {
    "electron"?: {
      versions:ElectronVersion
      appAction:(channel:"min"|"max"|"close")=>void
        sendMsgToMain:(channel:string)=>void,
      platform:NodeJS.Platform
      scaleApp:(factor:number)=>void
        ///监听发送的消息
        addIPCListener:(channel:string,listener:(event: any, ...args: any[])=>void)=>void,
        ///移除所有的监听器
        removeIPCListener:(channel:string)=>void,
    },
    "app_store"?:{
        getStore:(key:string)=>Promise<any>
        setStore:(key:string,value:any)=>Promise<any>
        updateStore:(storeKey:string,key:string,newData:any)=>Promise<any>
    }
  }
}
