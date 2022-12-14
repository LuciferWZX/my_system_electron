import styled from "styled-components";
import {Select, Space} from "antd";

export const StyledSearchBox = styled.div`
  padding: 8px 16px;
  width: 100%;
  display: flex;
  align-items: center;
  
  .friend-select{
    margin-left: 10px;
  }

`
export const StyledOptionInnerBox = styled.div<{highlightColor:string}>`
    display: flex;
    .desc{
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 5px;
    }
  .high-light{
    color:${({highlightColor})=>highlightColor};
    background-color: unset;
  }
`