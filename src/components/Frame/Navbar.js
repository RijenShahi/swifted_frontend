import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    const logoutUser = () => {
        localStorage.clear();
        window.location.href = "/login"
    }

    return (
        <>
            <nav className='navbarr'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick=
                        {closeMobileMenu}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>

                <div className="navsearch">
                    <input type="text" placeholder="Search For Products, Brands & Categories..." />
                </div>

                <div className="iconnav">
                    <div className="navicon">
                        <Link to="/wishlist" className="text-black-50">
                            <i className="ni far fa-heart"></i>
                        </Link>
                        <Link to="/mycart" className="text-black-50">
                            <i class="ni fas fa-shopping-cart"></i>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
