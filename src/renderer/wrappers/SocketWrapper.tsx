import React, {FC} from "react";
import {Outlet} from "umi";
import {useAppSocket} from "@/hooks/useAppSocket";
import {message, Modal, Typography} from "antd";

const {Text}=Typography
const SocketWrapper:FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
    useAppSocket(()=>{
        Modal.info({
            centered:true,
            transitionName:"ant-fade",
            title: '该账号已被登出',
            content: (
                <div>
                    <Text>您已在其他地方登录，如不是本人登录可能密码已泄露，请修改密码或者PIN码</Text>
                </div>
            ),
            okText:"知道了",
            onOk() {},
        })
    },messageApi)
    return (
        <>
            {contextHolder}
            <Outlet/>
        </>

    )
}
export default SocketWrapper