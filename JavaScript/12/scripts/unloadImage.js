const ERROR_IMAGE = document.querySelector('#ERROR_IMAGE');
const btnImage = document.querySelector('#btnImage');
const inputFile = document.querySelector('#inputFile');
const userImage = document.querySelector('#userImage');

const fileOptions = {
    multiple: false,
    accept: ['.png']
}

if (fileOptions.multiple)
    inputFile.setAttribute('multiple', fileOptions.multiple)

if (fileOptions.accept && Array.isArray(fileOptions.accept))
    inputFile.setAttribute('accept', fileOptions.accept.join(','))





const openFile = () => {
    inputFile.click();
}

const openedInputFile = e => {

    const files = Array.from(e.target.files);

    files.forEach(file => {
        if (!file.type.match('image')) {
            return
        }

        const reader = new FileReader();

        reader.onloadend = ev => {
            const sizeBYTE = ev.total;

            if (sizeBYTE)
                if (checkSize(sizeBYTE)) {
                    updaload(ev.target.result);
                    showError(false);
                }
                else
                    showError(true);
        }

        reader.readAsDataURL(file);
    })
}

const checkSize = (size) => {
    const SIZE_KB = (1024);
    const SIZE_MB = (1024 * 1024);

    const sizeKB = size / SIZE_KB;
    const sizeMB = size / SIZE_MB;

    if (sizeKB <= SIZE_KB)
        return true;
    else
        return false;
}

const updaload = (base64) => {
    userImage.src = `${base64}`;
}

btnImage.addEventListener('click', openFile);
btnImage.addEventListener('keydown', openFile);
inputFile.addEventListener('change', openedInputFile);


//!--------------------------------------------------------------

const showError = (isError) => {

    if (isError) {
        ERROR_IMAGE.style.display = "block";
        btnImage.style.border = "2px solid red";

        setTimeout(() => {
            ERROR_IMAGE.style.display = "none";

            if (userImage.src[0] !== 'f')
                btnImage.style.border = "2px solid rgb(0, 110, 255)";
            else
                btnImage.style.border = "2px dashed rgb(0, 110, 255)";
        }, 2000);
    }
    else {
        ERROR_IMAGE.style.display = "none";
        btnImage.style.border = "2px solid rgb(0, 110, 255)";
    }
}

function decimal(value, decimal = 2) {
    decimal = Math.pow(10, decimal);
    return ((parseInt((value) * decimal)) / decimal);
}






