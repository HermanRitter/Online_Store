import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrand, fetchType} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide})   => {
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
    }
    const selectFile2 = event => {
        setFile2(event.target.files[0])
    }
    const selectFile3 = event => {
        setFile3(event.target.files[0])
    }
    const selectFile4 = event => {
        setFile4(event.target.files[0])
    }
    const selectFile5 = event => {
        setFile5(event.target.files[0])
    }
    const selectFile6 = event => {
        setFile6(event.target.files[0])
    }
    const selectFile7 = event => {
        setFile7(event.target.files[0])
    }
    const selectFile8 = event => {
        setFile8(event.target.files[0])
    }
    const selectFile9 = event => {
        setFile9(event.target.files[0])
    }
    const selectFile10 = event => {
        setFile10(event.target.files[0])
    }
    const selectColor = event => {
        setImgColor(event.target.files[0])
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
        createDevice(formData).then(data => onHide())

    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>{device.selectedBrand.name || 'Выбериет бренд'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={event => setName(event.target.value)}
                        className='mt-3'
                        placeholder='Введите название устройтва'/>
                    <Form.Control
                        value={model}
                        onChange={event => setModel(event.target.value)}
                        className='mt-3'
                        placeholder='Введите название модель'/>
                    <Form.Control
                        value={price}
                        onChange={event => setPrice(Number(event.target.value))}
                        className='mt-3'
                        placeholder='Введите стоимость устройства'
                        type='number'/>
                    <Form.Control
                        value={year}
                        onChange={event => setYear(event.target.value)}
                        className='mt-3'
                        placeholder='Введите год производства устройства'/>
                    <Form.Control
                        value={body}
                        onChange={event => setBody(event.target.value)}
                        className='mt-3'
                        placeholder='Введите тип кузова устройства'/>
                    <Form.Control
                        value={engine}
                        onChange={event => setEngine(event.target.value)}
                        className='mt-3'
                        placeholder='Введите Объем двигателя устройства'/>
                    <Form.Control
                        value={drive}
                        onChange={event => setDrive(event.target.value)}
                        className='mt-3'
                        placeholder='Введите тип привода устройства'/>
                    <Form.Control
                        value={wheel}
                        onChange={event => setWheel(event.target.value)}
                        className='mt-3'
                        placeholder='Введите положение руля устройства'/>
                    <Form.Control
                        value={more}
                        onChange={event => setMore(event.target.value)}
                        className='mt-3'
                        type='textarea'
                        placeholder='Введите подробное описание'/>
                    <Form.Control
                        onChange={selectFile}
                        className='mt-3'
                        type='file'/>
                    <Form.Control
                        onChange={selectFile2}
                        className='mt-3'
                        type='file'/>
                    <Form.Control
                        onChange={selectFile3}
                        className='mt-3'
                        type='file'/>
                    <Form.Control
                        onChange={selectFile4}
                        className='mt-3'
                        type='file'/>
                    <Form.Control
                        onChange={selectFile5}
                        className='mt-3'
                        type='file'/>
                    <Form.Control
                        onChange={selectFile6}
                        className='mt-3'
                        type='file'/>
                    <Form.Control
                        onChange={selectFile7}
                        className='mt-3'
                        type='file'/>
                    <Form.Control
                        onChange={selectFile8}
                        className='mt-3'
                        type='file'/>
                    <Form.Control
                        onChange={selectFile9}
                        className='mt-3'
                        type='file'/>
                    <Form.Control
                        onChange={selectFile10}
                        className='mt-3'
                        type='file'/>
                    <Form.Control
                        onChange={selectColor}
                        className='mt-3'
                        type='file'/>
                    <hr/>
                    <Button variant='outline-dark'
                            onClick={addInfo}>
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row key={i.number} className='mt-4'>
                            <Col md={4}>
                                <Form.Control value={i.title}
                                              onChange={(event) => changeInfo('title', event.target.value, i.number)}
                                              placeholder='Введите название свойства'
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control value={i.description}
                                              onChange={(event) => changeInfo('description', event.target.value, i.number)}
                                              placeholder='Введите описание свойства'
                                />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(i.number)} variant='outline-danger'>
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;