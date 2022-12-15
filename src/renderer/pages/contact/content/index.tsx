import React, {FC} from "react";
import {StyledContent} from "@/pages/contact/content/style";
import {theme} from "antd";
import {useContactFriendsDetail} from "@/pages/contact/content/useContactFriendsDetail";
import EmptyInfo from "@/pages/contact/content/EmptyInfo";
import UserInfo from "@/pages/contact/content/UserInfo";
import {useFriendRequestRecord} from "@/pages/contact/content/useFriendRequestRecord";
import FriendRequestInfo from "@/pages/contact/content/FriendRequestInfo";

const Content:FC = () => {
    const {token} = theme.useToken();
    const {friendInfo,friendRecord}=useContactFriendsDetail()
    const {friendRInfo,requestRecord}=useFriendRequestRecord()

    const renderContent=()=>{
        if(friendInfo!==null && friendRecord!==null){
            return <UserInfo friend={friendRecord} friendInfo={friendInfo}/>
        }
        if(friendRInfo!==null && requestRecord!==null){
            return  <FriendRequestInfo friendInfo={friendRInfo} friendRecord={requestRecord}/>
        }
        return <EmptyInfo/>
    }
    return(
        <StyledContent
            style={{backgroundColor:token.colorBgElevated}}>
            {renderContent()}
        </StyledContent>
    )
}
export default Content