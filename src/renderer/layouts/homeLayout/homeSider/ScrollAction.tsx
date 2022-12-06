import React, {FC} from "react";
import {useModel} from "foca";
import appStore from "@/stores/app.store";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

const ScrollAction:FC = () => {
  const collapsed=useModel(appStore,state => state.collapsed)
  return React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    className: 'trigger',
    onClick: () => appStore.updateState({collapsed:!collapsed}),
  })
}
export default ScrollAction
