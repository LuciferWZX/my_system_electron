import "./stores";
import React from "react";
import {FocaProvider} from "foca";
import {getLocal} from "@/utils/store";
import {StorageKey} from "@/types/storageKey";
import {User} from "@/types/user";
import userStore from "@/stores/user.store";
import {LocalSetting} from "@/types/localSetting";
import appStore from "@/stores/app.store";

export const getInitialState=async ()=>{
  console.log("开始初始化数据")
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
    if(window.app_db){
      const {find}=window.app_db
      const dbUsers:User[] = await find("users",{
        selector:{
          token:token
        },
        limit:1
      })
      if(dbUsers.length>0){
        const cacheUser = dbUsers[0]
        await userStore.setUserInfo(cacheUser)
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
