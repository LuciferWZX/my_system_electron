import React, {FC} from "react";
import {Button} from "antd";
import {IconFont, IconType} from "@/components";
import {StyledAppAction} from "@/layouts/homeLayout/homeHeader/style";

interface IProps{
    className?:string
}
const AppAction:FC<IProps> = (props) => {
    const headerAction = (action:"min"|"max"|"close") => {
        if(window.electron?.appAction){
            const {appAction}=window.electron
            appAction(action)
        }

    }
    return(
        <StyledAppAction className={props.className}>
            <Button onClick={()=>headerAction("min")} size={"small"} type={"text"} icon={<IconFont type={IconType.minus}/>} />
            <Button onClick={()=>headerAction("max")} size={"small"} type={"text"} icon={<IconFont type={IconType.maxmize}/>} />
            <Button onClick={()=>headerAction("close")} size={"small"} type={"text"} icon={<IconFont type={IconType.close}/>} />
        </StyledAppAction>
    )
}
export default AppAction
