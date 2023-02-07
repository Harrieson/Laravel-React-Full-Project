import React from 'react'
import { Outlet } from 'react-router-dom'

const GuestLayout = () => {
  return (
    <div>
      Part of Layout 
      <Outlet />
    </div>
  )
}

export default GuestLayout
