import styled from "styled-components";
import {Layout} from "antd";

export const StyledContent = styled(Layout.Content)`
  margin-left: 5px;
  padding: 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`
export const StyledInfoBox = styled.div`
  box-sizing: border-box;
  width: 350px;
  height: 300px;
  .ant-descriptions-item-content{
    display: unset!important;
  }
  .success-btn{
    background-color: #00b96b;
    :hover{
      background-color: #00b96b;
    }
  }
`