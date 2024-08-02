import React from 'react'
import { Link, useLocation } from "react-router-dom"
import "../components.css"
import { Avatar } from '@mui/material'
import "./sidebar.css"
import profile from "../../assets/images/profile.jpeg"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PaymentIcon from '@mui/icons-material/Payment';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
    const location = useLocation()
    const currentRoute = location.pathname.split("/")[1]

    return (
        <nav className='sidebar_container'>
            <div className='profile_area'>
                <Avatar sx={{ width: 45, height: 45 }} alt="Remy Sharp" src={profile} />
                <div className='profile_name'>
                    <span className='user_name'>Paulo Albino</span>
                    <span className='user_role'>Admin</span>
                </div>
            </div>
            <ul>
                <li className={currentRoute === "dashboard" ? "active" : ""}><DashboardIcon /> <Link to={"/dashboard"}>Dashboard</Link></li>
                <li className={currentRoute === "users" ? "active" : ""}><GroupIcon /> <Link to={"/users"}>Usuários</Link></li>
                <li className={currentRoute === "payments" ? "active" : ""}><PaymentIcon /> <Link to={"/payments"}>Pagamentos</Link></li>
                <li className={currentRoute === "complain" ? "active" : ""}><DateRangeIcon /> <Link to={"/complain"}>Reclamação</Link></li>
            </ul>
            <div className='sidebar_footer'>
                <ul>
                    <li className={currentRoute === "profile" ? "active" : ""}><PersonIcon /> <Link to={"/profile"}>Perfil</Link></li>
                    <li className={currentRoute === "settings" ? "active" : ""}><SettingsIcon /> <Link to={"/settings"}>Definicoes</Link></li>
                </ul>
            </div>
        </nav>

    )
}

export default Sidebar
