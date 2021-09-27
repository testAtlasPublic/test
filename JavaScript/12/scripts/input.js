const ERROR_INPUTS = Array.from(document.querySelectorAll('.ERROR_INPUT'));

const errors = {}

const showErrors = () => {

    ERROR_INPUTS.forEach((ERROR, N) => {

        if (errors[N] !== "")
            if (errors[N] === true)
                ERROR.style.display = "block"
            else
                ERROR.style.display = "none"
    })
}



//!----------------------------------------------------------------------------
const inputs = Array.from(document.querySelectorAll('.input'))

const init = () =>
    inputs.forEach((input, N) => {

        input.addEventListener('focus', event => validForm(event.target))
        input.addEventListener('input', event => validForm(event.target))

        errors[N] = "";

        function validForm(target) {

            let value = target.value;

            errors[N] = false;

            if (input.id === 'inputText')
                target.value = valideText(value)

            if (input.id === 'inputEmail')
                if (!valideEmail(value))
                    errors[N] = true

            if (input.id === 'inputPassword')
                if (!validePassword(value))
                    errors[N] = true

            if (!Boolean(target.value))
                errors[N] = true;

            showErrors();
            canReg();



            window.onkeydown = e => {
                if (e.code === "Enter") {
                    inputs[N + 1].focus();
                }
            }
        }

    });

const valideText = (value) => {
    return value.replace(/[&\/\\#,\-+()$~%.'":*?<>{}0-9]/g, '');
}

const valideEmail = (value) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase());
}

const validePassword = (value) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,24}$/;
    return regex.test(String(value));
}


//!----------------------------------------------------------------------------
const btnReg = document.querySelector('#btnReg');

const canReg = () => {

    let isReg = false;

    if (Object.values(errors).every(e => e === false))
        isReg = true;
    else
        isReg = false;


    if (isReg) {
        btnReg.disabled = false;
        btnReg.style.color = "#0F0";
    }
    else {
        btnReg.disabled = true;
        btnReg.style.color = "#F00";
    }
}

init();
canReg();

