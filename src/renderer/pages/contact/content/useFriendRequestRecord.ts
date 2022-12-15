import {useModel} from "foca";
import userStore from "@/stores/user.store";
import {useIsomorphicLayoutEffect} from "ahooks";
import {useState} from "react";
import { FriendRequestRecord} from "@/types/user";

export const useFriendRequestRecord = () => {
    const {contactId,friendsRequests} = useModel(userStore,state => ({
        contactId:state.contactId,
        friendsRequests:state.friendsRequests,
    }))
    const [friendRInfo,setFriendRInfo]=useState<null| {
        avatar:string
        id:string
        nickname:string
        username:string
    }>(null)
    const [requestRecord,setRequestRecord]=useState<null|FriendRequestRecord>(null)
    useIsomorphicLayoutEffect(()=>{
        setRequestRecord(friendsRequests.find(record=>record.id === contactId)??null)
        setFriendRInfo(friendsRequests.find(record=>record.id === contactId)?.friendInfo??null)
    },[contactId,friendsRequests])

    return {
        friendRInfo,
        requestRecord
    }
}