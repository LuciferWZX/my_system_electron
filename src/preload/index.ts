import { contextBridge,ipcRenderer,IpcRendererEvent,webFrame } from 'electron';

const apiKey = 'electron';

const api: any = {
  versions: process.versions,
  platform:process.platform,
  ///放大缩小关闭事件
  appAction:(channel:"min"|"max"|"close",result:(value: any) => any)=>{
    ipcRenderer.invoke(channel).then(result)
  },
  ///监听发送的消息
  addIPCListener:(channel:string,listener:(event: IpcRendererEvent, ...args: any[])=>void)=>{
    ipcRenderer.on(channel,listener);
  },
  ///移除所有的监听器
  removeIPCListener:(channel:string)=>{
    ipcRenderer.removeAllListeners(channel);
  },
  scaleApp:(factor:number)=>{
    webFrame.setZoomFactor(factor)
  }
};

contextBridge.exposeInMainWorld(apiKey, api);

