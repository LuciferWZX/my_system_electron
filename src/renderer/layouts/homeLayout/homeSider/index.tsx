import React, {FC} from "react";
import {StyledHomeSider} from "@/layouts/homeLayout/style";
import {Badge, Button, Space, theme} from "antd";
import SiderItem from "@/layouts/homeLayout/homeSider/SiderItem";
import { SettingFilled} from "@ant-design/icons";
import {IconFont, IconType} from "@/components";
import modalStore from "@/stores/modal.store";

const HomeSider:FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const openSetting=()=>{
        modalStore.updateState({settingVisible:true})
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
                            checked={true}
                            icon={<IconFont type={IconType.colorChat}/>}
                            label={"消息"}
                        />
                    </Badge>
                    <SiderItem
                        checked={false}
                        icon={<IconFont type={IconType.colorChat}/>}
                        label={"消息"}
                    />
                    <SiderItem
                        checked={false}
                        icon={<IconFont type={IconType.colorChat}/>}
                        label={"消息"}
                    />
                    <SiderItem
                        checked={false}
                        icon={<IconFont type={IconType.colorChat}/>}
                        label={"消息"}
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
