import {useModel} from "foca";
import appStore from "@/stores/app.store";
import {useLayoutEffect} from "react";

export const useAppScale = () => {
  const {fontSize} = useModel(appStore,state => ({
    fontSize:state.fontSize
  }))
  useLayoutEffect(()=>{
    if(window.electron?.scaleApp){
      window.electron.scaleApp(fontSize/100)
    }
  },[fontSize])
}
