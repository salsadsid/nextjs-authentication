"use client"

import React from 'react'
// import "@styles/globals.css";
import Nav from '@/components/Nav';
import { Col, Row } from 'antd';
import ProviderSession from '@/components/Provider';
import { Provider } from "react-redux";
import store from '@redux/store';
export const metadata = {
    title: "Nextjs-Authentication",
    description: "Basic authentication with nextjs",
  };
const RootLayout = ({children}) => {
  return (
   <html>
    <body>
        <ProviderSession>
    <div className='main'>
        <div className='gradient'></div>
    </div>
    <Provider store={store}>
          <main>
            <Row justify="center">
            <Col span={24}>
            <Nav></Nav>
            </Col>
            <Col span={8} className="gutter-row"style={{marginTop:"40px"}}>
            {children}
            </Col>
            </Row>
          </main>
          </Provider>
        </ProviderSession>
    </body>
   </html>
  )
}

export default RootLayout