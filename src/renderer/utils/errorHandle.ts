import {ResponseError} from "umi-request";
import {message} from "antd";

const errorHandle=(error:ResponseError)=>{
  console.log(111,error)
  if(typeof error.data === "string"){
    const response = error.response as Response
    message.error({content:response.statusText,key:'error'})
    return {
      code:response.status,
      message:response.statusText,
      data:null
    }
  }
  if(error.response){
    if (error.data?.message){
      message.error({content:error.data.message,key:'error'})
    }
    return error.data
  }

}
export default errorHandle
