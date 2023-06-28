"use client";
import Login from "@/components/Login";
import { Row, Col, Space,Button } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";


const Home = () => {
  const{data:session} =useSession()
  const router =useRouter()
  const handleClick=()=>{
    router.push("/login")
  }
  return <div style={{marginTop:"20px"}}>
    {
      session?.user ? (
        <p>You are logged in.</p>
      ) : (
        <Space wrap>
        <p>You are not logged in.
          
        </p>
    <Button type="primary" onClick={handleClick}>Sign In</Button>
        </Space>
      )
    }
  </div>;
};

export default Home;
