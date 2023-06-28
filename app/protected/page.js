"use client"


import React from 'react'
import { useSelector } from 'react-redux';

const Protected = () => {
    const email = useSelector((state) => state.auth);
  return (
    <>
    <div>Protected route </div>
    {
        email && <p>Your Email is: {email.email}</p>
    }
    </>
  )
}

export default Protected