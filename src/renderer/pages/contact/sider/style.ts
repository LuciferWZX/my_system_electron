import styled from "styled-components";
import {Layout} from "antd";

export const StyledContactSider = styled(Layout.Sider)<{$hoverBg:string,$activeBg:string}>`
    height: 100%;
  //overflow: auto;
  border-radius: 4px;
  .mac-scroll-bar{
    height: 100%;
    overflow: auto;
  }
  .friends-list{
    padding: 10px;
    cursor: pointer;
    border-radius:4px;
    :hover{
      background-color: ${({$hoverBg})=>$hoverBg};
    }
  }
  .selected-item{
    background-color: ${({$activeBg})=>$activeBg};
  }
    
`