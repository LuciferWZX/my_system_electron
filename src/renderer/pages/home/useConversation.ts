import {useLocation} from "umi";
import {useIsomorphicLayoutEffect} from "ahooks";
import {useModel} from "foca";
import homeStore from "@/stores/home.store";
import {getLocal} from "@/utils/store";
import {StorageKey} from "@/types/storageKey";
import {Conversation, FriendInfo} from "@/types/user";

export const useConversation = () => {
    let location = useLocation();
    const conversationList = useModel(homeStore,state => state.conversationList)
    console.log(22222,location)
    useIsomorphicLayoutEffect(()=>{

        initHome().then()
    },[])
    const initHome=async ()=>{
        const conversations:Conversation[] = getLocal(StorageKey.conversations)??[]
        //@todo 调接口去查看这个数组的好友全部信息

        if((location.state as {currentId?:string})?.currentId){
            homeStore.updateState({
                conversationList:conversations,
                currentId:(location.state as {currentId:string}).currentId
            })
        }else{
            homeStore.updateState({conversationList:conversations})
        }

    }
}