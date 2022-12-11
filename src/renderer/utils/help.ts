import jwtDecode from 'jwt-decode'
import {TokenType} from "@/types/user";
export const parseToken=(token:string):TokenType=>{
    return jwtDecode(token)
}
export const getUserId=(token:string)=>{
    return parseToken(token).sub
}