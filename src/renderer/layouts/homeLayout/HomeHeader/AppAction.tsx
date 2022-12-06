import React, {FC} from "react";
import {Button} from "antd";
import {IconFont, IconType} from "@/components";
import {StyledAppAction} from "@/layouts/homeLayout/HomeHeader/style";

const AppAction:FC = () => {
    const headerAction = (action:"min"|"max"|"close") => {
        if(window.electron?.appAction){
            const {appAction}=window.electron
            appAction(action)
        }

    }
    return(
        <StyledAppAction>
            <Button onClick={()=>headerAction("min")} size={"small"} type={"text"} icon={<IconFont type={IconType.minus}/>} />
            <Button onClick={()=>headerAction("max")} size={"small"} type={"text"} icon={<IconFont type={IconType.maxmize}/>} />
            <Button onClick={()=>headerAction("close")} size={"small"} type={"text"} icon={<IconFont type={IconType.close}/>} />
        </StyledAppAction>
    )
}
export default AppAction