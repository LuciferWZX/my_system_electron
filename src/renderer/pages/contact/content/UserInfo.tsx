import React, {FC, useState} from "react";
import {StyledInfoBox} from "@/pages/contact/content/style";
import {Avatar, Button, Descriptions, Divider, Space, Spin, Typography} from "antd";
import {Conversation, Friend, FriendInfo} from "@/types/user";
import {history} from "umi";
import {useBoolean, useIsomorphicLayoutEffect, useRequest} from "ahooks";
import userStore from "@/stores/user.store";
import {setLocal} from "@/utils/store";
import {StorageKey} from "@/types/storageKey";
import {updateConversations} from "@/utils/conversations";
import dayjs from "dayjs";



const { Text, Paragraph } = Typography;
interface IProps{
    friend:Friend
    friendInfo:FriendInfo
}
const UserInfo:FC<IProps> = (props) => {
    const {friend,friendInfo}=props
    const [remark,setRemark]=useState<string|null>(null)

    useIsomorphicLayoutEffect(()=>{
        setRemark(renderRemark())
    },[friend])
    const renderRemark=()=>{
        if (friend.receiverId === friendInfo.id){
            //说明对方是接收者并且他是同意了我的请求
            return friend.senderRemark
        }
        return friend.receiverRemark
    }
    const makeConversation=async ()=>{
        console.log(123,friend)
        console.log(234,friendInfo)
        const conversation:Conversation = {
            id:friend.id,
            remark:remark ?? friendInfo.nickname,
            friendInfo:friendInfo,
            lastMsgTime:dayjs().format(),
            lastMsg:"",
            unread:0,
            isMute:false,
            isOnline:false
        }
        await updateConversations(conversation,{updateId:friend.id})
        history.push("/home",{currentId:friend.id})
    }
    return(
        <StyledInfoBox>
            <Descriptions
                column={1}
                size={"small"}
                title={(
                    <Space direction={"vertical"}>
                        {friendInfo.nickname}
                        <Text type="secondary">{friendInfo.username}</Text>
                    </Space>
                )}
                extra={<Avatar size={50} shape={"square"} src={friendInfo.avatar} />}
            >
                <Descriptions.Item label="备注" >
                    <EditRemark remark={remark} record={friend} />
                </Descriptions.Item>
                <Descriptions.Item label={"邮箱"} >{friendInfo.email}</Descriptions.Item>

            </Descriptions>
            <Divider plain>
                <Button type={"primary"} onClick={makeConversation}>发消息</Button>
            </Divider>
        </StyledInfoBox>
    )
}
interface EditRemarkProps{
    remark:string|null,
    record:Friend
}
const EditRemark:FC<EditRemarkProps> = (props) => {
    const {remark,record}=props

    const [isEdit,{set:setEdit}]=useBoolean(false)
    const {loading,runAsync}=useRequest(userStore.modifyFriendRemark,{
        manual:true
    })
    const onChange=async (value:string)=>{
        if(value !== remark){
            await runAsync({id:record.id,remark:value})
        }
        setEdit(false)
    }
    return (
        <Spin spinning={loading}>
            <Paragraph
                editable={{
                    tooltip: '点击添加备注',
                    triggerType: ['text'],
                    maxLength:20,
                    onStart:()=>{
                        setEdit(true)
                    },
                    onChange:onChange
                }}
            >
                {remark?remark:!isEdit && <Text style={{cursor:"pointer"}} type={"secondary"}>点击编辑备注</Text>}
            </Paragraph>
        </Spin>
    )
}
export default UserInfo