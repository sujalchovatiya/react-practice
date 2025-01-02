import React from 'react'
import Dash from './Dash'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Dash />
      <Outlet />
    </div>
  )
}

export default Layout
