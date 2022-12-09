import {ipcRenderer} from 'electron';

export default  {
    getAll:async (dbName:string)=>{
        return ipcRenderer.invoke('db_get_all',dbName)
    },
    find:async (dbName:string,config?:{
        selector?:Map<string,any>
        fields?:string[],
        sort?:string[],
        limit?:number
    })=>{
        return ipcRenderer.invoke('db_find',dbName,config)
    },
    update:async (dbName:string,newData:any,config?:{
        selector?:Map<string,any>
        fields?:string[],
        indexFields?:string[],

    })=>{
        return ipcRenderer.invoke('db_update',dbName,newData,config)
    }
};
