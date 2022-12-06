import { contextBridge,ipcRenderer,IpcRendererEvent } from 'electron';

const apiKey = 'electron';

const api: any = {
  versions: process.versions,
  ///放大缩小关闭事件
  appAction:(channel:"min"|"max"|"close",result:(value: any) => any)=>{
    ipcRenderer.invoke(channel).then(result)
  },
  ///监听发送的消息
  addIPCListener:(
      channel:string,
      listener:(event: IpcRendererEvent, ...args: any[])=>void
  )=>{
    ipcRenderer.on(channel,listener);
  },
  ///移除所有的监听器
  removeIPCListener:(channel:string)=>{
    ipcRenderer.removeAllListeners(channel);
  }
};

contextBridge.exposeInMainWorld(apiKey, api);

