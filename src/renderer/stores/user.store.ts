import {defineModel} from "foca";
import {User} from "@/types/user";
import {phoneLogin} from "@/services/user";
import {ResponseCode, ResponseResult} from "@/types/ResponseResult";
import {setLocal} from "@/utils/store";
import {AppStorageKey, StorageKey} from "@/types/storageKey";
interface IUser {
  user:User|null
}
const initialState:IUser = {
  user:null
}
const userStore = defineModel('user', {
    initialState,
    reducers: {
        updateState(state, newState: Partial<IUser>) {
            Object.assign(state, newState);
        },
        clear() {
            return this.initialState;
        },
    },
  methods:{
      async login(params:{username:string,password:string}): Promise<ResponseResult<User>>{
          console.log(22222,params)
        const result = await phoneLogin({phone:params.username,pin:params.password})
          console.log(111111,result)
        if(result.code === ResponseCode.success){
          setLocal({
            [StorageKey.token]:result.data.token
          })
          await this.setUserInfo(result.data,{updateDB:true})
        }
        return result
      },
      ///当用户登录的时候更新用户数据
      async setUserInfo(user:User,config?:{
          updateDB?:boolean
      }){
        console.log("开始获取用户信息")
          //更新store数据
        this.updateState({
          user
        })
          //更新到数据库
          if(config?.updateDB && window.app_store){
              const {updateStore}=window.app_store
              await updateStore(AppStorageKey.users,user.id,user)
          }
        console.log("获取用户信息完成")
      }
  }
});
export default userStore
