import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import stacklineLogo from '../../resources/stackline_logo.svg'
import './navigationBar.css'

export const NavigationBar = () => {
    return (
        <Navbar className="navigation-bar">
            <Navbar.Brand className="navigation-bar-brand h-100 w-100 d-flex">
                <img
                    alt=""
                    src={stacklineLogo}
                    className="d-inline-block align-top logo"
                />
            </Navbar.Brand>
        </Navbar>
    )
}
