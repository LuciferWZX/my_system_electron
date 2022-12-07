import React, {FC} from "react";
import {StyledMenuItem} from "@/components/menu/style";
import {Space,theme} from "antd";

const { useToken } = theme;

interface IProps{
    icon?:React.ReactNode
    label?:React.ReactNode
    onClick?:React.MouseEventHandler<HTMLLIElement>|undefined
    checked:boolean
}
const MenuItem:FC<IProps> = (props) => {
    const { token } = useToken();
    console.log(111,token.colorBgElevated)
    return(
        <StyledMenuItem
            checked={props.checked}
            onClick={props.onClick}
            selectedColor={token.colorPrimary}
            selectedBgColor={token.colorPrimaryBg}
        >
            <Space>
                {props.icon && <div className={'menu-icon'}>{props.icon}</div>}
                <div className={'menu-label'}>{props.label}</div>
            </Space>
        </StyledMenuItem>
    )
}
export default MenuItem