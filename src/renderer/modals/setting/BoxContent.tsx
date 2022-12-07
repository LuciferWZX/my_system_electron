import React, {FC} from "react";
import {StyledBoxContent} from "@/modals/setting/style";
import {Typography} from "antd";
import styled from "styled-components";
const { Text } = Typography;

interface IProps{
    title?:string
    children?:React.ReactNode
}
const BoxContent:FC<IProps> = (props) => {
    return(
        <StyledBoxContent>
            {props.title && <Text className={'setting-title'}>{props.title}</Text>}
            <StyledContent>
                {props.children}
            </StyledContent>
        </StyledBoxContent>
    )
}
const StyledContent = styled.div`
  margin-top: 20px;
  height: 400px;
`
export default BoxContent
