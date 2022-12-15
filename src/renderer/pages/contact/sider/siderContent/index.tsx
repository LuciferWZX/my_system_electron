import React, {FC} from "react";
import {StyledSiderContent} from "@/pages/contact/sider/siderContent/style";
import {Avatar, Collapse, List, Space, theme, Typography} from "antd";
import classnames from "classnames";
import {MacScrollbar} from "mac-scrollbar";
import {useModel} from "foca";
import userStore from "@/stores/user.store";
import {IconFont, IconType} from "@/components";
import {FriendRequestRecord, ResponseStatusType} from "@/types/user";

const { Panel } = Collapse;
const {Text}=Typography
const SiderContent:FC = () => {
    const {friends,contactId,friendsRequests} = useModel(userStore,state => ({
        friends:state.friends,
        friendsRequests:state.friendsRequests,
        contactId:state.contactId
    }))
    const handleRequestCount = friendsRequests.filter(fq=>fq.responseStatus === ResponseStatusType.Handling).length
    const {
        token,
    } = theme.useToken();
    const selectedContactId=(id:string)=>{
        userStore.updateState({contactId:id})
    }
    const formatRecordMsg=(record:FriendRequestRecord)=>{
        const {senderId,friendInfo,receiverId,responseStatus}=record
        let statusMsg = "待处理"
        if(friendInfo.id === receiverId){
            switch (responseStatus) {
                case ResponseStatusType.Accepted:{
                    statusMsg = "对方已接受"
                    break
                }
                case ResponseStatusType.Refused:{
                    statusMsg = "对方已拒绝"
                    break
                }
                case ResponseStatusType.Handling:{
                    statusMsg = "等待对方处理"
                    break
                }
            }
        }
        if(friendInfo.id === senderId){
            switch (responseStatus) {
                case ResponseStatusType.Accepted:{
                    statusMsg = "已接受"
                    break
                }
                case ResponseStatusType.Refused:{
                    statusMsg = "已拒绝"
                    break
                }
                case ResponseStatusType.Handling:{
                    statusMsg = "等待处理"
                    break
                }
            }
        }
        return {
            msg:statusMsg
        }
    }
    return(
        <StyledSiderContent
            $hoverBg={token.controlItemBgHover}
            $activeBg={token.controlItemBgActive}>
            <MacScrollbar className={'mac-scroll-bar'}>
                <Collapse
                    className={'custom-collapse'}>
                    <Panel
                        showArrow={false}
                        className={'custom-panel'}
                        header={<Space><IconFont type={IconType.addGroups}/><Text>新朋友</Text></Space>}
                        extra={<Text strong={true}>{handleRequestCount}</Text>}
                        key="friends-request">
                        <List
                            style={{padding:5}}
                            itemLayout="horizontal"
                            dataSource={friendsRequests}
                            renderItem={(item) => {
                                const {msg} = formatRecordMsg(item)
                                const {friendInfo}=item

                                return(
                                    <List.Item
                                        onClick={()=>selectedContactId(item.id)}
                                        actions={[<Text style={{fontSize:12}}>{msg}</Text>]}
                                        className={classnames({
                                            'friends-list':true,
                                            "selected-item":item.id === contactId
                                        })}>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar
                                                    shape={"square"}
                                                    src={friendInfo.avatar}
                                                />}
                                            title={friendInfo.nickname}
                                        />
                                    </List.Item>
                                )
                            }}
                        />
                    </Panel>
                    <Panel
                        showArrow={false}
                        className={'custom-panel'}
                        header={<Space><IconFont type={IconType.userFriends}/><Text>好友列表</Text></Space>}
                        extra={<Text strong={true}>{friends.length}</Text>}
                        key="friends-list">
                        <List
                            style={{padding:5}}
                            itemLayout="horizontal"
                            dataSource={friends}
                            renderItem={(item) => {
                                const {senderId,friendInfo,senderRemark,receiverRemark}=item
                                const remark = senderId === friendInfo.id?receiverRemark:senderRemark;
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
                                            title={remark ?? item.friendInfo.nickname}
                                        />
                                    </List.Item>
                                )
                            }}
                        />
                    </Panel>
                </Collapse>

            </MacScrollbar>
        </StyledSiderContent>
    )
}
export default SiderContent