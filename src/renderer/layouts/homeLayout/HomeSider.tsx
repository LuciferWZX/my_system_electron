import React, {FC} from "react";
import {StyledHomeSider} from "@/layouts/homeLayout/style";
import {Menu, theme} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";

const HomeSider:FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return(
        <StyledHomeSider
            style={{
                backgroundColor:colorBgContainer,

        }}>
            <div className="logo" />
            <Menu
                mode="inline"
                style={{
                    borderInlineEnd:'none'
                }}
                className={'sider-menu'}
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'nav 1',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
        </StyledHomeSider>
    )
}
export default HomeSider