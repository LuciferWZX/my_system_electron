import React, {FC} from "react";
import {Outlet} from "umi";
import {StyledHome} from "@/layouts/homeLayout/style";
import {Layout} from "antd";
import HomeSider from "@/layouts/homeLayout/HomeSider";
import HomeContent from "@/layouts/homeLayout/HomeContent";

const HomeLayout:FC = () => {
    return(
        <StyledHome>
            <Layout className={'global-layout'}>
                <HomeSider/>
                <HomeContent>
                    <Outlet />
                </HomeContent>
            </Layout>
        </StyledHome>
    )
}
export default HomeLayout