import React, {useContext, useEffect, useRef, useState} from 'react';
import {Card, Row} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import bugatti from "../../assets/AppImages/ShopBrandImages/bugatti.png"
import bentley from "../../assets/AppImages/ShopBrandImages/bentley.png"
import astonmartin from "../../assets/AppImages/ShopBrandImages/astonmartin.png"
import ferrari from "../../assets/AppImages/ShopBrandImages/ferrari.png"
import tesla from "../../assets/AppImages/ShopBrandImages/tesla.png"
import koenigsegg from "../../assets/AppImages/ShopBrandImages/koenigsegg.png"
import lamborghini from "../../assets/AppImages/ShopBrandImages/lamborghini.png"
import mclaren from "../../assets/AppImages/ShopBrandImages/mclaren.png"
import mercedes from "../../assets/AppImages/ShopBrandImages/mercedes.png"
import porsche from "../../assets/AppImages/ShopBrandImages/porsche.png"
import rollsroyce from "../../assets/AppImages/ShopBrandImages/rollsroyce.png"
import styles from "./BrandBar.module.css"

const BrandBar = observer(() => {

    // useEffect(() => {
    //     let items = track.current.childNodes
    //     items = Array.prototype.slice.call(items)
    //     console.log(container.current.clientWidth)
    //     const itemWidth = container.current.clientWidth / 8;
    //
    //
    //     items.forEach(function (item) {
    //         item.style.minWidth = itemWidth + 'px' // `${itemWidth}px`
    //     });
    // }, []);
    const {device} = useContext(Context)
    // let [position, setPosition] = useState(0)
    // let container = useRef()
    // let track = useRef()
    //
    // let btnPrev = useRef()
    // let btnNext = useRef()
    //
    // function slider(slidesToShow, slidesToScroll, event) {
    //     let items = track.current.childNodes
    //     items = Array.prototype.slice.call(items)
    //     const itemsCount = items.length;
    //     const itemWidth = container.current.clientWidth / slidesToShow;
    //     const movePosition = slidesToScroll * itemWidth;
    //
    //     items.forEach(function (item) {
    //         item.style.minWidth = itemWidth + 'px' // `${itemWidth}px`
    //     });
    //
    //     if (event.target === btnNext.current) {
    //         console.log(event.target)
    //         console.log(btnNext.current)
    //         next(itemWidth, movePosition, slidesToScroll, slidesToShow, itemsCount)
    //     }
    //     if (event.target === btnPrev.current) {
    //         prev(itemWidth, movePosition, slidesToScroll)
    //     }
    //     console.log(position)
    //     track.current.style.transform = 'translateX(' + position + 'px)';
    //     btnNext.current.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
    //     btnPrev.current.disabled = position === 0;
    //
    // }
    //
    // function next(itemWidth, movePosition, slidesToScroll, slidesToShow, itemsCount) {
    //     const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    //     setPosition(position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth);
    // }
    //
    // function prev(itemWidth, movePosition, slidesToScroll) {
    //     const itemsLeft = Math.abs(position) / itemWidth
    //     setPosition(position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth);
    //
    // }


    return (
        // <div className={styles.storeScrollerTopContainer}>
        //     <div className={styles.scrollerWrapper}>
        //         <div ref={container} className={styles.storeScrollerTop}>
        //             <div ref={track} className={styles.sliderTrack}>
        //                 <img className={styles.storeBrandImage}
        //                      src={bugatti}
        //                      alt="bugatti"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={astonmartin}
        //                      alt="astonmartin"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={bentley}
        //                      alt="koenigsegg"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={ferrari}
        //                      alt="astbentleyonmartin"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={koenigsegg}
        //                      alt="porsche"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={tesla}
        //                      alt="mclaren"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={lamborghini}
        //                      alt="lamborghini"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={mclaren}
        //                      alt="rollsroyce"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={mercedes}
        //                      alt="ferrari"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={porsche}
        //                      alt="mercedes"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={rollsroyce}
        //                      alt="tesla"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={bugatti}
        //                      alt="bugatti"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={astonmartin}
        //                      alt="astonmartin"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={bentley}
        //                      alt="koenigsegg"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={ferrari}
        //                      alt="astbentleyonmartin"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={koenigsegg}
        //                      alt="porsche"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={tesla}
        //                      alt="mclaren"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={lamborghini}
        //                      alt="lamborghini"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={mclaren}
        //                      alt="rollsroyce"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={mercedes}
        //                      alt="ferrari"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={porsche}
        //                      alt="mercedes"/>
        //                 <img className={styles.storeBrandImage}
        //                      src={rollsroyce}
        //                      alt="tesla"/>
        //             </div>
        //         </div>
        //     </div>
        //     <button onMouseUp={(event) => {
        //         slider(8, 3, event)
        //     }} type='button' ref={btnPrev} className={styles.btn + ' ' + styles.btnPrev}> {'<'} </button>
        //     <button onMouseUp={(event) => {
        //         slider(8, 3, event)
        //     }} type='button' ref={btnNext} className={styles.btn + ' ' + styles.btnNext}>{'>'}</button>
        // </div>
        <Row className='d-flex'>
            {device.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className='p-3'
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;