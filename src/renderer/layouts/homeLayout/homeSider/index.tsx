import React, {FC} from "react";
import {StyledHomeSider} from "@/layouts/homeLayout/style";
import {Badge, Space, theme} from "antd";
import {useModel} from "foca";
import appStore from "@/stores/app.store";
import SiderItem from "@/layouts/homeLayout/homeSider/SiderItem";
import {MessageOutlined} from "@ant-design/icons";
import {IconFont, IconType} from "@/components";

const HomeSider:FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();


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
        </StyledHomeSider>
    )
}
export default HomeSider
