import {useIsomorphicLayoutEffect} from "ahooks";
import {useModel} from "foca";
import userStore from "@/stores/user.store";
import {useState} from "react";
import {Friend, FriendInfo} from "@/types/user";

export const useContactFriendsDetail = () => {
    const {contactId,friendsRecord} = useModel(userStore,state => ({
        contactId:state.contactId,
        friendsRecord:state.friends,
    }))
    const [friendInfo,setFriendInfo]=useState<null|FriendInfo>(null)
    const [friendRecord,setFriendRecord]=useState<null|Friend>(null)
    useIsomorphicLayoutEffect(()=>{
        setFriendRecord(friendsRecord.find(record=>record.id === contactId)??null)
        setFriendInfo(friendsRecord.find(record=>record.id === contactId)?.friendInfo??null)
        },[contactId,friendsRecord])
    return {
        friendInfo,friendRecord
    }
}