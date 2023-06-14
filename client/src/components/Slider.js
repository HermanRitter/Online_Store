import React, {useEffect, useState} from 'react';
import styles from "../pages/Device/DevicePage.module.css";

const Slider = ({images, container, track, btnPrev, btnNext, toShow, toScroll, box,
                    wrapperStyle, containerStyle, trackStyle, itemStyle}) => {

    useEffect(() => {
        let items = track.current.childNodes
        items = Array.prototype.slice.call(items)
        console.log(container.current.clientWidth)
        const itemWidth = container.current.clientWidth / toShow;

        items.forEach(function (item) {
            item.style.minWidth = itemWidth + 'px' // `${itemWidth}px`
        });
    }, [])

    let [position, setPosition] = useState(0)

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
        <div className={box}>
            <div className={wrapperStyle}>
                <div ref={container} className={containerStyle}>
                    <div ref={track} className={trackStyle}>
                        {images.map(image =>
                            <img src={process.env.REACT_APP_API_URL + image}
                                 alt=""
                                 key={image}
                                 className={itemStyle}/>
                        )}
                    </div>
                </div>
            </div>
            <button onMouseUp={(event) => {
                slider(toShow, toScroll, event)
            }}
                    ref={btnPrev}
                    className={styles.btn + ' ' + styles.cardBtnPrev}>{'<'}</button>
            <button onMouseUp={(event) => {
                slider(toShow, toScroll, event)
            }}
                    ref={btnNext}
                    className={styles.btn + ' ' + styles.cardBtnNext}>{'>'}</button>
        </div>
    );
};

export default Slider;