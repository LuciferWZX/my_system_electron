import React, {FC} from "react";
import {StyledHomeContent, StyledMainContent} from "@/layouts/homeLayout/style";
import {theme} from "antd";
import HomeHeader from "@/layouts/homeLayout/HomeHeader";
interface IProps{
    children?:React.ReactNode
}
const HomeContent:FC<IProps> = (props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return(
        <StyledHomeContent>
            <HomeHeader/>
            <StyledMainContent
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    backgroundColor:colorBgContainer
                }}>
                {props.children}
            </StyledMainContent>
        </StyledHomeContent>
    )
}
export default HomeContent