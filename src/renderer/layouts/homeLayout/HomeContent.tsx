import React, {FC} from "react";
import {StyledHomeContent, StyledMainContent} from "@/layouts/homeLayout/style";
import {theme} from "antd";
import HomeSider from "@/layouts/homeLayout/homeSider";
interface IProps{
    children?:React.ReactNode
}
const HomeContent:FC<IProps> = (props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return(
        <StyledHomeContent>
          <HomeSider/>
            <StyledMainContent
                style={{
                    margin: 4,
                    //backgroundColor:colorBgContainer
                }}
            >
                {props.children}
            </StyledMainContent>
        </StyledHomeContent>
    )
}
export default HomeContent
