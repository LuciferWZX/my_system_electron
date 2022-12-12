import {useIsomorphicLayoutEffect, useRequest} from "ahooks";
import userStore from "@/stores/user.store";

export const useFriend = (query?:string) => {
  const {runAsync,loading,cancel}=useRequest(userStore.getFriendsList,{
    manual:true
  })
  useIsomorphicLayoutEffect(()=>{
    runAsync({query:query})
    return ()=>{
      cancel()
      userStore.updateState({contactId:""})
    }
  },[])
  return {loading:loading}
}