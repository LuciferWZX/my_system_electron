import React, {FC} from "react";
import {StyledContactSider} from "@/pages/contact/sider/style";
import {Avatar, List, theme} from "antd";
import {useModel} from "foca";
import userStore from "@/stores/user.store";
import classnames from "classnames";
import {MacScrollbar} from "mac-scrollbar";
import SearchHeader from "@/pages/contact/sider/searchHeader";

const ContactSider:FC = () => {
    const {friends,contactId} = useModel(userStore,state => ({
        friends:state.friends,
        contactId:state.contactId
    }))

    const {
        token,
    } = theme.useToken();

    const selectedContactId=(id:string)=>{
        userStore.updateState({contactId:id})
    }
    return(
        <StyledContactSider
            style={{backgroundColor:token.colorBgElevated}}
            $hoverBg={token.controlItemBgHover}
            $activeBg={token.controlItemBgActive}
            width={260}
        >
            <SearchHeader/>
            <MacScrollbar className={'mac-scroll-bar'}>
                <List
                    style={{padding:5}}
                    itemLayout="horizontal"
                    dataSource={friends}
                    renderItem={(item) => {
                        return(
                            <List.Item
                                onClick={()=>selectedContactId(item.id)}
                                className={classnames({
                                    'friends-list':true,
                                    "selected-item":item.id === contactId
                                })}>
                                <List.Item.Meta
                                    avatar={
                                    <Avatar
                                        shape={"square"}
                                        src={item.friendInfo.avatar}
                                    />}
                                    title={item.friendInfo.nickname}
                                />
                            </List.Item>
                        )
                    }}
                />
            </MacScrollbar>
        </StyledContactSider>
    )
}
export default ContactSider
