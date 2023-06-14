import React, {useEffect, useRef, useState} from 'react';
import styles from "./DevicePageHistory.module.css";
import {fetchBrand} from "../../http/deviceApi";

const DevicePageHistory = ({device}) => {
    const [brands, setBrands] = useState({info: []})
    const [brand, setBrand] = useState({info: []})
    const searchBrandImages = (brands) => {
        if (brands.length > 0) {
            for (let brand of brands) {
                if (brand.id === device.brandId) {
                    setBrand(brand)
                }
            }
        }
    }
    useEffect(() => {
        searchBrandImages(brands)
    }, [device, brands])

    useEffect(() => {
        fetchBrand().then(data => {
            setBrands(data)
        })
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
        <div>
            <div className={styles.container}>
                <div className={styles.cardHistoryBox}>
                    <h1 className={styles.cardHistory}>History</h1>
                    <div className={styles.cardHistoryBlock}>
                        <div className={styles.cardHistorySlider}>
                            <div className={styles.historySliderWrapper}>
                                <div ref={container} className={styles.historySliderContainer}>
                                    <div ref={track} className={styles.historySliderTrack}>
                                        <img className={styles.historySliderItem}
                                             src={process.env.REACT_APP_API_URL + brand.imgBrandHistory1}
                                             alt="car"/>
                                        <img className={styles.historySliderItem}
                                             src={process.env.REACT_APP_API_URL + brand.imgBrandHistory2}
                                             alt="car"/>
                                        <img className={styles.historySliderItem}
                                             src={process.env.REACT_APP_API_URL + brand.imgBrandHistory3}
                                             alt="car"/>
                                        <img className={styles.historySliderItem}
                                             src={process.env.REACT_APP_API_URL + brand.imgBrandHistory4}
                                             alt="car"/>
                                    </div>
                                </div>
                            </div>
                            <button onClick={(event) => slider(1, 1, event)}
                                    ref={btnPrev}
                                    className={styles.btn + ' ' + styles.historyBtnPrev}>{'<'}</button>
                            <button onClick={(event) => slider(1, 1, event)}
                                    ref={btnNext}
                                    className={styles.btn + ' ' + styles.historyBtnNext}>{'>'}</button>
                            <div className={styles.cardOrderBox}>
                                <h1 className={styles.cardTittle + ' ' + styles.cardHistoryTittle}>{device.name}</h1>
                                <p className={styles.cardHistoryText}>{brand.description}</p>
                                <a href="tel:+79999009090" className={styles.cardOrderBtn}>ORDER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevicePageHistory;