import React, {FC} from "react";
import {StyledContent} from "@/pages/contact/content/style";
import {theme} from "antd";
import {useContactFriendsDetail} from "@/pages/contact/content/useContactFriendsDetail";
import EmptyInfo from "@/pages/contact/content/EmptyInfo";
import UserInfo from "@/pages/contact/content/UserInfo";

const Content:FC = () => {
    const {token} = theme.useToken();
    const {friendInfo,friendRecord}=useContactFriendsDetail()

    return(
        <StyledContent
            style={{backgroundColor:token.colorBgElevated}}>
            {(friendInfo!==null && friendRecord!==null)?
                <UserInfo friend={friendRecord} friendInfo={friendInfo}/>:
                <EmptyInfo/>
            }
        </StyledContent>
    )
}
export default Content