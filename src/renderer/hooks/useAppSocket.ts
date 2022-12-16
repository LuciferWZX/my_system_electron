import {useIsomorphicLayoutEffect} from "ahooks";
import {io} from "socket.io-client";
import {LOGIN_DEVICE, SOCKET_URL} from "@/utils/constant";
import userStore from "@/stores/user.store";
import socketStore from "@/stores/socket.store";
import {useModel} from "foca";
import {DataType, SocketDataType} from "@/types/socketDataType";
import {clearUserInfo} from "@/utils/user";

export const useAppSocket = (forceLogin:()=>void) => {
    useIsomorphicLayoutEffect (()=>{
        const user = userStore.state.user
        if(user){
            const socket = io(SOCKET_URL,{
                path:'/socket',
                transports:["websocket"],
                autoConnect:true,
                auth:{
                    token:userStore.state.user?.token
                }
            })
            socket.on("connect",()=>{
                console.log(`%c已连接:${socket.id}`,'background: #546de5; color: #bada55;border-radius:10px;padding:10px')
            })
            socket.on("disconnect",(d)=>{
                console.log(`%c已断开连接:${d}`,'background: #596275; color: #bada55;border-radius:10px;padding:10px')
            })
            socket.on("connect_error",()=>{
                console.log(`%c连接出错:`,'background: #596275; color: red;border-radius:10px;padding:10px')
            })
            //监听发送给自己的消息
            socket.on(`${user.id}`,async (data:string)=>{
                console.log("接收到数据",data)
                try {
                    const {type,data:remoteData}=JSON.parse(data) as SocketDataType
                    switch (type) {
                        case DataType.updateFriendRecord:{
                            //提示更新好友请求列表
                            await userStore.getFriendRequests()
                            await userStore.getFriendsList({})
                            break
                        }
                        case DataType.forceLogout:{
                            if (remoteData.type===LOGIN_DEVICE){
                                await clearUserInfo()
                                forceLogin?.()
                            }

                            break
                        }

                    }
                }catch (e) {
                    console.log("socket传过来的data解析失败:",data)
                    throw e
                }
                console.log("我收到的消息:",JSON.parse(data))
            })
            socket.on(`message`,(data:any)=>{
                console.log("我收到的消息:",JSON.parse(data))
                socket.emit(`name`,"xxxx")
            })
            socket.on(`name`,(data:any)=>{

                console.log(`name`,data)
            })
            socketStore.updateState({socket:socket})
        }

        return ()=>{
            socketStore.clear()
        }
    },[])
}