import React, {useContext, useRef} from 'react';
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import DeviceItem from "../DeviceItem/DeviceItem";
import {observer} from "mobx-react-lite";
import styles from "./DeviceList.module.css"
import Pages from "../Pages/Pages";

const DeviceList = observer(() => {
    const {device} = useContext(Context)


    return (
        <div>
            <div className={styles.storeScrollerBox}>
                {device.devices.map(device => <DeviceItem key={device.id} device={device}/>)}
                {device.devices.length === 0 &&
                    <h1 className={styles.storeScrollerBoxText}>The car in this section does not yet exist...</h1>
                }
            </div>
        </div>
    );
});

export default DeviceList;