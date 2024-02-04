// import React from 'react'

import { Outlet } from "react-router-dom"
import Brand from "../components/Brand"
import ColumnLeft from "../components/ColumnLeft"

const RootLayout = () => {
  return (
    <>
     <div className="container">
      <ColumnLeft/>
      <div className="col-right">
      <div className="login-form">
        <Brand/>
        <Outlet/>
      </div>
     </div>
     </div>
     
     
    </>
  )
}

export default RootLayout