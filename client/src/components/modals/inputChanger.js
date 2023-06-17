export function inputChanger(input, countFiles) {
    let label = input.nextElementSibling
    console.log(label)

    if (countFiles > 0) {
        label.firstElementChild.innerText = 'Выбрано файлов: ' + countFiles
    } else {
        console.log('label')
        label.firstElementChild.innerText = 'Выберете файл';
    }
}