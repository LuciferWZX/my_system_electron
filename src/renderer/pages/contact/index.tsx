import React, {FC} from "react";
import {StyledContactBox} from "@/pages/contact/style";
import ContactSider from "@/pages/contact/sider";
import {useFriend} from "@/pages/contact/useFriend";
import Content from "@/pages/contact/content";


const ContactPage:FC = () => {
    useFriend()
    return(
        <StyledContactBox>
            <ContactSider/>
            <Content/>
        </StyledContactBox>
    )
}
export default ContactPage