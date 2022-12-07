import React, {FC} from "react";
import {StyledBoxContent} from "@/modals/setting/style";
import {Typography} from "antd";
const { Text } = Typography;

interface IProps{
    title?:string
    children?:React.ReactNode
}
const BoxContent:FC<IProps> = (props) => {
    return(
        <StyledBoxContent>
            {props.title && <Text className={'setting-title'}>{props.title}</Text>}
            <div>
                {props.children}
            </div>
        </StyledBoxContent>
    )
}
export default BoxContent