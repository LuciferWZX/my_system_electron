import {defineModel} from "foca";
import {Friend, FriendRequestRecord, ResponseStatusType, User} from "@/types/user";
import {phoneLogin} from "@/services/user";
import {ResponseCode, ResponseResult} from "@/types/ResponseResult";
import {setLocal} from "@/utils/store";
import {AppStorageKey, StorageKey} from "@/types/storageKey";
import {
    getFriendRequests,
    getFriendsList,
    handleFriendRequest,
    modifyFriendRemark,
    searchUsers,
    sendRequest
} from "@/services/friends";

interface IUser {
  user:User|null
    friends:Friend[]
    searchUsers:User[]
    friendsRequests:FriendRequestRecord[],
    contactId:string
}
const initialState:IUser = {
  user:null,
    friends:[],
    searchUsers:[],
    friendsRequests:[],
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
                // const mock = []
                // for (let i=0;i<100;i++){
                //
                //     mock.push(...result.data.map(it=>({...it,id:`${i}`})))
                // }
                this.updateState({friends:result.data})
            }
        },
        /**
         * 修改好友备注
         * @param data
         */
        async modifyFriendRemark(data:{id:string,remark?:string}){
            const result:ResponseResult<Friend> = await modifyFriendRemark(data)
            if(result.code === ResponseCode.success){
                this.updateState({
                    friends:this.state.friends.map(friend=>{
                        if(friend.id === result.data.id){
                            return {
                                ...result.data,
                                friendInfo:friend.friendInfo
                            }
                        }
                        return friend
                    })
                })
            }
            return result
        },
        /**
         * （网络）查找用户
         * @param data
         */
        async searchUsers(data:{query?:string}){
            const result:ResponseResult<User[]> = await searchUsers(data)
            if(result.code === ResponseCode.success){
                this.updateState({searchUsers:result.data})
            }
            return result
        },
        /**
         * 发送好友请求
         * @param data
         */
        async sendRequest(data:{fid:string,senderDesc?:string,senderRemark?:string}){
            const result:ResponseResult<FriendRequestRecord> = await sendRequest(data)

            if(result.code === ResponseCode.success){
                await this.getFriendRequests()
            }
            return result
        },
        /**
         * 获取好友请求列表
         */
        async getFriendRequests(){
            const result:ResponseResult<FriendRequestRecord[]> =await getFriendRequests()
            if(result.code === ResponseCode.success){
                this.updateState({friendsRequests:result.data})
            }
            return result
        },

        /**
         * 处理好友请求
         * @param data
         */
        async handleFriendRequest(data:{
            fRecordId: string;
            fid: string;
            status: ResponseStatusType;
            senderRemark?: string;
        }){
            const response:ResponseResult<any> = await handleFriendRequest(data)
            if(response.code === ResponseCode.success){
                await userStore.getFriendRequests()
                await userStore.getFriendsList({})
            }
            return response
        }
  }
});
export default userStore
