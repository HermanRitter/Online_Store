import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../../assets/Vector.png"
import {DEVICE_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import styles from "./DeviceItem.module.css"
import image from "../../assets/AppImages/ShopImage/Porsche Carrera gt.webp"

const DeviceItem = ({device}) => {
    const navigate = useNavigate()

    return (
        // <div className={styles.storeScrollerItem}>
        //     <img className={styles.scrollerItemImg} src={image} alt="vehicle"/>
        //     <div className={styles.scrollerItemParams}>
        //         <div className={styles.scrollerItemBrand}>
        //             <p className={styles.scrollerCarBrand}>Porsche</p>
        //             <p className={styles.scrollerCarBrand}>Carrera GT</p>
        //         </div>
        //         <div className={styles.scrollerCarProperties}>
        //             <p className={styles.scrollerCarParams}>speed: 390 km/h</p>
        //             <p className={styles.scrollerCarParams}>power: 619 hp</p>
        //             <p className={styles.scrollerCarParams}>year: 2004</p>
        //             <p className={styles.scrollerCarParams}>color: Space Grey</p>
        //         </div>
        //     </div>
        // </div>
        <Col md={3} className={'mt-3'} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className='d-flex text-black-50 mt-1 justify-content-between align-items-center'>
                    <div>Samsung</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;