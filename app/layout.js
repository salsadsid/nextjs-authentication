"use client"
import Provider from '@/components/Provider';
import React from 'react'
// import "@styles/globals.css";
import Nav from '@/components/Nav';
import { Col, Row } from 'antd';

export const metadata = {
    title: "Nextjs-Authentication",
    description: "Basic authentication with nextjs",
  };
const RootLayout = ({children}) => {
  return (
   <html>
    <body>
        <Provider>
    <div className='main'>
        <div className='gradient'></div>
    </div>
          <main>
            <Row justify="center">
            <Col span={24}>
            <Nav></Nav>
            </Col>
            <Col span={8} className="gutter-row">
            {children}
            </Col>
            </Row>
          </main>
        </Provider>
    </body>
   </html>
  )
}

export default RootLayout