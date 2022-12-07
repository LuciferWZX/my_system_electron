import "./stores";
import React from "react";
import {FocaProvider} from "foca";

export const getInitialState=async ()=>{
  console.log("初始化数据")
  // console.log(111,window.electron?.versions)
  return null
}
export const rootContainer=(container:React.ReactNode)=> {
  return React.createElement(FocaProvider, null, container);
}
