import {Conversation, FriendInfo} from "@/types/user";
import {getLocal, setLocal} from "@/utils/store";
import {StorageKey} from "@/types/storageKey";

export const updateConversations=async (
    conversation:Conversation,
    config?:{
        //需要替换的id
        updateId?:string
        //是否插入指定位置
        position?:'top'|number,
    }
)=>{
    let conversations:Conversation[] = getLocal(StorageKey.conversations)??[]
    if (config?.updateId){
        //@todo 查看之前的数组是否有这条数据，没有的话则插入新数据
        if (conversations.find(friend=>friend.id===conversation.id)){
            conversations = conversations.map(friend=>{
                if (friend.id === config.updateId){
                    return conversation
                }
                return  friend
            })
        }else{
            conversations = conversations.concat(conversation)
        }
    }else{
        if (config?.position){
            switch (config.position) {
                case "top":{
                    conversations = [conversation].concat(conversations)
                    break
                }
                default:{
                    const arrayLength = conversations.length
                    const insertIndex =arrayLength>config.position?config.position:arrayLength
                    conversations.splice(0,insertIndex,conversation)
                    break
                }

            }
        }else{
            conversations = conversations.concat(conversation)
        }
    }

    setLocal({[StorageKey.conversations]:conversations})
}