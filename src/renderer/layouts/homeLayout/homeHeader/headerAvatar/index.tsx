import React, {FC} from "react";
import {Avatar, Badge, Divider, Dropdown, MenuProps, Modal, Space, Typography} from "antd";
import {StyledHeaderAvatar, StyledInfoBox, UserInfoBox} from "@/layouts/homeLayout/homeHeader/headerAvatar/style";
import {LogoutOutlined, SettingFilled} from "@ant-design/icons";
import {useModel} from "foca";
import userStore from "@/stores/user.store";
import {IconFont, IconType} from "@/components";
import { useMemoizedFn} from "ahooks";
import {clearUserInfo} from "@/utils/user";

const { Text } = Typography;
interface IProps {
    position?:"left"|"right"
}
const HeaderAvatar:FC<IProps> = (props) => {
    const [modal, contextHolder] = Modal.useModal();
    const {avatar,phone,nickname} = useModel(userStore,state => ({
        avatar:state.user?.avatar ?? "",
        phone:state.user?.phone ?? "",
        nickname:state.user?.nickname ?? ""
    }))

    const confirmLogout=()=>{
        modal.confirm({
            title: '退出登录?',
            icon: <IconFont type={IconType.warning} />,
            content: '退出登录后，无法收到消该账号的通知',
            okText: '确认',
            getContainer:false,
            transitionName:"ant-move-up",
            okButtonProps:{
                type:"primary",
                danger:true
            },
            onOk:logout,
            cancelText: '取消',
        });
    }
    const logout=useMemoizedFn(async ()=>{
        setTimeout(()=>{
            clearUserInfo()
        },800)
    })
    const items:MenuProps['items']=[
        { label: '账号设置', key: 'account-setting',icon:<SettingFilled/>, }, // 菜单项务必填写 key
        {type: 'divider'},
        {
            label: '退出登录',
            icon:<LogoutOutlined/>,
            key: 'logout',
            onClick:confirmLogout,
            danger:true,
        },
    ]
  return(
      <StyledHeaderAvatar style={{
          float:props.position??"left",
      }}>
          {contextHolder}
          <Dropdown
              menu={{items:items}}
              trigger={['click']}
              // dropdownRender={(menu) => (
              //     <div className="dropdown-content">
              //         <UserInfoBox>
              //             <div>超级赛亚人</div>
              //             <div>2396423791@qq.com</div>
              //         </UserInfoBox>
              //
              //         <Divider style={{ margin: 0 }} />
              //         {menu}
              //     </div>
              // )}
          >
              <Badge dot status="success" offset={[-5, 36]}>
                  <Avatar size={32} draggable={false}
                          src={avatar}  />
              </Badge>
          </Dropdown>
          <StyledInfoBox>
              <Text style={{fontSize:12}} strong>
                  {nickname}
              </Text>
              <Text style={{fontSize:10}} type="secondary">
                  {phone}
              </Text>
          </StyledInfoBox>
      </StyledHeaderAvatar>
  )
}
export default HeaderAvatar
