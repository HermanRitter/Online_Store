export const adminBtnChanger = (admin, btn, btnText, logo) => {
    if (admin === 'ADMIN') {
        setTimeout(() => {
            btn.style.opacity = '100%'
        }, 1500)
        setTimeout(() => {
            btn.style.width = '250px'
            btn.style.left = '0px'
            btn.style.cursor = 'pointer'
            logo.style.marginLeft = '0px'
        }, 2000)
        setTimeout(() => {
            btnText.style.opacity = '100%'

        }, 2500)
    }
}