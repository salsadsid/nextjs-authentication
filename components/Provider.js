"use client"

import {SessionProvider} from "next-auth/react"
const ProviderSession = ({children,session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default ProviderSession