import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import CreateBrand from "../../components/modals/CreateBrand";
import CreateDevice from "../../components/modals/CreateDevice";
import CreateType from "../../components/modals/CreateType";
import styles from "./Admin.module.css"
import brandImage from "../../assets/AppImages/AdminImages/teslaLogo.png"
import TypeImage from "../../assets/AppImages/AdminImages/Electro.png"
import carImage from "../../assets/AppImages/AdminImages/tesla 11.png"
import addImage from "../../assets/AppImages/AdminImages/add1.png"

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        // <div className={styles.main}>
        //     <div className={styles.container}>
        //         <div className={styles.adminBox}>
        //             <div className={styles.adminItem}>
        //                 <div className={styles.adminItemBox}>
        //                     <h1 className={styles.adminItemTittle}>Type</h1>
        //                     <img className={styles.adminImage + ' ' + styles.adminImageType} src={TypeImage} alt="type"/>
        //                 </div>
        //                 <button className={styles.adminButton}>
        //                     <img className={styles.adminButtonImg} src={addImage} alt=""/>
        //                 </button>
        //             </div>
        //             <div className={styles.adminItem}>
        //                 <div className={styles.adminItemBox}>
        //                     <h1 className={styles.adminItemTittle}>Car</h1>
        //                     <img className={styles.adminImage} src={carImage} alt="type"/>
        //                 </div>
        //                 <button className={styles.adminButton}>
        //                     <img className={styles.adminButtonImg} src={addImage} alt=""/>
        //                 </button>
        //             </div>
        //             <div className={styles.adminItem}>
        //                 <div className={styles.adminItemBox}>
        //                     <h1 className={styles.adminItemTittle}>Brand</h1>
        //                     <img className={styles.adminImage + ' ' + styles.adminImageBrand} src={brandImage} alt="type"/>
        //                 </div>
        //                 <button className={styles.adminButton}>
        //                     <img className={styles.adminButtonImg}  src={addImage} alt=""/>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setTypeVisible(true)}>
                Добавить тип
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setBrandVisible(true)}>
                Добавить бренд
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setDeviceVisible(true)}>
                Добавить устройство
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;