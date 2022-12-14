import styled from "styled-components";
import {FullBox} from "@/styles/FullBox";

export const StyledLoginForm = styled(FullBox)`
  
    display: flex;
    align-items: center;
  justify-content: center;
  position: relative;
  .login-form{
    z-index: 1;
    -webkit-app-region: no-drag;
  }

`
export const LottieBox = styled.div`
  z-index: 0;
`
