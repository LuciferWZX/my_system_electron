import React, {FC} from "react";
import {Outlet} from "umi";
import styled from "styled-components";
import {FullBox} from "@/styles/FullBox";
import BackgroundLightImg from '@/assets/svgs/login_bg_light.svg'
import BackgroundDarkImg from '@/assets/svgs/login_bg_dark.svg'
import HomeHeader from "@/layouts/homeLayout/homeHeader";
import {useAppTheme} from "@/hooks";
import {Layout} from "antd";
const UserLayout:FC = () => {
    const [theme] = useAppTheme()

    return(
        <StyledUserLayout appTheme={theme}>
            <Layout className={'login-layout'}>
                <HomeHeader  />
                <Layout.Content>
                    <Outlet />
                </Layout.Content>
            </Layout>
        </StyledUserLayout>
    )
}
export default UserLayout
const StyledUserLayout = styled(FullBox)<{appTheme:string}>`
  position: relative;
  background-image: url(${({appTheme})=>appTheme==='light'?BackgroundLightImg:BackgroundDarkImg});
  background-size: cover;
  .login-layout{
    height: 100%;
    background: transparent;
  }
`