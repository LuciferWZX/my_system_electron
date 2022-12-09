import React, {FC} from "react";
import {Outlet} from "umi";
import styled from "styled-components";
import {FullBox} from "@/styles/FullBox";
import BackgroundLightImg from '@/assets/svgs/login_bg_light.svg'
import BackgroundDarkImg from '@/assets/svgs/login_bg_dark.svg'
import {useAppTheme} from "@/hooks";
import {Layout} from "antd";
import {useModel} from "foca";
import appStore from "@/stores/app.store";
import AppAction from "@/layouts/homeLayout/homeHeader/AppAction";
const UserLayout:FC = () => {
    const [theme] = useAppTheme()
  const {isWin}=useModel(appStore,state => ({
    isWin:state.platform==="win32",
  }));
    return(
        <StyledUserLayout appTheme={theme}>
            <Layout className={'login-layout'}>
              {isWin&&<AppAction className={'user-layout-action'}/>}
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
  -webkit-app-region: drag;
  .login-layout{
    height: 100%;
    background: transparent;
    .user-layout-action{
      position: absolute;
      right: 10px;
      top: 10px;
      -webkit-app-region: no-drag;
      z-index: 1;
    }
  }
`
