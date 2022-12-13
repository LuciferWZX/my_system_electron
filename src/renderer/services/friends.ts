import request from "@/utils/request";

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
export const modifyFriendRemark = async (data:{id:string,remark?:string})=>{
    const url="friend/modify_friend_remark"
    return request(url,{
        method:'post',
        data:data
    })
}
