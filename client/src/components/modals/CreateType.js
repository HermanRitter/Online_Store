import React, {useRef, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../../http/deviceApi";
import styles from "./modals.module.css"
import addImage from "../../assets/AppImages/AdminImages/add1.png"
import {inputChanger} from "./inputChanger";


const CreateType = ({closeModal, typeModal}) => {
    const [value, setValue] = useState('')
    const [img1, setImage1] = useState(null)
    const [img2, setImage2] = useState(null)






    const selectFile1 = event => {
        setImage1(event.target.files[0])
        console.log(event.target.files.length)
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile2 = event => {
        setImage2(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }

    const addType = () => {
        const formData = new FormData()

        formData.append("name", value)
        formData.append("img1", img1)
        formData.append("img2", img2)

        createType(formData).then(data => {
            setValue('')
            closeModal(typeModal)
        })
    }

    return (

        <form className={styles.form}>
            <div onClick={() => closeModal(typeModal)} className={styles.formCloseBtn}></div>
            <div className={styles.formTittleBox}>
                <h1 className={styles.formTittle}>
                    Add Type
                </h1>
            </div>
            <div className={styles.formInputsBox}>
                <div className={styles.formInputBox}>
                    <p className={styles.formInputTittle}>Type name:</p>
                    <input className={styles.formInputText + ' ' + styles.formInput} value={value}
                           onChange={event => setValue(event.target.value)}
                           placeholder={'Введите название типа'}/>
                </div>
                <div className={styles.formInputBox}>
                    <p className={styles.formInputTittle}>Bisque logo:</p>
                    <div className={styles.input__wrapper}>
                        <input onChange={selectFile1}
                               name="file" type="file" id='input__fileType1'
                               className={styles.input + ' ' + styles.input__file} multiple/>
                        <label htmlFor="input__fileType1" className={styles.input__file_button}>
                            <span className={styles.input__file_button_text}>Выберите файл</span>
                        </label>
                    </div>
                </div>
                <div className={styles.formInputBox}>
                    <p className={styles.formInputTittle}>Black logo:</p>
                    <div className={styles.input__wrapper}>
                        <input onChange={selectFile2}
                               name="file" type="file" id='input__fileType2'
                               className={styles.input + ' ' + styles.input__file} multiple/>
                        <label htmlFor="input__fileType2" className={styles.input__file_button}>
                            <span className={styles.input__file_button_text}>Выберите файл</span>
                        </label>
                    </div>
                </div>

            </div>
            <div className={styles.FormButtonsBox}>
                <button className={styles.formBtn} onClick={addType}>
                    <img src={addImage} className={styles.formBtnImg} alt="add"/>
                </button>
            </div>
        </form>
        // <Modal
        //     show={show}
        //     onHide={onHide}
        //     size="lg"
        //     centered
        // >
        //     <Modal.Header closeButton>
        //         <Modal.Title id="contained-modal-title-vcenter">
        //             Добавить новый тип
        //         </Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         <Form.Control value={value}
        //                       onChange={event => setValue(event.target.value)}
        //                       placeholder={'Введите название типа'}/>
        //         <Form.Control
        //             onChange={selectFile1}
        //             className='mt-3'
        //             type='file'/>
        //         <Form.Control
        //             onChange={selectFile2}
        //             className='mt-3'
        //             type='file'/>
        //     </Modal.Body>
        //     <Modal.Footer>
        //         <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
        //         <Button variant={'outline-success'} onClick={addType}>Добавить</Button>
        //     </Modal.Footer>
        // </Modal>
    );
};

export default CreateType;