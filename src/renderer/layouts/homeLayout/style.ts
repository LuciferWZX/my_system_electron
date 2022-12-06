import styled from "styled-components";
import {FullBox} from "@/styles/FullBox";
import {Layout} from "antd";

export const StyledHome = styled(FullBox)`
    .global-layout{
      height: 100%;
    }
`
export const StyledHomeSider = styled(Layout.Sider)`
    height: 100%;
  border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
  padding: 0 5px;
  .sider-badge{
    width: 100%;
  }
  .ant-badge-count{
    padding: 0 4px;
  }
`
export const StyledHomeContent = styled(Layout)`

`
export const StyledMainContent = styled(Layout.Content)`

`
export const StyledHomeHeader = styled(Layout.Header)`
  -webkit-app-region: drag;
`
