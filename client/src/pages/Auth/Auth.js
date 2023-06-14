import React, {useContext, useState} from 'react';
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts";
import {useLocation, useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom"
import {login, registration} from "../../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import styles from "./Auth.module.css"
import bulbOff from "../../assets/AppImages/LoginImages/bulb.png"
import bulbOn from "../../assets/AppImages/LoginImages/bulb1.png"
import Container from "react-bootstrap/Container";
import {Button, Card, Form, Row} from "react-bootstrap";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const [BulbBright, setBright] = useState(false)


    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            if (data.role === 'ADMIN') {
                user.setAdmin('ADMIN')

            } else {
                user.setUser('USER')
            }

            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    function changeImage(event) {
        console.log('click')

        if (!BulbBright) {
            event.target.previousElementSibling.type = 'text'
            event.target.src = bulbOn
            console.log('click')
            setBright(true)
            return
        }
        if (BulbBright) {
            event.target.previousElementSibling.type = 'password'
            event.target.src = bulbOff
            setBright(false)
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.login__box}>
                    <h1 className={styles.login__tittle}>WELCOME</h1>
                    <div className={styles.form__box}>
                        <form action="#" className="login-form">
                            <label>
                                <input type="email"
                                       className={styles.loginInput + ' ' + styles.email}
                                       placeholder="Your email"
                                       value={email}
                                       onChange={e => setEmail((e.target.value))}/>
                            </label>
                            <label className={styles.login__passwordBox}>
                                <input type="password"
                                       className={styles.loginInput}
                                       placeholder="Your password"
                                       value={password}
                                       onChange={e => setPassword((e.target.value))}/>
                                <img onClick={changeImage} src={bulbOff} alt="bulb" className={styles.passwordImg}/>
                            </label>
                        </form>
                        {isLogin ? <NavLink className={styles.registration__link}
                                            to={REGISTRATION_ROUTE}>Tap here for Registration</NavLink> :
                            <NavLink className={styles.registration__link}
                                     to={LOGIN_ROUTE}>Tap here for Login</NavLink>}
                    </div>
                    <div className={styles.login__btnBox}>
                        <button onClick={click}
                                className={styles.login__btn}
                                type="submit">{isLogin ? 'SignIn' : 'SignUp'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        // <Container
        //     className='d-flex justify-content-center align-items-center'
        //     style={{height: window.innerHeight - 54}}>
        //     <Card style={{width: 600}} className='p-5'>
        //         <h2 className='m-auto'>{isLogin ? 'Авториация' : 'Регистрация'}</h2>
        //         <Form className='d-flex flex-column'>
        //             <Form.Control
        //                 className='mt-3'
        //                 placeholder='Введите ваш email...'
        //                 value={email}
        //                 onChange={e => setEmail((e.target.value))}
        //             />
        //             <Form.Control
        //                 className='mt-3'
        //                 placeholder='Введите ваш пароль...'
        //                 value={password}
        //                 onChange={e => setPassword((e.target.value))}
        //                 type='password'
        //             />
        //             <Row className='d-flex align-items-center justify-content-between mt-3 pl-3 pr-3'>
        //                 {isLogin ?
        //                     <div>
        //                         Нет аккаунта?<NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
        //                     </div>
        //                     :
        //                     <div>
        //                         Есть аккаунт?<NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
        //                     </div>}
        //                 <Button variant={'outline-success'} onClick={click}>{
        //                     isLogin ? 'Войти' : 'Регистрация'
        //                 }</Button>
        //             </Row>
        //         </Form>
        //     </Card>
        // </Container>
    )

});

export default Auth;