import React, {useContext, useRef} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ListGroup from 'react-bootstrap/ListGroup';
import styles from "./TypeBar.module.css"
import Exclusive from "../../assets/AppImages/ShopImage/Exclusive.png"
import Super from "../../assets/AppImages/ShopImage/Super.png"
import Sport from "../../assets/AppImages/ShopImage/Sport.png"
import SUV from "../../assets/AppImages/ShopImage/SUV.png"
import Electro from "../../assets/AppImages/ShopImage/Electro.png"
import ExclusiveBlack from "../../assets/AppImages/ShopImage/ExclusiveB.png"
import SuperBlack from "../../assets/AppImages/ShopImage/SuperB.png"
import SUVBlack from "../../assets/AppImages/ShopImage/SUVB.png"
import SportBlack from "../../assets/AppImages/ShopImage/SportB.png"
import ElectroBlack from "../../assets/AppImages/ShopImage/ElectroB.png"

const TypeBar = observer(() => {
    const {device} = useContext(Context)


    // const transformBtn = function (event, sec, margin, scale) {
    //     event.target.style.transition = `all ${sec}s`
    //     event.target.style.marginLeft = `${margin}px`
    //     event.target.style.transform = `scale(${scale})`
    // }
    //
    // const setScale = function (event) {
    //     return transformBtn(event, 0.4, 30, 1.4)
    // }
    // const deleteScale = function (event) {
    //     return transformBtn(event, 0.4, 0, 1.0)
    // }
    //
    // let button = useRef()
    // let btn1 = useRef()
    // let btn2 = useRef()
    // let btn3 = useRef()
    // let btn4 = useRef()
    // let btn5 = useRef()
    // let buttons = [btn1, btn2, btn3, btn4, btn5,]
    // let buttonsMap = new Map()
    // buttonsMap.set(Exclusive, btn1);
    // buttonsMap.set(Super, btn2);
    // buttonsMap.set(Sport, btn3);
    // buttonsMap.set(SUV, btn4);
    // buttonsMap.set(Electro, btn5);
    //
    //
    // setTimeout(() => {
    //     for (let btn of buttons) {
    //         btn.current.onmouseover = function (event) {
    //             setScale(event)
    //         }
    //         btn.current.onmouseout = function (event) {
    //             deleteScale(event)
    //         }
    //     }
    // })
    //
    // function setTransform(event, img) {
    //     for (let btn of buttonsMap) {
    //         console.log(btn[0])
    //         let classArray = Array.from(btn[1].current.classList)
    //         if (classArray.includes("itemVehicleImgActive")) {
    //             btn[1].current.style.transition = 'all 0.4s'
    //             btn[1].current.style.backgroundColor = 'black'
    //             btn[1].current.src = btn[0]
    //             btn[1].current.style.borderRight = '0px'
    //             btn[1].current.style.marginLeft = '0'
    //             btn[1].current.style.transform = 'scale(1.0)'
    //             btn[1].current.classList.remove('itemVehicleImgActive')
    //             btn[1].current.style.zIndex = '0'
    //             btn[1].current.onmouseover = function (event) {
    //                 setScale(event)
    //             }
    //             btn[1].current.onmouseout = function (event) {
    //                 deleteScale(event)
    //             }
    //             button.current.style.fontSize = '0';
    //         }
    //     }
    //
    //
    //     event.target.onmouseover = null
    //     event.target.onmouseout = null
    //     let carBtn
    //     carBtn = event.target
    //     carBtn.classList.add('itemVehicleImgActive')
    //     console.log(carBtn.classList)
    //     carBtn.style.backgroundColor = 'bisque'
    //     carBtn.style.zIndex = '2'
    //     carBtn.src = img
    //     carBtn.style.borderRight = '2px solid black'
    //     carBtn.style.marginLeft = '39px'
    //     carBtn.style.transform = 'scale(1.4)'
    //     button.className = 'navbarButtonActive'
    //     button.current.style.position = 'absolute'
    //     button.current.style.zIndex = '0'
    //     button.current.style.left = '65px'
    //
    //     button.current.style.height = '105px'
    //     button.current.style.transition = 'all 0.4s'
    //     button.current.style.top = `${carBtn.offsetTop - 14}px`
    //     button.current.style.backgroundColor = 'bisque'
    //     button.current.style.color = 'transparent'
    //     button.current.style.fontSize = '16px'
    //     setTimeout(() => {
    //         button.current.style.color = 'black'
    //         button.current.innerHTML = carBtn.id
    //     },200)
    //     button.current.style.borderTop = '4px solid bisque';
    //     button.current.style.borderBottom = '4px solid bisque';
    //     button.current.style.borderRight = '4px solid bisque';
    //     button.current.style.textDecoration = 'underline'
    //     button.current.style.paddingLeft = '33px'
    //     button.current.style.width = '210px'
    // }


    return (
        // <div>
        //     <div className={styles.itemBord}>
        //         <button ref={button} className={styles.itemBordButton} type="button"></button>
        //         <img ref={btn1}
        //              onMouseUp={(event) => setTransform(event, ExclusiveBlack)}
        //              id="Exclusive"
        //              src={Exclusive}
        //              alt=""
        //              className={styles.itemVehicleImg}/>
        //         <img
        //             ref={btn2}
        //             onMouseUp={(event) => setTransform(event, SuperBlack)}
        //             id="Super"
        //             src={Super}
        //             alt=""
        //             className={styles.itemVehicleImg}/>
        //         <img
        //             ref={btn3}
        //             onMouseUp={(event) => setTransform(event, SportBlack)}
        //             id="Sport"
        //             src={Sport}
        //             alt=""
        //             className={styles.itemVehicleImg}/>
        //         <img
        //             ref={btn4}
        //             onMouseUp={(event) => setTransform(event, SUVBlack)}
        //             id="SUV"
        //             src={SUV}
        //             alt=""
        //             className={styles.itemVehicleImg}/>
        //         <img
        //             ref={btn5}
        //             onMouseUp={(event) => setTransform(event, ElectroBlack)}
        //             id="Electro"
        //             src={Electro}
        //             alt=""
        //             className={styles.itemVehicleImg}/>
        //     </div>
        // </div>
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