import React, {FC} from "react";
import {StyledContactSider} from "@/pages/contact/sider/style";
import {theme} from "antd";

import SearchHeader from "@/pages/contact/sider/searchHeader";
import SiderContent from "@/pages/contact/sider/siderContent";

const ContactSider:FC = () => {


    const {
        token,
    } = theme.useToken();


    return(
        <StyledContactSider
            style={{backgroundColor:token.colorBgElevated}}

        >
            <SearchHeader/>
            <SiderContent />
        </StyledContactSider>
    )
}
export default ContactSider
