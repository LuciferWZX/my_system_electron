import {StorageKey} from "@/types/storageKey";
import {store} from 'foca'
import {removeLocal} from "@/utils/store";

/**
 * 退出登录，清空所有用户相关的数据
 */
export const clearUserInfo = async () => {
  //删除localStorage
  removeLocal(StorageKey.token)
  //重置用户的store数据
  store.refresh()

}