import {RequestMethod} from "umi-request";
import userStore from "@/stores/user.store";

export default (request:RequestMethod<false>)=>{
  request.interceptors.request.use((url, options)=>{
    const token = userStore.state.user?.token ?? ""
    if(token){
      options.headers={
        ...options.headers,
        authorization:`Bearer ${token}`
      }
    }
    return {
      url,
      options
    }
  })
  // request.interceptors.response.use((response) => {
  //   console.log(111,response)
  //   return response.clone().json();
  // });

}
