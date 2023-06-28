import { Form } from 'antd'
import React from 'react'

const Verify = () => {
  return (
   <Form className="login-form">
    <Form.Item
        name="otp"
        rules={[
          {
            required: true,
            message: 'Please input your OTP!',
          },
        ]}
      ></Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Verify
        </Button>

    </Form.Item>
   </Form>
  )
}

export default Verify