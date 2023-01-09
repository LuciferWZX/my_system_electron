import {ResponseError} from "umi-request";
import {message} from "antd";
import {clearUserInfo} from "@/utils/user";

const errorHandle=async (error:ResponseError)=>{

  if(typeof error.data === "string"){
    const response = error.response as Response

    return {
      code:response.status,
      message:response.statusText,
      data:null
    }
  }
  if(error.response){
    const status = error.response.status
    switch (status) {
      case 401:{
        await clearUserInfo()
      }
    }
    if (error.data?.message){
      //message.error({content:error.data.message,key:'error'})
    }
    return error.data
  }

}
export default errorHandle
