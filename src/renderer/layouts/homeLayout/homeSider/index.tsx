import React, {FC} from "react";
import {StyledHomeSider} from "@/layouts/homeLayout/style";
import {Badge, Button, Space, theme} from "antd";
import SiderItem from "@/layouts/homeLayout/homeSider/SiderItem";
import { SettingFilled} from "@ant-design/icons";
import {IconFont, IconType} from "@/components";
import modalStore from "@/stores/modal.store";
import {history,useLocation} from "umi";

const HomeSider:FC = () => {
    let location = useLocation();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const openSetting=()=>{
        modalStore.updateState({settingVisible:true})
    }

    const changeMenu=(path:string)=>{
        history.push(path)
    }
    return(
        <StyledHomeSider
            style={{
                backgroundColor:colorBgContainer,
            }}

            trigger={null}
            collapsible
            collapsedWidth={70}
            collapsed={true}
        >
            <div className={'sider-layout'}>
                <Space size={5} direction={"vertical"} style={{width:'100%'}}>
                    <Badge count={13}  className={'sider-badge'} size={"small"}>
                        <SiderItem
                            checked={location.pathname==='/home'}
                            icon={<IconFont type={IconType.colorChat}/>}
                            label={"消息"}
                            onClick={()=>changeMenu('/home')}
                        />
                    </Badge>
                    <SiderItem
                        checked={location.pathname==='/contact'}
                        icon={<IconFont type={IconType.contact}/>}
                        onClick={()=>changeMenu('/contact')}
                        label={"通讯录"}
                    />
                    <SiderItem
                        checked={location.pathname==='/friendsCycle'}
                        icon={<IconFont type={IconType.friendCycle}/>}
                        onClick={()=>changeMenu('/friendsCycle')}
                        label={"朋友圈"}
                    />
                    <SiderItem
                        checked={location.pathname==='/meeting'}
                        icon={<IconFont type={IconType.meeting}/>}
                        onClick={()=>changeMenu('/meeting')}
                        label={"视频会议"}
                    />
                </Space>

               <Space align="center" size={5} direction={"vertical"} style={{width:'100%'}}>
                   <Button onClick={openSetting} type="text" icon={<SettingFilled />} />
               </Space>
            </div>


        </StyledHomeSider>
    )
}
export default HomeSider
