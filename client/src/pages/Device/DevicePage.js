import React, {useEffect, useRef, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchBrand, fetchOneDevice} from "../../http/deviceApi";
import yearImage from "../../assets/AppImages/CardIcons/calendar (1).png"
import bodyImage from "../../assets/AppImages/CardIcons/sedan.png"
import engineImage from "../../assets/AppImages/CardIcons/car-engine.png"
import wheelImage from "../../assets/AppImages/CardIcons/steering-wheel.png"
import driveImage from "../../assets/AppImages/CardIcons/car-suspension.png"
import styles from "./DevicePage.module.css"
import DevicePageHistory from "../../components/DevicePageHistory/DevicePageHistory";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))

        let items = track.current.childNodes
        items = Array.prototype.slice.call(items)
        console.log(container.current.clientWidth)
        const itemWidth = container.current.clientWidth / 1;


        items.forEach(function (item) {
            item.style.minWidth = itemWidth + 'px' // `${itemWidth}px`
        });
    }, [])


    let [position, setPosition] = useState(0)
    let container = useRef()
    let track = useRef()

    let btnPrev = useRef()
    let btnNext = useRef()

    function slider(slidesToShow, slidesToScroll, event) {
        let items = track.current.childNodes
        items = Array.prototype.slice.call(items)
        const itemsCount = items.length;
        const itemWidth = container.current.clientWidth / slidesToShow;
        const movePosition = slidesToScroll * itemWidth;

        items.forEach(function (item) {
            item.style.minWidth = itemWidth + 'px' // `${itemWidth}px`
        });

        if (event.target === btnNext.current) {
            console.log(event.target)
            console.log(btnNext.current)
            next(itemWidth, movePosition, slidesToScroll, slidesToShow, itemsCount)
        }
        if (event.target === btnPrev.current) {
            prev(itemWidth, movePosition, slidesToScroll)
        }
        console.log(position)
        track.current.style.transform = 'translateX(' + position + 'px)';
        btnNext.current.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
        btnPrev.current.disabled = position === 0;

    }

    function next(itemWidth, movePosition, slidesToScroll, slidesToShow, itemsCount) {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        setPosition(position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth);
    }

    function prev(itemWidth, movePosition, slidesToScroll) {
        const itemsLeft = Math.abs(position) / itemWidth
        setPosition(position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth);

    }


    return (
        <div className={styles.main}>
            <div>
                <div className={styles.container}>
                    <div className={styles.cardTop}>
                        <div>
                            <h1 className={styles.cardTittle}>{device.name}</h1>
                            <h3 className={styles.cardBrandDescription}>{device.model}</h3>
                        </div>
                        <div>
                            <div className={styles.cardSliderBox}>
                                <div className={styles.cardSliderWrapper}>
                                    <div ref={container} className={styles.cardSliderContainer}>
                                        <div ref={track} className={styles.cardSliderTrack}>
                                            <img className={styles.cardSliderItem}
                                                 src={process.env.REACT_APP_API_URL + device.img2}
                                                 alt="car"/>
                                            <img className={styles.cardSliderItem}
                                                 src={process.env.REACT_APP_API_URL + device.img1}
                                                 alt="car"/>
                                            <img className={styles.cardSliderItem}
                                                 src={process.env.REACT_APP_API_URL + device.img3}
                                                 alt="car"/>
                                            <img className={styles.cardSliderItem}
                                                 src={process.env.REACT_APP_API_URL + device.img4}
                                                 alt="car"/>
                                            <img className={styles.cardSliderItem}
                                                 src={process.env.REACT_APP_API_URL + device.img5}
                                                 alt="car"/>
                                            <img className={styles.cardSliderItem}
                                                 src={process.env.REACT_APP_API_URL + device.img6}
                                                 alt="car"/>
                                            <img className={styles.cardSliderItem}
                                                 src={process.env.REACT_APP_API_URL + device.img7}
                                                 alt="car"/>
                                            <img className={styles.cardSliderItem}
                                                 src={process.env.REACT_APP_API_URL + device.img8}
                                                 alt="car"/>
                                            <img className={styles.cardSliderItem}
                                                 src={process.env.REACT_APP_API_URL + device.img9}
                                                 alt="car"/>
                                            <img className={styles.cardSliderItem}
                                                 src={process.env.REACT_APP_API_URL + device.img10}
                                                 alt="car"/>
                                        </div>
                                    </div>
                                </div>
                                <button onMouseUp={(event) => {
                                    slider(1, 1, event)
                                }}
                                        ref={btnPrev}
                                        className={styles.btn + ' ' + styles.cardBtnPrev}>{'<'}</button>
                                <button onMouseUp={(event) => {
                                    slider(1, 1, event)
                                }}
                                        ref={btnNext}
                                        className={styles.btn + ' ' + styles.cardBtnNext}>{'>'}</button>
                            </div>
                        </div>
                    </div>


                    <div className={styles.cardMiddle}>
                        <h1 className={styles.cardParams + ' ' + styles.cardTittle}>Parameters</h1>
                        <div className={styles.cardParamsBox}>
                            <div className={styles.paramsItemBox}>
                                <div className={styles.cardParamsItem}>
                                    <img src={yearImage} className={styles.cardParamsImg} alt=""/>
                                    <p className={styles.cardParamsTittle}>Year of issue:</p>
                                    <p className={styles.cardParamsDescription}>{device.year}.</p>
                                </div>
                                <div className={styles.cardParamsItem}>
                                    <img src={bodyImage} className={styles.cardParamsImg} alt=""/>
                                    <p className={styles.cardParamsTittle}>Body type:</p>
                                    <p className={styles.cardParamsDescription}>{device.body}.</p>
                                </div>
                                <div className={styles.cardParamsItem}>
                                    <img src={driveImage} className={styles.cardParamsImg} alt=""/>
                                    <p className={styles.cardParamsTittle}>Drive:</p>
                                    <p className={styles.cardParamsDescription}>{device.drive}.</p>
                                </div>
                                <div className={styles.cardParamsItem}>
                                    <img src={engineImage} className={styles.cardParamsImg} alt=""/>
                                    <p className={styles.cardParamsTittle}>Engine capacity:</p>
                                    <p className={styles.cardParamsDescription}>{device.engine}.</p>
                                </div>
                                <div className={styles.cardParamsItem}>
                                    <img src={wheelImage} className={styles.cardParamsImg} alt=""/>
                                    <p className={styles.cardParamsTittle}>Steering wheel:</p>
                                    <p className={styles.cardParamsDescription}>{device.wheel}.</p>
                                </div>
                            </div>
                            <div className={styles.aboutTittleBox}>
                                <h1 className={styles.aboutTittleText}>A</h1>
                                <h1 className={styles.aboutTittleText}>B</h1>
                                <h1 className={styles.aboutTittleText}>O</h1>
                                <h1 className={styles.aboutTittleText}>U</h1>
                                <h1 className={styles.aboutTittleText}>T</h1>
                            </div>
                            <div className={styles.aboutDescriptionBox}>
                                <h1 className={styles.cardAboutTittle}>More</h1>
                                <div className={styles.cardAboutDescription}>
                                    <p>
                                        {device.more}</p>
                                </div>

                            </div>
                            <div className={styles.aboutTittleBox}>
                                <h1 className={styles.aboutTittleText}>C</h1>
                                <h1 className={styles.aboutTittleText}>O</h1>
                                <h1 className={styles.aboutTittleText}>L</h1>
                                <h1 className={styles.aboutTittleText}>O</h1>
                                <h1 className={styles.aboutTittleText}>R</h1>
                            </div>
                            <img className={styles.colorImage} src={process.env.REACT_APP_API_URL + device.imgColor}
                                 alt="color"/>
                        </div>
                    </div>


                    <DevicePageHistory device={device}/>
                </div>
            </div>
        </div>
        // <Container className='mt-3'>
        //     <Row>
        //         <Col md={4}>
        //             <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img2}/>
        //         </Col>
        //         <Col md={4}>
        //             <Row className='d-flex flex-column align-items-center'>
        //                 <h2>{device.name}</h2>
        //                 <div className='d-flex align-items-center justify-content-center'
        //                      style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize:64}}
        //                 >
        //                     {device.rating}
        //                 </div>
        //             </Row>
        //         </Col>
        //         <Col md={4}>
        //             <Card className='d-flex flex-column align-items-center justify-content-around'
        //             style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
        //             >
        //                 <h3>От: {device.price} руб.</h3>
        //                 <Button variant={"outline-dark"}>Добавить в корзину</Button>
        //             </Card>
        //         </Col>
        //     </Row>
        //     <Row className='d-flex flex-column mt-3'>
        //         <h1>Характеристики</h1>
        //         {device.info.map((info, index) =>
        //         <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
        //             {info.title}: {info.description}
        //         </Row>)}
        //     </Row>
        // </Container>
    );
};

export default DevicePage;