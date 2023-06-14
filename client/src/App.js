import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userApi";
import {Spinner} from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import styles from "./style.css"

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            let promise = check().then(data => {
                user.setUser(true)
                user.setIsAuth(true)
                user.setAdmin(data.role)
            }).finally(() => setLoading(false))
        }, 1500)
    }, [])

    if (loading) {
        return (<div style={{height: 100 + 'vh', display: "flex", justifyContent: "center", alignItems: 'center'}}>
                <Spinner style={{height: 100 + 'px', width: 100 + 'px'}} animation={'border'}/>
            </div>
        )
    }

    return (
        <BrowserRouter>
            <NavBar admin={user.admin} />
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    )
})

export default App;
