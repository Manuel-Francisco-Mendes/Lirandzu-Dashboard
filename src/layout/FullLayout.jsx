import React from 'react'
import {Outlet}  from 'react-router-dom'
import "./layout.css"
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

const FullLayout = () => {
  return (
    <div className='layout_container'>
      <Navbar/>
      <Sidebar/>
        <div className='main_content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default FullLayout
