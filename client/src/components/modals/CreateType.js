import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../../http/deviceApi";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [img1, setImage1] = useState(null)
    const [img2, setImage2] = useState(null)

    const selectFile1 = event => {
        setImage1(event.target.files[0])
    }
    const selectFile2 = event => {
        setImage2(event.target.files[0])
    }

    const addType = () => {
        const formData = new FormData()

        formData.append("name", value)
        formData.append("img1", img1)
        formData.append("img2", img2)

        createType(formData).then(data => {
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
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control value={value}
                              onChange={event => setValue(event.target.value)}
                              placeholder={'Введите название типа'}/>
                <Form.Control
                    onChange={selectFile1}
                    className='mt-3'
                    type='file'/>
                <Form.Control
                    onChange={selectFile2}
                    className='mt-3'
                    type='file'/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-success'} onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;