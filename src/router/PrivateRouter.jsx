import { Navigate, Outlet } from 'react-router-dom';
import React from 'react'

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    user ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRouter