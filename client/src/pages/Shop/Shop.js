import React, {useContext, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Form,} from "react-bootstrap";
import TypeBar from "../../components/TypeBar/TypeBar";
import BrandBar from "../../components/BrandBar/BrandBar";
import DeviceList from "../../components/DeviceList/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchBrand, fetchDevices, fetchType} from "../../http/deviceApi";
import Pages from "../../components/Pages/Pages";
import logo from "../../assets/AppImages/ShopImage/logo.png"
import styles from "./Shop.module.css"
import ShopLocation from "../../components/ShopLocation/ShopLocation";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchType().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 9).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 9).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand])
    return (
        <div className={styles.storeMap}>
            <div className={styles.container}>
                <div className={styles.storeTop}>
                    <div className={styles.storeNavbar}>
                        <div className={styles.storeNavbarLogo}>
                            <img className={styles.scrollerLogoImg} src={logo} alt="Ritter"/>
                            <div className={styles.navbarLogoText}>
                                <h4>Ritter</h4>
                                <h4>&</h4>
                                <h4>Partners</h4>
                            </div>
                        </div>
                        <TypeBar/>
                    </div>
                    <div className={styles.storeScroller}>
                        <BrandBar/>
                        <DeviceList/>
                        <Pages/>
                    </div>
                </div>
            <ShopLocation/>
            </div>
        </div>

    );
});

export default Shop;