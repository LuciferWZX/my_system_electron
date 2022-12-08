import {StorageKey} from "@/types/storageKey";
import store from 'storejs'
///以对象的形式{token:"xxxx",isOk:true}可批量保存
export const setLocal=(data:any)=>{
  store(data)
}
export const getLocal=(key:StorageKey)=>{
  return store(key)
}
