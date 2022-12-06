import React from "react";
import {StyledHomeHeader} from "@/layouts/homeLayout/style";
import {theme} from "antd";
import AppAction from "@/layouts/homeLayout/HomeHeader/AppAction";

const Index = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const HeaderStyle:React.CSSProperties={
        height:44,
        backgroundColor:colorBgContainer,
        lineHeight:"44px",
        padding:'0 10px'
    }
    return(
        <StyledHomeHeader style={HeaderStyle}>
            header
            <AppAction/>
        </StyledHomeHeader>
    )
}

export default Index