import React from 'react'
import { Outlet } from 'react-router-dom'
import "./layout.css"
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

const FullLayout = () => {
  return (
    <div className='layout_container'>
      <Navbar />
      <div className='layout-container__main'>
        <Sidebar />
        <main className='main_content'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default FullLayout
