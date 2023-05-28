function Slider(slidesToShow, slidesToScroll, sliderContainer, sliderTrack, prev, next, sliderItems){
    let position = 0;
    const container = document.querySelector(`.${sliderContainer}`);
    const track = document.querySelector(`.${sliderTrack}`);
    const btnPrev = document.querySelector(`.${prev}`);
    const btnNext = document.querySelector(`.${next}`);
    const items = document.querySelectorAll(`.${sliderItems}`)
    console.log(items)
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach(function (item) {
        item.style.minWidth = itemWidth + 'px' // `${itemWidth}px`
    });

    btnNext.addEventListener('click', function () {

        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();

    });

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    });

    const setPosition = function () {
        track.style.transform = 'translateX(' + position + 'px)';
    };

    const checkBtns = function () {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
    };
}

try {
    Slider(8, 3, 'slider__container', 'slider__track', 'btn__prev', 'btn__next', 'slider__item')
    Slider(1, 1, 'company__slider-container', 'company__slider-track', 'company__btn-prev', 'company__btn-next', 'store__map-img')
} catch {
    Slider(1, 1, 'card__slider-container', 'card__slider-track', 'card__btn-prev', 'card__btn-next', 'card__slider-item')
    Slider(1, 1, 'history__slider-container', 'history__slider-track', 'history__btn-prev', 'history__btn-next', 'history__slider-item')

}
