import {useIsomorphicLayoutEffect} from "ahooks";
import {useModel} from "foca";
import socketStore from "@/stores/socket.store";

export const useContactSocket = () => {
    const socket = useModel(socketStore,state => state.socket)
    useIsomorphicLayoutEffect(()=>{
        if (socket){

        }
    },[])
}