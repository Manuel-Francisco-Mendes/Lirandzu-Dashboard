import React from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import FullLayout from '../layout/FullLayout'
import User from '../pages/User'
import Payment from '../pages/Payment'
import Complains from '../pages/Complains'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/dashboard'} />} />
        <Route element={<FullLayout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<User />} />
          <Route path='/payments' element={<Payment />} />
          <Route path='/complain' element={<Complains />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default Router
