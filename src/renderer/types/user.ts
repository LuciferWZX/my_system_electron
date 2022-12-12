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
export interface Friend{
  id: string,
  fRecordId: string,
  senderId: string,
  senderRemark: string|null,
  receiverId:string,
  receiverRemark: null|string,
  createdDate: string,
  updatedDate: string,
  deletedId: null|string,
  friendInfo: FriendInfo
}
export interface FriendInfo{
  id: string,
  avatar: string,
  email:string,
  phone: string,
  nickname: string,
  username: string,
  createdDate: string,
  updatedDate:string,
  authority: number,
  sex: 1|2,
  banned: boolean
}