import React, {FC} from "react";
import {Avatar, Button, List, Tag, Typography} from "antd";
import styled from "styled-components";
import {useModel} from "foca";
import userStore from "@/stores/user.store";
import {IconFont, IconType, MacScrollbar} from "@/components";
import UserDetailModal from "@/modals/addFriends/userDetail";
import {User} from "@/types/user";
import modalStore from "@/stores/modal.store";

const {Text}=Typography
interface IProps{
    loading?:boolean
}
const SearchUserList:FC<IProps> = (props) => {
    const {userList,friends}=useModel(userStore,state => ({
        userList:state.searchUsers,
        friends:state.friends,
    }))
    const handleAdd=(user:User)=>{
        modalStore.updateState({detailUser:user,userDetailVisible:true})
    }
    return(
        <StyledUserList>
            <List
                size={"small"}
                itemLayout="horizontal"
                dataSource={userList}
                loading={props.loading}
                renderItem={(user) => {
                    let statusNode = <Button onClick={()=>handleAdd(user)} type={"text"}>添加</Button>
                    const friend =friends.find(record=>record.friendInfo.id===user.id)
                    if(friend){
                        statusNode = (
                            <Tag icon={<IconFont type={IconType.success} />} color="success">
                                已添加
                            </Tag>
                        )
                    }
                    return(
                        <List.Item
                            actions={[
                                statusNode
                            ]}>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        shape={"square"}
                                        size={44}
                                        src={user.avatar} />}
                                title={<Text>{user.nickname}</Text>}
                                description={<Text type={"secondary"}>{user.username}</Text>}
                            />
                        </List.Item>
                    )
                }}
            />
            <UserDetailModal/>
        </StyledUserList>
    )
}
export default SearchUserList


const StyledUserList = styled(MacScrollbar)`
    flex: 1;
    overflow: auto;
  display: flex;
`