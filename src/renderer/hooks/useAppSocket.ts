import {useIsomorphicLayoutEffect} from "ahooks";
import {io} from "socket.io-client";
import {SOCKET_URL} from "@/utils/constant";
import userStore from "@/stores/user.store";
import socketStore from "@/stores/socket.store";

export const useAppSocket = () => {
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
            socket.on(`${user.id}`,(data:any)=>{
                console.log("我收到的消息:",JSON.parse(data))
            })
            socketStore.updateState({socket:socket})
        }

        return ()=>{
            const _socket = socketStore.state.socket
            if(_socket){
                if (_socket.connected){
                    _socket.disconnect()
                    _socket.close()
                    socketStore.updateState({socket:null})
                }
            }
        }
    },[])
}