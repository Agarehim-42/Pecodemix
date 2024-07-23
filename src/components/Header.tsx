import React, { useRef } from 'react';
import Button from './Button';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    // `casusElement` referansının HTMLDivElement olduğunu belirtiyoruz
    const casusElement = useRef<HTMLDivElement>(null);

    const navbariAc = () => {
        // `casusElement.current` null olabilir, bu yüzden kontrol edelim
        if (casusElement.current) {
            casusElement.current.classList.add('aktiv');
        }
    };

    const navbariBagla = () => {
        // `casusElement.current` null olabilir, bu yüzden kontrol edelim
        if (casusElement.current) {
            casusElement.current.classList.remove('aktiv');
        }
    };

    return (
        <div>
            <div className="mobile-menu" ref={casusElement}>
                <FaRegWindowClose className='close-icon text-white' onClick={navbariBagla} />
                <nav className="mobile-links">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/Blog">Blog</Link>
                    <Link to="/Contact">Contact</Link>
                    
                    <Button inTextBtn="Sign In" shekil="" klassadi="sign-in my-3" />
                </nav>
            </div>
            <nav className="navbar navbar-expand-lg my-background">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/assets/images/header/logo.svg" alt="" className='logo' />
                    </Link>
                    <button
                        onClick={navbariAc}
                        className="navbar-toggler text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FaBars />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white px-4" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white px-4" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white px-4" to="/Services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white px-4" to="/Blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white px-4" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                        <Button inTextBtn="Sign In" shekil="" klassadi="sign-in" />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
