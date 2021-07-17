import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './AccountDropdown';

function Navbartop() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

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
            <nav className='navbartop fixed-top'>
                <div className='navbartop-container'>
                    <ul className='nav-top-menu'>
                        <li className='nav-item'>
                            <Link to='/wishlist' className='navtop-links'><i className="fas fa-globe-americas"></i>
                                / English / USD &nbsp;<i className="dropdown fas fa-caret-down"></i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/wishlist' className='navtop-links'><i className="far fa-heart"></i> &nbsp;
                                Wishlist
                            </Link>
                        </li>
                        <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/login'
                            className='nav-dropdown'
                            onClick={closeMobileMenu}
                        >
                            <i className="fas fa-user"></i>&nbsp;Account &nbsp;<i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbartop