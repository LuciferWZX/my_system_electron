import React, {FC} from "react";
import {StyledSider} from "@/pages/home/conversationSider/style";
import {Avatar, List, Typography} from 'antd'
import {useModel} from "foca";
import homeStore from "@/stores/home.store";
import ConversationItem from "@/pages/home/conversationSider/ConversationItem";
const {Text}=Typography
const ConversationSider:FC = () => {
    const {conversationList,currentId} = useModel(homeStore,state => ({
        conversationList:state.conversationList,
        currentId:state.currentId,
    }))
    console.log(111,conversationList)
    console.log(222,currentId)
    return(
        <StyledSider>
            <List
                itemLayout="horizontal"
                dataSource={conversationList}
                renderItem={(item) => (
                    <ConversationItem item={item} />
                )}
            />
        </StyledSider>
    )
}
export default ConversationSider