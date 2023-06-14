import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {adminRoutes, authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    console.log(user.admin === 'ADMIN')
    return (
            <Routes>
                {user.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                {user.admin === 'ADMIN' && adminRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                <Route key={'*'} path={'*'} element={<Navigate to={SHOP_ROUTE}/>}/>
            </Routes>
    )
});

export default AppRouter;