import React, {FC} from "react";
import styled from "styled-components";
import {Avatar, Badge, List, Typography} from "antd";
import {Conversation} from "@/types/user";
import dayjs from "dayjs";
const {Text}=Typography
interface IProps{
    item:Conversation
}
const ConversationItem:FC<IProps> = (props) => {
    const {item}=props
    return(
        <StyledListItem
            style={{padding:5}}
            // actions={[
            //     <StyledAction>
            //         <div>
            //             {item.lastMsgTime ?dayjs(item.lastMsgTime).format("YYYY年MM月DD日"): dayjs().format("HH:mm")}
            //         </div>
            //         <div>
            //             <Badge count={89} />
            //         </div>
            //     </StyledAction>
            // ]}
        >
            <StyledListItem.Meta
                avatar={<Avatar shape={"square"} size={48} src={item.friendInfo.avatar} />}
                title={
                    <div className={'item-flex'}>
                        <Text className={'remark'} ellipsis={true}>{item.remark}</Text>
                        <Text type={"secondary"}  className={'time'}>
                            {item.lastMsgTime ?dayjs(item.lastMsgTime).format("YYYY年MM月DD日"): dayjs().format("HH:mm")}
                        </Text>
                    </div>
                }
                description={
                    <div className={'item-flex'}>
                        <Text type={"secondary"} ellipsis={true}>{item.lastMsg ?? "啊啊啊啊，啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"}</Text>
                        <Badge className={'unread'} count={89} />
                    </div>
                }
            />
        </StyledListItem>
    )
}
export default ConversationItem

const StyledListItem = styled(List.Item)`
  .item-flex{
    display: flex;
    .remark{
      flex: 1;
    }
    .time{
      font-size: 12px;
      margin-left: 10px;
    }
    .unread{
      margin-left: 10px;
    }
  }
  .ant-list-item-action{
    margin-inline-start:10px!important;
  }
  .desc{
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }
`
const StyledAction = styled.div`
  text-align: end;
`