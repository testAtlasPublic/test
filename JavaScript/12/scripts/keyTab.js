const btnRegX = document.querySelector('#btnReg');
const btnImageX = document.querySelector('#btnImage');


btnRegX.addEventListener('focus', () => {

    window.onkeyup = () =>
    window.onkeyup = e => {
        if (e.code === "Tab") {
            btnImage.focus();
        }
    }
}) 

btnImageX.addEventListener('focus', () => {

    window.onkeyup = () =>
    window.onkeyup = e => {
        if (e.code === "Tab") {
            btnImage.blur();
        }
    }
}) 



