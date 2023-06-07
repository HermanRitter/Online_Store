let carBtns = document.querySelectorAll('.item__vehicle-img')
let button = document.createElement('button')
for (let carBtn of carBtns) {
    animateButton(carBtn)
}


function animateButton(carBtn) {
    const transformBtn = function (event, carBtn, sec, margin, scale) {
        if (event.target === carBtn) {
            carBtn.style.transition = `all ${sec}s`
            carBtn.style.marginLeft = `${margin}px`
            carBtn.style.transform = `scale(${scale})`
        }
    }
    const setScale = function (event) {
        return transformBtn(event, carBtn, 0.4, 30, 1.4)
    }
    const deleteScale = function (event) {
        return transformBtn(event, carBtn, 0.4, 0, 1.0)
    }
    const scaleUse = () => {
        document.addEventListener('mouseover', setScale)
        document.addEventListener('mouseout', deleteScale)
    }
    scaleUse()
    const scaleDelete = () => {
        document.removeEventListener('mouseover', setScale)
        document.removeEventListener('mouseout', deleteScale)
    }

    function setTransform(event) {
        if (event.target === carBtn) {
            console.log('click')
            scaleDelete()

            carBtn.style.backgroundColor = 'bisque'
            carBtn.style.zIndex = '2'
            carBtn.src = `Images/${carBtn.id}B.png`
            carBtn.style.borderRight = '2px solid black'
            carBtn.style.marginLeft = '39px'
            carBtn.style.transform = 'scale(1.4)'
            carBtn.classList.add('item__vehicle-img_active')
            button.className = 'navbar__button_active'
            button.style.position = 'absolute'
            button.style.zIndex = '-1'
            button.style.fontSize = '0'
            button.style.left = '65px'
            button.innerHTML = carBtn.id
            button.style.height = '105px'
            button.style.transition = 'all 0.4s'
            carBtn.parentElement.append(button)
            setTimeout(() => {
                button.style.top = `${carBtn.offsetTop - 14}px`
                button.style.backgroundColor = 'bisque'
                button.style.color = 'black'
                button.style.fontSize = '16px'
                button.style.borderTop= '4px solid bisque';
                button.style.borderBottom= '4px solid bisque';
                button.style.borderRight= '4px solid bisque';
                button.style.textDecoration = 'underline'
                button.style.paddingLeft = '33px'
                button.style.width = '210px'
            })
        }
    }

    document.addEventListener('mouseup', setTransform)
}


const deleteTransform = function (event) {
    let activeButton = document.querySelectorAll('.item__vehicle-img_active')
    const transformBtn = function (event, carBtnActive, sec, margin, scale) {
        if (event.target === carBtnActive) {
            carBtnActive.style.transition = `all ${sec}s`
            carBtnActive.style.marginLeft = `${margin}px`
            carBtnActive.style.transform = `scale(${scale})`
        }
    }
    const setScale = function (event) {
        return transformBtn(event, activeButton, 0.4, 30, 1.4)
    }
    const deleteScale = function (event) {
        return transformBtn(event, activeButton, 0.4, 0, 1.0)
    }
    const scaleUse = () => {
        document.addEventListener('mouseover', setScale)
        document.addEventListener('mouseout', deleteScale)
    }
    const scaleDelete = () => {
        document.removeEventListener('mouseover', setScale)
        document.removeEventListener('mouseout', deleteScale)
    }
    console.log(activeButton)
    let carBtn1 = carBtns[0]
    let carBtn2 = carBtns[1]
    let carBtn3 = carBtns[2]
    let carBtn4 = carBtns[3]
    let carBtn5 = carBtns[4]
    let carArray = [carBtn1, carBtn2, carBtn3, carBtn4, carBtn5]
    if (event.target !== activeButton[0] && carArray.includes(event.target)) {
        let carBtnActive = document.querySelector('.item__vehicle-img_active')
        console.log('unclick')
        let buttonActive = document.querySelector('.navbar__button_active')
        carBtnActive.style.transition = 'all 0.4s'
        carBtnActive.style.backgroundColor = 'black'
        carBtnActive.src = `Images/${carBtnActive.id}.png`
        carBtnActive.style.borderRight = '0px'
        carBtnActive.style.marginLeft = '0'
        carBtnActive.style.transform = 'scale(1.0)'
        carBtnActive.classList.remove('item__vehicle-img_active')
        carBtnActive.style.zIndex = '0'
    }
}


document.addEventListener('mousedown', deleteTransform)





