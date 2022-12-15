import React, {FC} from "react";
import {StyledInfoBox} from "@/pages/contact/content/style";
import {Avatar, Button, Descriptions, Divider, Space, Typography} from "antd";
import {FriendRequestRecord, ResponseStatusType} from "@/types/user";
import {IconFont, IconType} from "@/components";
import classnames from "classnames";
import {useRequest} from "ahooks";
import userStore from "@/stores/user.store";


const { Text } = Typography;
interface IProps{
    friendRecord:FriendRequestRecord
    friendInfo: {
        avatar:string
        id:string
        nickname:string
        username:string
    }
}
const FriendRequestInfo:FC<IProps> = (props) => {
    const {friendRecord,friendInfo}=props
    const {runAsync:handleRequest,loading:handleLoading}=useRequest(userStore.handleFriendRequest,{
        manual:true,
        debounceWait:300
    })
    const renderRequestStatus=()=>{
        const heIsSender = friendRecord.senderId === friendInfo.id

        switch (friendRecord.responseStatus) {
            case ResponseStatusType.Handling:{
                if(heIsSender){
                    return(
                        <Space>
                            <Button
                                onClick={()=>handleRequest({
                                    fRecordId: friendRecord.id,
                                    fid: friendInfo.id,
                                    status: ResponseStatusType.Refused,
                                    senderRemark:friendRecord.senderRemark??undefined
                                })}
                                type={"text"}
                                danger={true}
                                loading={handleLoading}>拒绝</Button>
                            <Button
                                onClick={()=>handleRequest({
                                    fRecordId: friendRecord.id,
                                    fid: friendInfo.id,
                                    status: ResponseStatusType.Accepted,
                                    senderRemark:friendRecord.senderRemark??undefined
                                })}
                                type={"primary"} loading={handleLoading}>同意</Button>
                        </Space>
                    )
                }
                return(
                    <Space>
                        <Button type={"text"} loading={true}>等待对方处理</Button>
                    </Space>
                )
            }
            case ResponseStatusType.Accepted:{
                let msg = "对方已同意"
                if (heIsSender){
                    msg = "已同意"
                }
                return (
                    <Button
                        icon={<IconFont type={IconType.check}/> }
                        className={"success-btn"}
                        type={"primary"}
                    >
                        {msg}
                    </Button>
                )

            }
            case ResponseStatusType.Refused:{
                let msg = "对方已拒绝"
                if (heIsSender){
                    msg = "已拒绝"
                }
                return (
                    <Button
                        icon={<IconFont type={IconType.close}/> }
                        type={"primary"}
                        danger={true}
                    >
                        {msg}
                    </Button>
                )
            }
        }
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
                    {friendRecord.senderDesc}
                </Descriptions.Item>
            </Descriptions>
            <Divider plain>
                {renderRequestStatus()}
            </Divider>
        </StyledInfoBox>
    )
}
export default FriendRequestInfo