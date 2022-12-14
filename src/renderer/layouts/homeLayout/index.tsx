import React, {FC} from "react";
import {Outlet} from "umi";
import {StyledHome} from "@/layouts/homeLayout/style";
import {Layout} from "antd";
import HomeContent from "@/layouts/homeLayout/HomeContent";
import HomeHeader from "@/layouts/homeLayout/homeHeader";
import withAuth from "@/hocs/withAuth";

const HomeLayout:FC = () => {
    return(
        <StyledHome>
            <Layout className={'global-layout'}>
              <HomeHeader isAuthority={true}/>
                <HomeContent>
                    <Outlet />
                </HomeContent>
            </Layout>
        </StyledHome>
    )
}
export default withAuth(HomeLayout)
