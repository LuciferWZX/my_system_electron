import {ipcRenderer} from 'electron';

export default  {
    getStore:async (key:string)=>{
        return ipcRenderer.invoke('get_store',key)
    },
    setStore:async (key:string,value:any)=>{
        return ipcRenderer.invoke('set_store',key,value)
    },
    updateStore:async (storeKey:string,key:string,newData:any)=>{
        return ipcRenderer.invoke('update_store',storeKey,key,newData)
    },
};
