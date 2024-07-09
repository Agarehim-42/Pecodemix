import React from 'react'
import Button from './Button'

import { FaBars } from "react-icons/fa";


const Header: React.FC = () => {
    return (
        <div><nav className="navbar navbar-expand-lg my-background">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="/assets/images/header/logo.svg" alt="" className='logo' />
                </a>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FaBars />

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Services</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Blog</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contact</a>
                        </li>
                    </ul>
                    <Button inTextBtn="Sign In" shekil="" klassadi="sign-in" ></Button>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Header