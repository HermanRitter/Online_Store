import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import ListGroup from 'react-bootstrap/ListGroup';


const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    key={type.id}
                    style={{cursor: 'pointer'}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                >
                    {type.name}
                </ListGroup.Item>)}
        </ListGroup>
    );
});

export default TypeBar;