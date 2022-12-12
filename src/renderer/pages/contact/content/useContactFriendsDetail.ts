import {useIsomorphicLayoutEffect} from "ahooks";
import {useModel} from "foca";
import userStore from "@/stores/user.store";
import {useState} from "react";
import {FriendInfo} from "@/types/user";

export const useContactFriendsDetail = () => {
    const {contactId,friendsRecord} = useModel(userStore,state => ({
        contactId:state.contactId,
        friendsRecord:state.friends,
    }))
    const [friendInfo,setFriendInfo]=useState<null|FriendInfo>(null)
    useIsomorphicLayoutEffect(()=>{
        setFriendInfo(friendsRecord.find(record=>record.id === contactId)?.friendInfo??null)
        },[contactId])
    return [friendInfo]
}