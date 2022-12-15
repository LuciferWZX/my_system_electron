import request from "@/utils/request";
import {ResponseStatusType} from "@/types/user";

/**
 * 查询好友列表
 * @param data
 */
export const getFriendsList = async (data:{query?:string})=>{
    const url="friend/get_friends_list"
    return request(url,{
        method:'post',
        data:data
    })
}
/**
 * 修改好友备注
 * @param data
 */
export const modifyFriendRemark = async (data:{id:string,remark?:string})=>{
    const url="friend/modify_friend_remark"
    return request(url,{
        method:'post',
        data:data
    })
}

/**
 * 发送好友请求
 * @param data
 */
export const sendRequest = async (data:{fid:string,senderDesc?:string,senderRemark?:string})=>{
    const url="friend/send_request"
    return request(url,{
        method:'post',
        data:data
    })
}
/**
 * 查询用户
 * @param data
 */
export const searchUsers = async (data:{query?:string})=>{
    const url="friend/search_users"
    return request(url,{
        method:'post',
        data:data
    })
}
/**
 * 查询好友请求列表
 */
export const getFriendRequests = async ()=>{
    const url="friend/get_friend_requests"
    return request(url,{
        method:'get',
    })
}
/**
 * 处理好友请求
 * @param data
 */
export const handleFriendRequest = async (data:{
    fRecordId: string;
    fid: string;
    status: ResponseStatusType;
    senderRemark?: string;
})=>{
    const url="friend/handle_friend_request"
    console.log("senderRemark:",data.senderRemark)
    return request(url,{
        method:'post',
        data:data
    })
}


