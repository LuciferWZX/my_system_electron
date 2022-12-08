import {useModel} from "foca";
import userStore from "@/stores/user.store";
import React from "react";
import {Navigate} from "umi";

const withAuth = (Component:any)=>()=> {
  const token = useModel(userStore,state => state.user?.token)
  if(token){
    return <Component />
  }
  return <Navigate to="/entrance/login" />
}
export default withAuth
