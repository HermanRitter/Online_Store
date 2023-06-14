import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/deviceApi";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')
    const [logoImg, setLogoImg] = useState(null)
    const [historyImg1, setHistoryImg1] = useState(null)
    const [historyImg2, setHistoryImg2] = useState(null)
    const [historyImg3, setHistoryImg3] = useState(null)
    const [historyImg4, setHistoryImg4] = useState(null)

    const selectFile1 = event => {
        setLogoImg(event.target.files[0])
    }
    const selectFile2 = event => {
        setHistoryImg1(event.target.files[0])
    }
    const selectFile3 = event => {
        setHistoryImg2(event.target.files[0])
    }
    const selectFile4 = event => {
        setHistoryImg3(event.target.files[0])
    }
    const selectFile5 = event => {
        setHistoryImg4(event.target.files[0])
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
            onHide()
        })
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
                    Добавить новый бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control value={value}
                              className='mt-3'
                              onChange={event => setValue(event.target.value)}
                              placeholder={'Введите название бренда'}/>
                <Form.Control value={description}
                              className='mt-3'
                              onChange={event => setDescription(event.target.value)}
                              placeholder={'Введите описание бренда'}
                              type={'textarea'}/>
                <Form.Control
                    onChange={selectFile1}
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;