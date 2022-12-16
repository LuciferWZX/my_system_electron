import React, {FC} from "react";
import {Button, message} from "antd";
import {StyledHome} from "@/pages/home/style";




const HomePage:FC = () => {
    return(
        <StyledHome>
            <Button onClick={()=> {message.success("xxx",0)}}>跳转</Button>
            HomePage
        </StyledHome>
    )
}
export default HomePage
