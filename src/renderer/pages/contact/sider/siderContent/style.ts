import styled from "styled-components";

export const StyledSiderContent = styled.div<{$hoverBg:string,$activeBg:string}>`
  flex: 1;
  overflow: hidden;
  .mac-scroll-bar{
    height: 100%;
    overflow: auto;
  }
  .custom-collapse{
    border-radius: 0;
    border: none;
    .ant-collapse-content-active{
      border-radius: 0!important;
    }
    .custom-panel{
      border-radius: 0;
      .ant-collapse-content-box{
        padding: 0;
      }
    }
    .ant-list-item-action{
      margin-inline-start: 0;
    }
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