import request from "@/utils/request";

export const phoneLogin = async (data:{
  phone:string,
  pin:string
}) => {
  const url="user/login_with_phone"
  return request(url,{
    method:'post',
    data:data
  })
}
