import React, {FC} from "react";
import {Avatar, Badge, Divider, Dropdown, MenuProps} from "antd";
import {StyledHeaderAvatar, UserInfoBox} from "@/layouts/homeLayout/homeHeader/headerAvatar/style";
import {LogoutOutlined, SettingFilled} from "@ant-design/icons";

const HeaderAvatar:FC = () => {
  const items:MenuProps['items']=[
    { label: '账号设置', key: 'account-setting',icon:<SettingFilled/>, }, // 菜单项务必填写 key
    {type: 'divider'},
    {
      label: '退出登录',
      icon:<LogoutOutlined/>,
      key: 'logout',
      danger:true,
    },
  ]

  return(
    <StyledHeaderAvatar>
      <Dropdown
        menu={{items:items}}
        trigger={['click']}
        dropdownRender={(menu) => (
          <div className="dropdown-content">
            <UserInfoBox>
              <div>超级赛亚人</div>
              <div>2396423791@qq.com</div>
            </UserInfoBox>

            <Divider style={{ margin: 0 }} />
            {menu}
          </div>
        )}
      >
        <Badge dot status="success" offset={[-5, 36]}>
          <Avatar draggable={false} src={"https://img2.baidu.com/it/u=1196552359,1218564689&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1670518800&t=66cc1ac1f57136b8d9567471c0b4ee18"}  />
        </Badge>
        </Dropdown>
      </StyledHeaderAvatar>
  )
}
export default HeaderAvatar
