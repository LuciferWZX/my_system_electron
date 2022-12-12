import React, {FC} from "react";
import {StyledContent} from "@/pages/contact/content/style";
import {theme} from "antd";
import {useContactFriendsDetail} from "@/pages/contact/content/useContactFriendsDetail";
import EmptyInfo from "@/pages/contact/content/EmptyInfo";

const Content:FC = () => {
    const {token} = theme.useToken();
    const [friendInfo]=useContactFriendsDetail()
    return(
        <StyledContent
            style={{backgroundColor:token.colorBgElevated}}>
            {friendInfo===null?<EmptyInfo/>:"xx"}
        </StyledContent>
    )
}
export default Content