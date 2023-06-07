import React, {useContext} from 'react';
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
import logo from "../../assets/AppImages/ShopImage/logo.png"

const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
//         <header className={styles.header}>
//             <div className={styles.header__box}>
//                 <div className={styles.container}>
//                     <div className={styles.header__top}>
//                         <NavLink to={SHOP_ROUTE} className={styles.header__link}>Store</NavLink>
//                         <div><img className={styles.logo__img} src={logo} alt="Ritter"/></div>
//                         {user.isAuth
//                             ?
//                             <NavLink to={LOGIN_ROUTE} onClick={logOut} className={styles.header__link}>Logout</NavLink>
//                             : <NavLink to={LOGIN_ROUTE} className={styles.header__link}>Login</NavLink>
//                         }
//                 </div>
//             </div>
//         </div>
//     <div className={styles.header__bottom}><p className={styles.header__bottomText}>Ritter & Partners corp.</p>
//     </div>
// </header>
    <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink style={{color: "white"}} to={SHOP_ROUTE}>Store</NavLink>
            {user.isAuth ?
                <Nav className="me-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                    <Button variant={'outline-light'} onClick={logOut} className='ml-2'>Выйти</Button>
                </Nav> :
                <Nav className="me-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
        </Container>
    </Navbar>
)
    ;
});

export default NavBar;