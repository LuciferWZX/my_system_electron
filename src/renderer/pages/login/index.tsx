import React, {FC} from "react";
import {LottieBox, StyledLoginForm} from "@/pages/login/style";
import Lottie from 'react-lottie';
import loginWall from '@/assets/jsons/login_wall.json';
import {Button, Form, Input, Typography} from "antd";
const { Title } = Typography;
const LoginPage:FC = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: loginWall,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return(
        <StyledLoginForm>
            <LottieBox>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={300}
                />
            </LottieBox>
            <Form
                requiredMark={false}
                className={'login-form'}
                initialValues={{ remember: true }}
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
                    <Button type="primary" block={true} htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>


        </StyledLoginForm>
    )
}
export default LoginPage