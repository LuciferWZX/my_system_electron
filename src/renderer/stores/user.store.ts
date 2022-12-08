import {defineModel} from "foca";
import {User} from "@/types/user";
import {phoneLogin} from "@/services/user";
import {ResponseCode, ResponseResult} from "@/types/ResponseResult";
import {setLocal} from "@/utils/store";
import {StorageKey} from "@/types/storageKey";
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
        const result = await phoneLogin({phone:params.username,pin:params.password})
        if(result.code === ResponseCode.success){
          setLocal({
            [StorageKey.token]:result.data.token
          })
          await this.initUserData(result.data)
        }
        return result
      },
      ///当用户登录的时候获取用户数据
      async initUserData(user:User){
        console.log("开始获取用户信息")
        this.updateState({
          user
        })
        console.log("获取用户信息完成")
      }
  }
});
export default userStore
