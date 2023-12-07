import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbarmain from '../components/Navbar'

export default function Layout() {
    return (
        <div>
            <Navbarmain />
            <Outlet />
            <Footer />
        </div>
    )
}
