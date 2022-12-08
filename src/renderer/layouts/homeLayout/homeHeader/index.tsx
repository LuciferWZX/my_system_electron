import React, {FC} from "react";
import {StyledHomeHeader} from "@/layouts/homeLayout/style";
import {theme} from "antd";
import AppAction from "@/layouts/homeLayout/homeHeader/AppAction";
import {useModel} from "foca";
import appStore from "@/stores/app.store";
import HeaderAvatar from "@/layouts/homeLayout/homeHeader/headerAvatar";

interface IProps{
    isAuthority?:boolean
}
const HomeHeader:FC<IProps> = (props) => {
  const {isMac,isWin}=useModel(appStore,state => ({
    isMac:state.platform==="darwin",
    isWin:state.platform==="win32",
  }));
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const HeaderStyle:React.CSSProperties={
        height:44,
        backgroundColor:colorBgContainer,
        lineHeight:"44px",
        padding:'0 10px'
    }
    const onDoubleClick=()=>{
      if(isMac){
        if(window.electron?.appAction){
          const {appAction}=window.electron
          appAction("max")
        }
      }
    }
    return(
        <StyledHomeHeader style={HeaderStyle} onDoubleClick={onDoubleClick}>
            {props.isAuthority&&<HeaderAvatar position={isMac?"right":"left"}/>}
          {isWin && <AppAction/>}

        </StyledHomeHeader>
    )
}

export default HomeHeader
