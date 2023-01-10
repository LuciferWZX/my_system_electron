import React, {FC} from "react";
import {StyledHome} from "@/pages/home/style";
import {useConversation} from "@/pages/home/useConversation";
import {Panel} from "react-resizable-panels";
import ConversationSider from "@/pages/home/conversationSider";
import ResizeHandle from "@/pages/home/ResizeHandle";




const HomePage:FC = () => {
    useConversation()

    return(
        <StyledHome direction={"horizontal"}>

            <Panel collapsible={true} minSize={30} defaultSize={35}>
                <ConversationSider/>
            </Panel>
            <ResizeHandle className={'handle-bar'}/>
            <Panel minSize={50} style={{backgroundColor:"orange"}}>
                middle
            </Panel>
        </StyledHome>
    )
}
export default HomePage
