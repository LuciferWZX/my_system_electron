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
