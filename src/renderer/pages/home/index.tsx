import React, {FC} from "react";
import {Button, message} from "antd";
import {StyledHome} from "@/pages/home/style";
import {useLocation} from "umi";
import {useConversation} from "@/pages/home/useConversation";




const HomePage:FC = () => {
    useConversation()

    return(
        <StyledHome>
            <Button onClick={()=> {message.success("xxx",0)}}>跳转</Button>
            HomePage
        </StyledHome>
    )
}
export default HomePage
