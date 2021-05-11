import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';
import customAxios from "../../util/axios";

function Navbar(props) {
    let history = useHistory();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [logged, setLogged] = useState(localStorage.getItem("LoggedIn"));
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
    const handleLogout = () => {
        const token = localStorage.getItem("refreshToken");
        customAxios
            .post("/users/logout", { token })
            .then(function (response) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                localStorage.setItem("LoggedIn", false);
                setLogged(false);
                console.log(logged);
                history.push("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <i className='fas fa-leaf' />
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
                            <Link to='/logout' className='nav-links-mobile' onClick={() => {
                                handleLogout();
                                closeMobileMenu();
                            }}>
                                Logout</Link>
                        </li>}
                    </ul>

                    {(button) && (!logged) &&  <Link to="/signup"><Button buttonStyle='btn--outline'>SIGN UP</Button></Link>}
                    {(button) && (!logged) && <Link to="/login"><Button buttonStyle='btn--outline' buttonSize='btn--medium--green'>LOGIN</Button></Link>}
                    {(button) && (logged) &&  <Link to="/outlets"><Button buttonStyle='btn--outline'>OUTLETS</Button></Link>}
                    {(button) && (logged) &&  <Link to="/logout"><Button buttonStyle='btn--outline' buttonSize='btn--medium--red' onClick={handleLogout}>LOGOUT</Button></Link>}


                </div>
            </nav>
        </>
    );
}

export default Navbar;
