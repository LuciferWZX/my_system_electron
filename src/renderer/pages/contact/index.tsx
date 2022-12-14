import React, {FC} from "react";
import {StyledContactBox} from "@/pages/contact/style";
import ContactSider from "@/pages/contact/sider";
import {useFriend} from "@/pages/contact/useFriend";
import Content from "@/pages/contact/content";
import {theme} from "antd";


const ContactPage:FC = () => {
    useFriend()
    const {
        token:{colorPrimaryBg},
    } = theme.useToken();
    return(
        <StyledContactBox
            // style={{backgroundColor:colorPrimaryBg}}
        >
            <ContactSider/>
            <Content/>
        </StyledContactBox>
    )
}
export default ContactPage