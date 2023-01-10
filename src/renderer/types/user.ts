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
export enum DeletedRecordStatusType {
  NotDeleted = 0, //两者都没有删除这个记录
  SenderDeleted = 1, //发送者删除这个记录
  ReceiverDeleted = 2, //接收者删除这个记录
  BothDeleted = 3, //都删除这个记录
}
export enum ResponseStatusType {
  Refused = 0, //以拒绝
  Accepted = 1, //已接受
  Handling = 2, //处理中
}
export interface FriendRequestRecord {
  createdDate:string
  deleteStatus:DeletedRecordStatusType
  denialReason:string|null
  id:string
  receiverId:string
  responseStatus:ResponseStatusType
  senderDesc:string|null
  senderId:string
  senderRemark:string|null
  updatedDate:string
  friendInfo:{
    avatar:string
    id:string
    nickname:string
    username:string
  }
}
export interface Conversation{
  id:string
  remark:string
  friendInfo:FriendInfo,
  lastMsgTime:string,
  lastMsg:string,
  unread:number,
  isMute:boolean,
  isOnline:boolean
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
export enum LoginDevice {
  App,
  Web,
  Mobile,
}