import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/deviceApi";
import styles from "./modals.module.css";
import addImage from "../../assets/AppImages/AdminImages/add1.png";
import {inputChanger} from "./inputChanger";

const CreateBrand = ({closeModal, brandModal}) => {
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')
    const [logoImg, setLogoImg] = useState(null)
    const [historyImg1, setHistoryImg1] = useState(null)
    const [historyImg2, setHistoryImg2] = useState(null)
    const [historyImg3, setHistoryImg3] = useState(null)
    const [historyImg4, setHistoryImg4] = useState(null)

    const selectFile1 = event => {
        setLogoImg(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile2 = event => {
        setHistoryImg1(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile3 = event => {
        setHistoryImg2(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile4 = event => {
        setHistoryImg3(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile5 = event => {
        setHistoryImg4(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }

    const addBrand = () => {
        const formData = new FormData()

        formData.append('name', value)
        formData.append('description', description)
        formData.append('imgBrand', logoImg)
        formData.append('imgBrandHistory1', historyImg1)
        formData.append('imgBrandHistory2', historyImg2)
        formData.append('imgBrandHistory3', historyImg3)
        formData.append('imgBrandHistory4', historyImg4)

        createBrand(formData).then(data => {
            setValue('')
            closeModal(brandModal)
        })
    }

    return (
        <form className={styles.form}>
            <div onClick={() => closeModal(brandModal)} className={styles.formCloseBtn}></div>
            <div className={styles.formTittleBox}>
                <h1 className={styles.formTittle}>
                    Add Brand
                </h1>
            </div>
            <div className={styles.formInputsBox}>
                <div className={styles.formInputBox}>
                    <p className={styles.formInputTittle}>Name of Brand:</p>
                    <input className={styles.formInputText + ' ' + styles.formInput} value={value}
                           onChange={event => setValue(event.target.value)}
                           placeholder={'Введите название бренда'}/>
                </div>
                <div className={styles.formInputBox + ' ' + styles.formInputBoxTextArea}>
                    <p className={styles.formInputTittle}>Brand History:</p>
                    <textarea className={styles.formInputText + ' ' + styles.formInputTextArea} value={description}
                           onChange={event => setDescription(event.target.value)}
                           placeholder={'Введите описание бренда'}/>
                </div>

                <div className={styles.formInputBox}>
                    <p className={styles.formInputTittle}>Image 1:</p>
                    <div className={styles.input__wrapper}>
                        <input onChange={selectFile1}
                               name="file" type="file" id='input__fileBrand1'
                               className={styles.input + ' ' + styles.input__file} multiple/>
                        <label htmlFor="input__fileBrand1" className={styles.input__file_button}>
                            <span className={styles.input__file_button_text}>Выберите файл</span>
                        </label>
                    </div>
                </div>

                <div className={styles.formInputBox}>
                    <p className={styles.formInputTittle}>Image 2:</p>
                    <div className={styles.input__wrapper}>
                        <input onChange={selectFile2}
                               name="file" type="file" id='input__fileBrand2'
                               className={styles.input + ' ' + styles.input__file} multiple/>
                        <label htmlFor="input__fileBrand2" className={styles.input__file_button}>
                            <span className={styles.input__file_button_text}>Выберите файл</span>
                        </label>
                    </div>
                </div>

                <div className={styles.formInputBox}>
                    <p className={styles.formInputTittle}>Image 3:</p>
                    <div className={styles.input__wrapper}>
                        <input onChange={selectFile3}
                               name="file" type="file" id='input__fileBrand3'
                               className={styles.input + ' ' + styles.input__file} multiple/>
                        <label htmlFor="input__fileBrand3" className={styles.input__file_button}>
                            <span className={styles.input__file_button_text}>Выберите файл</span>
                        </label>
                    </div>
                </div>

                <div className={styles.formInputBox}>
                    <p className={styles.formInputTittle}>Image 4:</p>
                    <div className={styles.input__wrapper}>
                        <input onChange={selectFile4}
                               name="file" type="file" id='input__fileBrand4'
                               className={styles.input + ' ' + styles.input__file} multiple/>
                        <label htmlFor="input__fileBrand4" className={styles.input__file_button}>
                            <span className={styles.input__file_button_text}>Выберите файл</span>
                        </label>
                    </div>
                </div>

                <div className={styles.formInputBox}>
                    <p className={styles.formInputTittle}>Image 5:</p>
                    <div className={styles.input__wrapper}>
                        <input onChange={selectFile5}
                               name="file" type="file" id='input__fileBrand5'
                               className={styles.input + ' ' + styles.input__file} multiple/>
                        <label htmlFor="input__fileBrand5" className={styles.input__file_button}>
                            <span className={styles.input__file_button_text}>Выберите файл</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className={styles.FormButtonsBox}>
                <button type='button' className={styles.formBtn} onClick={addBrand}>
                    <img src={addImage} className={styles.formBtnImg} alt="add"/>
                </button>
            </div>
        </form>
    );
};

export default CreateBrand;