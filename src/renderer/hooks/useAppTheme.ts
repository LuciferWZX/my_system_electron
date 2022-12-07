import {useModel} from "foca";
import appStore from "@/stores/app.store";
import {useUpdateLayoutEffect} from "ahooks";

export const useAppTheme = () => {
    const theme = useModel(appStore,state => state.theme)
    useUpdateLayoutEffect(()=>{
        console.log("theme已经改变，变成-->",theme)
    },[theme])

    return [theme]
}