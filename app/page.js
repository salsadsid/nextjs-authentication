"use client";
import Login from "@/components/Login";
import { loggedIn } from "@redux/authSlice/authSlice";
import { Row, Col, Space,Button } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
  const{data:session} =useSession()
  console.log(session)
  const dispatch=useDispatch()
  const email = useSelector((state) => state?.auth);
 
  const router =useRouter()
  const handleClick=()=>{
    router.push("/login")
  }
  if(session?.user){
    dispatch(loggedIn(session?.user?.email))
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
