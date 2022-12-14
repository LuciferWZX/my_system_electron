import {useIsomorphicLayoutEffect, useRequest} from "ahooks";
import userStore from "@/stores/user.store";

export const useSearchUsers = () => {
    useIsomorphicLayoutEffect(()=>{
        return ()=>{
            //@todo 清空搜索的用户列表
            userStore.updateState({searchUsers:[]})
        }
    },[])
  return useRequest(userStore.searchUsers,{
      manual:true,
      debounceWait:300
  })
}