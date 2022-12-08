import React, {FC} from "react";
import {history} from 'umi';
import {LottieBox, StyledLoginForm} from "@/pages/login/style";
import Lottie from 'react-lottie';
import loginWall from '@/assets/jsons/login_wall.json';
import {Button, Form, Input, message, Typography} from "antd";
import userStore from "@/stores/user.store";
import {useDebounceFn, useRequest} from "ahooks";
import {ResponseCode} from "@/types/ResponseResult";
const { Title } = Typography;

interface LoginFormValueType{
  username:string
  password:string
}
const LoginPage:FC = () => {
  const {runAsync:runLogin,loading}=useRequest((params:LoginFormValueType)=>userStore.login({
    username:params.username,
    password:params.password
  }),{
    manual:true
  })
  ///防抖
  const { run:debounceRunLogin } = useDebounceFn(
    async (params:LoginFormValueType)=>{
      const result =await runLogin(params)
      if(result.code === ResponseCode.success){
        message.success({content:"登录成功",key:"success"})
        history.replace("/home")
      }
    },
    {
      wait: 500,
    },
  );
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: loginWall,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const onFinish=async (values:LoginFormValueType)=>{
      await debounceRunLogin(values)
    }
    return(
        <StyledLoginForm>
            <LottieBox>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={300}
                    isClickToPauseDisabled={true}
                />
            </LottieBox>
            <Form
                requiredMark={false}
                className={'login-form'}
                initialValues={{ username: '',password:'' }}
                onFinish={onFinish}
                autoComplete={"off"}>
                <Title level={4}>登录</Title>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名/邮箱/电话号码!' }]}
                >
                    <Input placeholder={"用户名/邮箱/电话号码"} allowClear={true} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码/PIN码!' }]}
                >
                    <Input.Password placeholder={"密码/PIN码"} allowClear={true} />
                </Form.Item>
                <Form.Item >
                    <Button loading={loading} type="primary" block={true} htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>


        </StyledLoginForm>
    )
}
export default LoginPage
