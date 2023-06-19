import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrand, fetchType} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";
import styles from "./modals.module.css";
import {inputChanger} from "./inputChanger";
import addImage from "../../assets/AppImages/AdminImages/add1.png";

const CreateDevice = observer(({carModal, closeModal}) => {
    useEffect(() => {
        fetchType().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrands(data))
    }, [])

    const {device} = useContext(Context)
    const [name, setName] = useState('')

    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [drive, setDrive] = useState('')
    const [body, setBody] = useState('')
    const [engine, setEngine] = useState('')
    const [wheel, setWheel] = useState('')
    const [more, setMore] = useState('')

    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    const [file2, setFile2] = useState(null)
    const [file3, setFile3] = useState(null)
    const [file4, setFile4] = useState(null)
    const [file5, setFile5] = useState(null)
    const [file6, setFile6] = useState(null)
    const [file7, setFile7] = useState(null)
    const [file8, setFile8] = useState(null)
    const [file9, setFile9] = useState(null)
    const [file10, setFile10] = useState(null)
    const [imgColor, setImgColor] = useState(null)

    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const selectFile = event => {
        setFile(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile2 = event => {
        setFile2(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile3 = event => {
        setFile3(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile4 = event => {
        setFile4(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile5 = event => {
        setFile5(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile6 = event => {
        setFile6(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile7 = event => {
        setFile7(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile8 = event => {
        setFile8(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile9 = event => {
        setFile9(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectFile10 = event => {
        setFile10(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const selectColor = event => {
        setImgColor(event.target.files[0])
        inputChanger(event.target, event.target.files.length)
    }
    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)

        formData.append('model', model)
        formData.append('year', year)
        formData.append('body', body)
        formData.append('drive', drive)
        formData.append('engine', engine)
        formData.append('wheel', wheel)
        formData.append('more', more)

        formData.append('price', `${price}`)
        formData.append('img1', file)
        formData.append('img2', file2)
        formData.append('img3', file3)
        formData.append('img4', file4)
        formData.append('img5', file5)
        formData.append('img6', file6)
        formData.append('img7', file7)
        formData.append('img8', file8)
        formData.append('img9', file9)
        formData.append('img10', file10)
        formData.append('imgColor', imgColor)

        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => {
            closeModal(carModal)
        })

    }

    const openDropDownMenu = (event) => {
        let svg = event.target.firstElementChild.firstElementChild
        console.log(event.target)
        console.log(Array.from(event.target.nextElementSibling.classList))
        let classList = Array.from(event.target.nextElementSibling.classList)
        if (classList.includes('active')) {
            console.log(event.target)
            event.target.nextElementSibling.style.opacity = '0';
            svg.style.rotate = '-90deg'
            event.target.nextElementSibling.classList.remove('active')
            setTimeout(() => {
                event.target.nextElementSibling.style.display = 'block';
            }, 400)
        } else {
            console.log(event.target.nextElementSibling)
            event.target.nextElementSibling.classList.add('active')
            event.target.nextElementSibling.style.display = 'block';
            setTimeout(() => {
            svg.style.rotate = '0deg'
                event.target.nextElementSibling.style.opacity = '100%';
            })
        }


    }

    return (<form className={styles.form}>
        <div onClick={() => closeModal(carModal)} className={styles.formCloseBtn}></div>
        <div className={styles.formTittleBox}>
            <h1 className={styles.formTittle}>
                Add Car
            </h1>
        </div>
        <div className={styles.formInputsBox}>
            <div className='d-flex justify-content-between '>
                {/*<Dropdown>*/}
                {/*    <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>*/}
                {/*    <Dropdown.Menu>*/}
                {/*        {device.types.map(type => <Dropdown.Item onClick={() => device.setSelectedType(type)}*/}
                {/*                                                 key={type.id}>{type.name}</Dropdown.Item>)}*/}
                {/*    </Dropdown.Menu>*/}
                {/*</Dropdown>*/}
                {/*<Dropdown>*/}
                {/*    <Dropdown.Toggle>{device.selectedBrand.name || 'Выбериет бренд'}</Dropdown.Toggle>*/}
                {/*    <Dropdown.Menu>*/}
                {/*        {device.brands.map(brand => <Dropdown.Item onClick={() => device.setSelectedBrand(brand)}*/}
                {/*                                                   key={brand.id}>{brand.name}</Dropdown.Item>)}*/}
                {/*    </Dropdown.Menu>*/}
                {/*</Dropdown>*/}
                <div className={styles.dropDown}>
                    <button onClick={(event) => openDropDownMenu(event)}
                            className={styles.dropDownToggle}
                            type='button'>{device.selectedType.name || 'Select Type'}
                        <span onClick={(event) => {event.stopPropagation()}}>
                                <svg className={styles.dropDownImg} width="46" height="33" viewBox="0 0 46 33"
                                     fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M26.9307 31.0002C24.9288 33.5466 21.0712 33.5466 19.0693 31.0002L1.64755 8.84023C-0.93145 5.5598 1.40544 0.75 5.57827 0.75H40.4217C44.5946 0.75 46.9314 5.55981 44.3524 8.84024L26.9307 31.0002Z"
    fill="#FFE4C4"/>
</svg>


</span>
                    </button>
                    <div className={styles.dropDownMenu}>
                        {device.types.map(type => <div
                            className={styles.dropDownMenuItem}
                            onClick={() => device.setSelectedType(type)}
                            key={type.id}>{type.name}</div>)}
                    </div>
                </div>
                <div className={styles.dropDown}>
                    <button onClick={(event) => openDropDownMenu(event)}
                            className={styles.dropDownToggle}
                            type='button'>{device.selectedBrand.name || 'Select Brand'}
                        <span onClick={(event) => {event.stopPropagation()}}>
                                <svg className={styles.dropDownImg} width="46" height="33" viewBox="0 0 46 33"
                                     fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M26.9307 31.0002C24.9288 33.5466 21.0712 33.5466 19.0693 31.0002L1.64755 8.84023C-0.93145 5.5598 1.40544 0.75 5.57827 0.75H40.4217C44.5946 0.75 46.9314 5.55981 44.3524 8.84024L26.9307 31.0002Z"
    fill="#FFE4C4"/>
</svg>


</span>
                    </button>
                    <div className={styles.dropDownMenu}>
                        {device.brands.map(brand => <div
                            className={styles.dropDownMenuItem}
                            onClick={() => device.setSelectedBrand(brand)}
                            key={brand.id}>{brand.name}</div>)}
                    </div>
                </div>
            </div>
            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Car name:</p>
                <input className={styles.formInputText + ' ' + styles.formInput} value={name}
                       onChange={event => setName(event.target.value)}
                       placeholder={'Введите название авто'}/>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Car Brand:</p>
                <input className={styles.formInputText + ' ' + styles.formInput} value={model}
                       onChange={event => setModel(event.target.value)}
                       placeholder={'Введите название модели'}/>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Car Price:</p>
                <input className={styles.formInputText + ' ' + styles.formInput} value={price}
                       onChange={event => setPrice(Number(event.target.value))}
                       placeholder={'Введите цену авто'}/>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Year of Issue:</p>
                <input className={styles.formInputText + ' ' + styles.formInput} value={year}
                       onChange={event => setYear(event.target.value)}
                       placeholder={'Введите год производства авто'}/>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Type of Body:</p>
                <input className={styles.formInputText + ' ' + styles.formInput} value={body}
                       onChange={event => setBody(event.target.value)}
                       placeholder={'Введите тип кузова авто'}/>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Engine of copasity:</p>
                <input className={styles.formInputText + ' ' + styles.formInput} value={engine}
                       onChange={event => setEngine(event.target.value)}
                       placeholder={'Введите Объем двигателя авто'}/>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Type of Drive:</p>
                <input className={styles.formInputText + ' ' + styles.formInput} value={drive}
                       onChange={event => setDrive(event.target.value)}
                       placeholder={'Введите тип привода авто'}/>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Wheel side:</p>
                <input className={styles.formInputText + ' ' + styles.formInput} value={wheel}
                       onChange={event => setWheel(event.target.value)}
                       placeholder={'Введите тип привода авто'}/>
            </div>

            <div className={styles.formInputBox + ' ' + styles.formInputBoxTextArea}>
                <p className={styles.formInputTittle}>More about car:</p>
                <textarea className={styles.formInputText + ' ' + styles.formInputTextArea} value={more}
                       onChange={event => setMore(event.target.value)}
                       placeholder={'Введите тип привода авто'}/>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Image 1:</p>
                <div className={styles.input__wrapper}>
                    <input onChange={selectFile}
                           name="file" type="file" id='input__fileDevice1'
                           className={styles.input + ' ' + styles.input__file} multiple/>
                    <label htmlFor="input__fileDevice1" className={styles.input__file_button}>
                        <span className={styles.input__file_button_text}>Выберите файл</span>
                    </label>
                </div>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Image 2:</p>
                <div className={styles.input__wrapper}>
                    <input onChange={selectFile2}
                           name="file" type="file" id='input__fileDevice2'
                           className={styles.input + ' ' + styles.input__file} multiple/>
                    <label htmlFor="input__fileDevice2" className={styles.input__file_button}>
                        <span className={styles.input__file_button_text}>Выберите файл</span>
                    </label>
                </div>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Image 3:</p>
                <div className={styles.input__wrapper}>
                    <input onChange={selectFile3}
                           name="file" type="file" id='input__fileDevice3'
                           className={styles.input + ' ' + styles.input__file} multiple/>
                    <label htmlFor="input__fileDevice3" className={styles.input__file_button}>
                        <span className={styles.input__file_button_text}>Выберите файл</span>
                    </label>
                </div>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Image 4:</p>
                <div className={styles.input__wrapper}>
                    <input onChange={selectFile4}
                           name="file" type="file" id='input__fileDevice4'
                           className={styles.input + ' ' + styles.input__file} multiple/>
                    <label htmlFor="input__fileDevice4" className={styles.input__file_button}>
                        <span className={styles.input__file_button_text}>Выберите файл</span>
                    </label>
                </div>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Image 5:</p>
                <div className={styles.input__wrapper}>
                    <input onChange={selectFile5}
                           name="file" type="file" id='input__fileDevice5'
                           className={styles.input + ' ' + styles.input__file} multiple/>
                    <label htmlFor="input__fileDevice5" className={styles.input__file_button}>
                        <span className={styles.input__file_button_text}>Выберите файл</span>
                    </label>
                </div>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Image 6:</p>
                <div className={styles.input__wrapper}>
                    <input onChange={selectFile6}
                           name="file" type="file" id='input__fileDevice6'
                           className={styles.input + ' ' + styles.input__file} multiple/>
                    <label htmlFor="input__fileDevice6" className={styles.input__file_button}>
                        <span className={styles.input__file_button_text}>Выберите файл</span>
                    </label>
                </div>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Image 7:</p>
                <div className={styles.input__wrapper}>
                    <input onChange={selectFile7}
                           name="file" type="file" id='input__fileDevice7'
                           className={styles.input + ' ' + styles.input__file} multiple/>
                    <label htmlFor="input__fileDevice7" className={styles.input__file_button}>
                        <span className={styles.input__file_button_text}>Выберите файл</span>
                    </label>
                </div>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Image 8:</p>
                <div className={styles.input__wrapper}>
                    <input onChange={selectFile8}
                           name="file" type="file" id='input__fileDevice8'
                           className={styles.input + ' ' + styles.input__file} multiple/>
                    <label htmlFor="input__fileDevice8" className={styles.input__file_button}>
                        <span className={styles.input__file_button_text}>Выберите файл</span>
                    </label>
                </div>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Image 9:</p>
                <div className={styles.input__wrapper}>
                    <input onChange={selectFile9}
                           name="file" type="file" id='input__fileDevice9'
                           className={styles.input + ' ' + styles.input__file} multiple/>
                    <label htmlFor="input__fileDevice9" className={styles.input__file_button}>
                        <span className={styles.input__file_button_text}>Выберите файл</span>
                    </label>
                </div>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Image 10:</p>
                <div className={styles.input__wrapper}>
                    <input onChange={selectFile10}
                           name="file" type="file" id='input__fileDevice10'
                           className={styles.input + ' ' + styles.input__file} multiple/>
                    <label htmlFor="input__fileDevice10" className={styles.input__file_button}>
                        <span className={styles.input__file_button_text}>Выберите файл</span>
                    </label>
                </div>
            </div>

            <div className={styles.formInputBox}>
                <p className={styles.formInputTittle}>Image of Color:</p>
                <div className={styles.input__wrapper}>
                    <input onChange={selectColor}
                           name="file" type="file" id='input__selectColor'
                           className={styles.input + ' ' + styles.input__file} multiple/>
                    <label htmlFor="input__selectColor" className={styles.input__file_button}>
                        <span className={styles.input__file_button_text}>Выберите файл</span>
                    </label>
                </div>
            </div>

            {/*<hr/>*/}
            {/*<Button variant='outline-dark'*/}
            {/*        onClick={addInfo}>*/}
            {/*    Добавить новое свойство*/}
            {/*</Button>*/}
            {/*{info.map(i =>*/}
            {/*    <Row key={i.number} className='mt-4'>*/}
            {/*        <Col md={4}>*/}
            {/*            <Form.Control value={i.title}*/}
            {/*                          onChange={(event) => changeInfo('title', event.target.value, i.number)}*/}
            {/*                          placeholder='Введите название свойства'*/}
            {/*            />*/}
            {/*        </Col>*/}
            {/*        <Col md={4}>*/}
            {/*            <Form.Control value={i.description}*/}
            {/*                          onChange={(event) => changeInfo('description', event.target.value, i.number)}*/}
            {/*                          placeholder='Введите описание свойства'*/}
            {/*            />*/}
            {/*        </Col>*/}
            {/*        <Col md={4}>*/}
            {/*            <Button onClick={() => removeInfo(i.number)} variant='outline-danger'>*/}
            {/*                Удалить*/}
            {/*            </Button>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*)}*/}
        </div>
        <div className={styles.FormButtonsBox}>
            <button type='button' className={styles.formBtn} onClick={addDevice}>
                <img src={addImage} className={styles.formBtnImg} alt="add"/>
            </button>
        </div>
    </form>)
});

export default CreateDevice;