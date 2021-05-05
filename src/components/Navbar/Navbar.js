import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

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
    const logged = localStorage.getItem("LoggedIn");

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <i class='fas fa-leaf' />
                            Smart<br></br> Outlets
                            </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home </Link>
                        </li>
                        {!logged && <li>
                            <Link to='/signUp' className='nav-links-mobile' onClick={closeMobileMenu} >
                                Sign Up</Link>
                        </li>}
                        {!logged && <li>
                            <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Login</Link>
                        </li>}
                        {logged && <li>
                            <Link to='/outlets' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Outlets</Link>
                        </li>}
                        {logged && <li>
                            <Link to='/logout' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Logout</Link>
                        </li>}
                    </ul>
                        
                            {(button)&&(!logged) && <Button buttonLink='/signUp' buttonStyle='btn--outline'>SIGN UP</Button>}
                            {(button)&&(!logged) && <Button buttonLink='/login' buttonStyle='btn--outline'>LOGIN</Button>}
                            {(button)&&(logged) && <Button buttonLink='/outlets' buttonStyle='btn--outline'>SIGN UP</Button>}
                            {(button)&&(logged) && <Button buttonLink='/logout' buttonStyle='btn--outline--red'>LOGOUT</Button>}
                

                </div>
            </nav>
        </>
    );
}

export default Navbar;
