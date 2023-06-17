import React, {useRef, useState} from 'react';
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
    const [deviceVisible, setDeviceVisible] = useState(false)

    const typeModal = useRef()
    const carModal = useRef()
    const brandModal = useRef()

    function openModal(modal) {
        console.log(modal.current)
        modal.current.onmouseup = function (event) {
            if (event.target === modal.current) {
                closeModal(modal)
            }
        }
        modal.current.style.display = 'block'
        setTimeout(() => {
            modal.current.style.opacity = '100%'
        })
    }

    function closeModal(modal) {
        console.log(modal)
        modal.current.style.opacity = '0'
        setTimeout(() => {
            modal.current.style.display = 'none'
        }, 300)
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.adminBox}>
                    <div className={styles.adminItem}>
                        <div className={styles.adminItemBox}>
                            <h1 className={styles.adminItemTittle}>Type</h1>
                            <img className={styles.adminImage + ' ' + styles.adminImageType} src={TypeImage}
                                 alt="type"/>
                        </div>
                        <button onClick={() => openModal(typeModal)} className={styles.adminButton}>
                            <img className={styles.adminButtonImg} src={addImage} alt=""/>
                        </button>
                    </div>
                    <div className={styles.adminItem}>
                        <div className={styles.adminItemBox}>
                            <h1 className={styles.adminItemTittle}>Car</h1>
                            <img className={styles.adminImage} src={carImage} alt="type"/>
                        </div>
                        <button onClick={() => openModal(carModal)} className={styles.adminButton}>
                            <img className={styles.adminButtonImg} src={addImage} alt=""/>
                        </button>
                    </div>
                    <div className={styles.adminItem}>
                        <div className={styles.adminItemBox}>
                            <h1 className={styles.adminItemTittle}>Brand</h1>
                            <img className={styles.adminImage + ' ' + styles.adminImageBrand} src={brandImage}
                                 alt="type"/>
                        </div>
                        <button onClick={() => openModal(brandModal)} className={styles.adminButton}>
                            <img className={styles.adminButtonImg} src={addImage} alt=""/>
                        </button>
                    </div>
                </div>
                <div ref={brandModal} className={styles.modalWrapper}>
                    <div className={styles.typeModal}>
                        <CreateBrand closeModal={closeModal} brandModal={brandModal}/>
                    </div>
                </div>
                <div ref={carModal} className={styles.modalWrapper}>
                    <div className={styles.typeModal}>
                        <CreateDevice closeModal={closeModal} carModal={carModal}/>
                    </div>
                </div>
                <div ref={typeModal} className={styles.modalWrapper}>
                    <div className={styles.typeModal}>
                        <CreateType closeModal={closeModal} typeModal={typeModal}/>
                    </div>
                </div>
            </div>
        </div>
        // <Container className='d-flex flex-column'>
        // <Button variant={'outline-dark'} className='mt-2' onClick={() => setTypeVisible(true)}>
        // Добавить тип
        // </Button>
        // <Button variant={'outline-dark'} className='mt-2' onClick={() => setBrandVisible(true)}>
        // Добавить бренд
        // </Button>
        // <Button variant={'outline-dark'} className='mt-2' onClick={() => setDeviceVisible(true)}>
        // Добавить устройство
        // </Button>
        // <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
        // <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        // <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        // </Container>
    );
};

export default Admin;