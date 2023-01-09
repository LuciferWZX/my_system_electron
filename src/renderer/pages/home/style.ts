import styled from "styled-components";
import {PanelGroup} from "react-resizable-panels";

export const StyledHome = styled(PanelGroup)`
  height:100%;
  .handle-bar{
    position: relative;
    outline: none;
    width:6px;
    transition: background-color,width 0.2s linear;
    .resize-handle-inner{
      position: absolute;
      top: 2px;
      bottom: 2px;
      left: 2px;
      right: 2px;
      border-radius: 1px;
      background-color: rgba(255, 255, 255, 0.2);
     
    }
    //:hover{
    //  background-color:rgba(255, 255, 255, 0.2) ;
    //  border-radius: 2px;
    //  padding: 2px;
    //}
    :active{
      width:8px;
    }
  }
`