export interface ResponseResult<T> {
  code:number,
  message:string
  data:T
}
export enum ResponseCode {
  success
}
