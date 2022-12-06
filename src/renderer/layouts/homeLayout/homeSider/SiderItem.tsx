import React, {FC} from "react";
import {StyledSiderItem} from "@/layouts/homeLayout/homeSider/style";
import {CheckableTagProps} from "antd/es/tag/CheckableTag";
interface IProps extends CheckableTagProps{
  label?:string
  icon?:React.ReactNode

}
const SiderItem:FC<IProps> = (props) => {
  const {label,icon}=props
  return(
    <StyledSiderItem
      {...props}>
      <div className={'sider-icon'}>{icon}</div>
      <div className={'sider-label'}>{label}</div>
    </StyledSiderItem>
  )
}
export default SiderItem
