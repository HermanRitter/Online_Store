import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import {NavLink, useNavigate} from "react-router-dom";
import styles from "./NavBar.module.css"
import styleContainer from "../../style.css"
import logoImg from "../../assets/AppImages/ShopImage/logo.png"
import {adminBtnChanger} from "./NavBarAdminBtn";

const NavBar = ({admin}) => {
    const navigate = useNavigate()
    let {user} = useContext(Context)
    const adminBtn = useRef()
    const logo = useRef()
    const adminBtnText = useRef()


    useEffect(() => {
        adminBtnChanger(user.admin, adminBtn.current, adminBtnText.current, logo.current)
    }, [admin])

    const logOut = () => {
        if (user.admin === 'ADMIN') {
            setTimeout(() => {
                adminBtnText.current.style.opacity = '0'

            }, 500)
            setTimeout(() => {
                adminBtn.current.style.width = '90px'
                adminBtn.current.style.left = '80px'
                adminBtn.current.style.cursor = 'pointer'
                logo.current.style.marginLeft = '80px'
            }, 1000)
            setTimeout(() => {
                adminBtn.current.style.opacity = '0'
            }, 2000)
            setTimeout(() => {
                user.setIsAuth(false)
                user.setAdmin('USER')
            }, 3000)
            user.setUser({})
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.headerBox}>
                <div className={styles.container}>
                    <div className={styles.headerTop}>
                        <NavLink to={SHOP_ROUTE} className={styles.headerLink}>Store</NavLink>
                        <div className={styles.headerLogoBox}>
                            <img ref={logo} className={styles.logoImg} src={logoImg} alt="Ritter"/>
                            {user.admin === 'ADMIN' && user.isAuth &&
                                <div onClick={() => navigate(ADMIN_ROUTE)} ref={adminBtn}
                                     className={styles.headerBottomAdmin}>
                                    <p ref={adminBtnText}
                                       className={styles.headerBottomText + ' ' + styles.headerBottomAdminText}>Admin</p>
                                </div>}
                        </div>
                        {user.isAuth
                            ?
                            <NavLink to={LOGIN_ROUTE} onClick={logOut} className={styles.headerLink}>Logout</NavLink>
                            : <NavLink to={LOGIN_ROUTE} className={styles.headerLink}>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
            <div className={styles.headerBottom}>
                <p className={styles.headerBottomText}>Ritter & Partners corp.</p>
            </div>
        </header>

        // <Navbar bg="dark" variant="dark">
        //     <Container>
        //         <NavLink style={{color: "white"}} to={SHOP_ROUTE}>Store</NavLink>
        //         {user.isAuth ?
        //             <Nav className="me-auto" style={{color: 'white'}}>
        //                 {user.admin === "ADMIN" &&
        //                     <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Админ
        //                         панель</Button>
        //                 }
        //                 <Button variant={'outline-light'} onClick={logOut} className='ml-2'>Выйти</Button>
        //             </Nav> :
        //             <Nav className="me-auto" style={{color: 'white'}}>
        //                 <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
        //             </Nav>
        //         }
        //     </Container>
        // </Navbar>
    );
};

export default NavBar;