import {ResponseError} from "umi-request";
import {message} from "antd";

const errorHandle=(error:ResponseError)=>{
  if(error.data){
    if(typeof error.data === "string"){
      message.error({content:error.data,key:'error'})
      return;
    }
    if (error.data?.message){
      message.error({content:error.data.message,key:'error'})
    }
    return error.data
  }
  return error.response
}
export default errorHandle
