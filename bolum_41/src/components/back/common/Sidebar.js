"use client";
import React, {useState} from 'react'
import Link from "next/link";

const Sidebar = (props) => {
    const [toggled,setToggled] = useState(false);

    return (
        <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${toggled ? 'toggled' : ''}`} id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-text mx-3">Admin Panel</div>
            </a>

            <hr className="sidebar-divider my-0"/>

            <li className="nav-item">
                <Link className="nav-link" href="/admin">
                    <i className="fas fa-fw fa-home"></i>
                    <span>Anasayfa</span></Link>
            </li>

            <hr className="sidebar-divider"/>


            <li className="nav-item">
                <Link className="nav-link" href="/admin/users">
                    <i className="fas fa-fw fa-users"></i>
                    <span>Kullanıcılar</span></Link>
            </li>

            <hr className="sidebar-divider"/>


            <div className="text-center d-none d-md-inline">
                <button onClick={()=>setToggled(!toggled)} className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    )
}

export default Sidebar
