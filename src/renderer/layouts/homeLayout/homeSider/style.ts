
import styled from "styled-components";
import {Tag} from "antd";

export const StyledSiderItem = styled(Tag.CheckableTag)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  .sider-icon{
    font-size: 24px;
  }
  .sider-label{
    font-size: 10px;
  }
`
