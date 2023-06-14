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
        <div className={styles.storeScrollerItem}
             onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <img className={styles.scrollerItemImg} src={process.env.REACT_APP_API_URL + device.img1} alt="vehicle"/>
            <div className={styles.scrollerItemParams}>
                <div className={styles.scrollerItemBrand}>
                    <p className={styles.scrollerCarBrand}>{device.name}</p>
                    <p className={styles.scrollerCarBrand}>{device.model}</p>
                </div>
                <div className={styles.scrollerCarProperties}>
                    <p className={styles.scrollerCarParams}>Year of issue: {device.year}</p>
                    <p className={styles.scrollerCarParams}>Steering wheel: {device.wheel}</p>
                    <p className={styles.scrollerCarParams}>Сar drive: {device.drive}</p>
                    <p className={styles.scrollerCarParams}>Engine capacity: {device.engine}</p>
                </div>
            </div>
        </div>
        // <Col md={3} className={'mt-3'} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
        //     <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
        //         <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img1}/>
        //         <div className='d-flex text-black-50 mt-1 justify-content-between align-items-center'>
        //             <div>{device.name}</div>
        //             <div className='d-flex align-items-center'>
        //                 <div>{device.rating}</div>
        //                 <Image width={18} height={18} src={star}/>
        //             </div>
        //         </div>
        //         <div>{device.model}</div>
        //     </Card>
        // </Col>
    );
};

export default DeviceItem;