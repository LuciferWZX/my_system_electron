import styled from "styled-components";
import {Layout} from "antd";

export const StyledContactSider = styled.div<{$hoverBg:string,$activeBg:string}>`
    height: 100%;
  width: 260px;
  display: flex;
  flex-direction: column;
  //overflow: auto;
  border-radius: 4px;
  .mac-scroll-bar{
    height: 100%;
    overflow: auto;
    flex: 1;
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
