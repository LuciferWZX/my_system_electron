import {ipcMain} from 'electron'
import * as ElectronStore from "electron-store";
export default (store:ElectronStore)=>{
    ipcMain.handle("get_store",async (event, key:string)=>{
        return store.get(key)
    })
    ipcMain.handle("set_store",async (event, key:string,value:any)=>{
        return store.set(key,value)
    })
    ipcMain.handle("update_store",
        async (event, storeKey:string,key:string,newData:any)=>{
        store.set(`${storeKey}.${key}`,newData)
    })
}