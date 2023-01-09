import {useLocation} from "umi";
import {useIsomorphicLayoutEffect} from "ahooks";
import {FriendInfo} from "@/types/user";
import {useModel} from "foca";
import homeStore from "@/stores/home.store";

export const useConversation = () => {
    let location = useLocation();
    const conversationList = useModel(homeStore,state => state.conversationList)
    useIsomorphicLayoutEffect(()=>{

        initHome().then()
    },[])
    const initHome=async ()=>{
        if (window.app_store){
            const {getStore}=window.app_store
            const cacheConversations:{[name:string]:FriendInfo} =await getStore("conversations")
            let cacheList = []
            for (let key of cacheConversations){

            }
            for (let i=0;i<conversationList.){}
        }
        console.log(111,location)
    }
}