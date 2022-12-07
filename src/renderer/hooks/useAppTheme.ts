import {useModel} from "foca";
import appStore from "@/stores/app.store";
import {useUpdateLayoutEffect} from "ahooks";

export const useAppTheme = () => {
    const {theme,primaryColor} = useModel(appStore,state => ({
      theme:state.theme,
      primaryColor:state.primaryColor
    }))
    useUpdateLayoutEffect(()=>{
        console.log("theme已经改变，变成-->",theme)
    },[theme])

    return [theme,primaryColor]
}
