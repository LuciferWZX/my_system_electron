export interface User {
  id:string
  username:string
  nickname:string
  createdDate: string,
  updatedDate: string,
  email:string
  phone:string
  avatar:string
  token:string
  banned:boolean
  sex:0|1
}
export interface TokenType{
  exp: number
  iat: number
  sub: string
  username: string
}