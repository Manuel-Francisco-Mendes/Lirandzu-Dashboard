import React from 'react'
import logo from "../../assets/images/lirandzu_logo.png"
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <nav className='navbar_container'>
        <img width={230} src={logo} alt logo/>
        <div className='search-container'>
          <SearchIcon/>
          <input type="text" placeholder='Pesquisar' />
        </div>
    </nav>
  )
}

export default Navbar
