import {useIsomorphicLayoutEffect, useRequest} from "ahooks";
import userStore from "@/stores/user.store";

export const useFriend = (query?:string) => {
  const {runAsync,loading,cancel}=useRequest(userStore.getFriendsList,{
    manual:true
  })
  const {runAsync:getFriendsRecords,loading:getRecordsLoading,cancel:cancelRecord}=useRequest(userStore.getFriendRequests,{
    manual:true
  })
  useIsomorphicLayoutEffect(()=>{
    runAsync({query:query})
    getFriendsRecords()
    return ()=>{
      cancel()
      cancelRecord()
      userStore.updateState({contactId:""})
    }
  },[])
  return {loading:loading||getRecordsLoading}
}