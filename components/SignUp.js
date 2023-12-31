"use client"
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { Button, Checkbox, Form, Input } from 'antd';
import Verify from './Verify';
import Link from 'next/link';
const SignUpForm = () => {
  const onFinish = async(values) => {
    const{email,password}=values
    try {
        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:email,
                password:password
            })
        }

       const res= await fetch('/api/auth/signup', options)
       console.log(res.ok)
         if(res.ok){
            return <Verify></Verify>
         }
    } catch (error) {
        console.log(error)
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
          Sign Up
        </Button>
        Or <span style={{}}>Already have an account</span> <Link href="/login">Login</Link>
      </Form.Item>
    </Form>
  );
};
export default SignUpForm;