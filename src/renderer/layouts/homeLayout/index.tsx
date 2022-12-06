import React, {FC} from "react";
import {Outlet} from "umi";
import {StyledHome} from "@/layouts/homeLayout/style";
import {Layout} from "antd";
import HomeContent from "@/layouts/homeLayout/HomeContent";
import HomeHeader from "@/layouts/homeLayout/homeHeader";

const HomeLayout:FC = () => {
    return(
        <StyledHome>
            <Layout className={'global-layout'}>
              <HomeHeader/>
                <HomeContent>
                    <Outlet />
                </HomeContent>
            </Layout>
        </StyledHome>
    )
}
export default HomeLayout
