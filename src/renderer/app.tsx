import "./stores";
import React from "react";
import {FocaProvider} from "foca";
import {getLocal} from "@/utils/store";
import {AppStorageKey, StorageKey} from "@/types/storageKey";
import {User} from "@/types/user";
import userStore from "@/stores/user.store";
import {LocalSetting} from "@/types/localSetting";
import appStore from "@/stores/app.store";
import {ENV} from "@/utils/constant";
import {getUserId, parseToken} from "@/utils/help";

export const getInitialState=async ()=>{
  console.log("开始初始化数据")
  console.log(ENV)
  await initLocalSetting()
  await initUserInfo()
  console.log("初始化数据完成")
  return null
}
export const rootContainer=(container:React.ReactNode)=> {
  return React.createElement(FocaProvider, null, container);
}
const initUserInfo = async () => {
  const token:string|undefined = getLocal(StorageKey.token);
  if(token){
    const id = getUserId(token)
    if(window.app_store){
      const {getStore}=window.app_store
      const users: { [name:string]:User|undefined }|undefined = await getStore(AppStorageKey.users)
      if (users){
        const cacheUser = users[id]
        if (cacheUser){
          await userStore.setUserInfo(cacheUser)
        }
      }
    }
  }
}
const initLocalSetting = async ()=>{
  const setting:LocalSetting|undefined = getLocal(StorageKey.localSetting)
  if(setting){
    appStore.updateState({
      theme:setting.theme,
      primaryColor:setting.primaryColor,
      fontSize:setting.fontSize,
    })
  }
}
