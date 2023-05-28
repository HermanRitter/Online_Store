let bulbBox = document.querySelector('.login__password-box')
let bulbSrc = bulbBox.lastElementChild.src

let bulbOn = false

function changeImage(event) {
    console.log('click')

    console.log(bulbOn)
    if (event.target === bulbBox.lastElementChild && !bulbOn) {
        bulbBox.firstElementChild.type = 'text'
        bulbBox.lastElementChild.src = 'Images/bulb1.png'
        console.log('click')
        bulbOn = true
        return
    }
    if (event.target === bulbBox.lastElementChild && bulbOn) {
        console.log(bulbBox.firstElementChild.type)
        bulbBox.firstElementChild.type = 'password'
        bulbBox.lastElementChild.src = 'Images/bulb.png'
        bulbOn = false
    }
}

bulbBox.lastElementChild.addEventListener('click', changeImage)