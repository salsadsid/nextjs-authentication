"use client"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { loggedIn } from '@redux/authSlice/authSlice';
import { Button, Checkbox, Form, Input } from 'antd';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
const LoginForm = () => {
  const router =useRouter()
  const dispatch=useDispatch()
  const onFinish =async (values) => {
    console.log('Received values of form: ', values);
    const status = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/"
    })
    if(status.ok) {
      dispatch(loggedIn(values.email))  
      router.push(status.url)
    }
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link href="/signup">register now!</Link>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;