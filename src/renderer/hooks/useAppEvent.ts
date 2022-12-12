import {useEffect} from "react";
import {changeCloseWinTypeModal} from "@/utils/action";

export const useAppEvent = () => {

    useEffect(()=>{

        if(window.electron){
            const {addIPCListener}=window.electron
            //@todo 监听event
            addIPCListener("confirmCloseType",()=>changeCloseWinTypeModal(true))
        }


        return ()=>{
            //@todo 卸载event
            if(window.electron){
                const {removeIPCListener}=window.electron
                removeIPCListener("confirmCloseType")
            }
        }
    },[])


}