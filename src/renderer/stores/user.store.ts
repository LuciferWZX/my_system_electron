import {defineModel} from "foca";
import {Friend, User} from "@/types/user";
import {phoneLogin} from "@/services/user";
import {ResponseCode, ResponseResult} from "@/types/ResponseResult";
import {setLocal} from "@/utils/store";
import {AppStorageKey, StorageKey} from "@/types/storageKey";
import {getFriendsList} from "@/services/friends";

interface IUser {
  user:User|null
    friends:Friend[]
    contactId:string
}
const initialState:IUser = {
  user:null,
    friends:[],
    contactId:""
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
        /**
        * 登录
        * @param params
        */
        async login(params:{username:string,password:string}): Promise<ResponseResult<User>>{

        const result = await phoneLogin({phone:params.username,pin:params.password})
        if(result.code === ResponseCode.success){
          setLocal({
            [StorageKey.token]:result.data.token
          })
          await this.setUserInfo(result.data,{updateDB:true})
        }
        return result
        },
        ///当用户登录的时候更新用户数据
        async setUserInfo(user:User,config?:{ updateDB?:boolean }){
          //更新store数据
        this.updateState({
          user
        })
          //更新到数据库
          if(config?.updateDB && window.app_store){
              const {updateStore}=window.app_store
              await updateStore(AppStorageKey.users,user.id,user)
          }
      },
        /**
         * 查询好友列表
         * @param data
         */
        async getFriendsList(data:{query?:string}){
            const result:ResponseResult<Friend[]> = await getFriendsList(data)
            if(result.code === ResponseCode.success){
                const mock = []
                for (let i=0;i<100;i++){

                    mock.push(...result.data.map(it=>({...it,id:`${i}`})))
                }
                this.updateState({friends:mock})
            }
        }
  }
});
export default userStore
