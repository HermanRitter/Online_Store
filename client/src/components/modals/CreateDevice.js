import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrand, fetchDevices, fetchType} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide})   => {
    useEffect(() => {
        fetchType().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrands(data))
    }, [])

    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
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
    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
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
                        value={price}
                        onChange={event => setPrice(Number(event.target.value))}
                        className='mt-3'
                        placeholder='Введите стоимость устройства'
                        type='number'/>
                    <Form.Control
                        onChange={selectFile}
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