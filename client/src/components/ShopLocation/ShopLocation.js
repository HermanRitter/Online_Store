import React, {useContext, useEffect, useRef, useState} from 'react';
import historyImg1 from "../../assets/AppImages/ShopImage/history1.jpeg"
import historyImg2 from "../../assets/AppImages/ShopImage/history2.jpeg"
import historyImg3 from "../../assets/AppImages/ShopImage/history3.jpeg"
import historyImg4 from "../../assets/AppImages/ShopImage/history4.jpeg"
import styles from "./ShopLocation.module.css"
import {Context} from "../../index";

const ShopLocation = () => {

    useEffect(() => {
        let items = track.current.childNodes
        items = Array.prototype.slice.call(items)
        console.log(container.current.clientWidth)
        const itemWidth = container.current.clientWidth / 1;

        items.forEach(function (item) {
            item.style.minWidth = itemWidth + 'px' // `${itemWidth}px`
        });
    }, []);
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
        <div className={styles.storeMapBox}>
            <div className={styles.storeMapCompany}>
                <div className={styles.companyBoxImage}>
                    <div ref={container} className={styles.companySliderContainer}>
                        <div ref={track} className={styles.companySliderTrack}>
                            <img src={historyImg3} alt="history" className={styles.storeMapImg}/>
                            <img src={historyImg4} alt="history" className={styles.storeMapImg}/>
                            <img src={historyImg2} alt="history" className={styles.storeMapImg}/>
                            <img src={historyImg1} alt="history" className={styles.storeMapImg}/>
                        </div>
                    </div>
                    <button onClick={(event) => slider(1,1,event)} ref={btnPrev} className={styles.companyBtnPrev + ' ' + styles.btn}>{'<'}</button>
                    <button onClick={(event) => slider(1,1,event)} ref={btnNext} className={styles.companyBtnNext + ' ' + styles.btn}>{'>'}</button>
                </div>
                <div className={styles.storeHistoryBox}>
                    <h1 className={styles.storeHistoryTittle}>Ritter and Partners corp.</h1>
                    <p className={styles.storeHistoryText}>Convenient location in the center, on Kutuzovsky Prospekt, as
                        well as
                        the possibility of free ground and underground parking, attract customers. And we have something
                        to look at. Sales area of 10,000 sq. meters accommodates more than 300 cars, prestigious brands
                        Bentley, Ferrari,
                        Mercedes-Benz, Porsche, armored, retro and electric cars.
                        A large assortment and a competent approach of the staff, based on the professionalism and
                        saving time of the Client, are our hallmark. Urgent valuation, legal assistance, technical
                        support, and all this quickly, without unnecessary delay, with a guarantee of benefits for
                        all
                        participants in the transaction.</p>
                </div>
            </div>
        </div>
    );
};

export default ShopLocation;