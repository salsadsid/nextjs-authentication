"use client"
import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const { Header } = Layout;

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const {data:session}=useSession()
  const router =useRouter()
  const handleLoginClick=()=>{
    router.push("/login")
  }
  const handleSignUpClick=()=>{
    router.push("/signup")
  }
  const handleProtectedRouteClick=()=>{
    router.push("/protected")
  }
  const handleHomeClick=()=>{
    router.push("/")
  }
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout className="layout">
      <Header style={{ padding: 0 }}>
        <Row justify="center" align="middle">
          <Col xs={20} sm={20} md={4}>
            <div
              className="logo"
              style={{ color: "white", paddingLeft: "20px" ,fontWeight:"600",fontSize:"20px"}}
              onClick={handleHomeClick}
             >
              Nextjs Auth
            </div>
          </Col>
          <Col xs={0} sm={0} md={16}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" onClick={handleHomeClick} icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              {session?.user && <Menu.Item onClick={handleProtectedRouteClick} key="2" icon={<UserOutlined />}>
                Authenticated Route
              </Menu.Item>}
             
              {
                session?.user ? (
                  <Menu.Item key="4">
                <Button type="primary" style={{ marginRight: "10px" }} onClick={signOut}>
                  Sign Out
                </Button>
                </Menu.Item>
                ) :(
                  <Menu.Item key="4">
                  <Button type="primary" style={{ marginRight: "10px" }}onClick={handleLoginClick}>
                    Sign in
                  </Button>
                  <Button onClick={handleSignUpClick}>Sign up</Button>
                </Menu.Item>
                )
              }
             
            </Menu>
          </Col>
          <Col xs={4} sm={4} md={0}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item onClick={handleHomeClick} key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            {session?.user && <Menu.Item onClick={handleProtectedRouteClick} key="2" icon={<UserOutlined />}>
                Authenticated Route
              </Menu.Item>}
            
            <Menu.Item key="4">
              <Button type="primary" style={{ marginRight: "10px" }} onClick={handleLoginClick}>
                Sign in
              </Button>
              <Button onClick={handleSignUpClick}>Sign up</Button>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Nav;
