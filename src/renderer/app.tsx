import "./stores";
import React from "react";
import {FocaProvider} from "foca";
import {history} from "umi";

export const getInitialState=async ()=>{
  if(window.app_db){
    const res = await window.app_db.find("my_db",{
      selector:{
        _id:"123"
      }
    })
    console.log('res:',res)

    const res2 = await window.app_db.update("my_db",{
      age:999
    },{
      selector:{
        _id:"123"
      }
    })
    console.log('res2:',res2)
  }
  console.log("初始化数据")
  // console.log(111,window.electron?.versions)

  return null
}
export const rootContainer=(container:React.ReactNode)=> {
  return React.createElement(FocaProvider, null, container);
}
