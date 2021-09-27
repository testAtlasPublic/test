async function getBase64FromUrl(URL) {

    async function httpGet(URL) {

        const response = await fetch(URL);
        return await response.blob();
    }

    function blobToBase64(blob) {
        return new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    }

    return httpGet(URL).then(blob => blobToBase64(blob));
}



//const URL = 'https://i.picsum.photos/id/112/200/200.jpg?hmac=a8Ve-HhSWAKC-SNBLKVosZ5gHmqMhgtNkPMYVMjEAbI';
const URL = 'https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8';

getBase64FromUrl(URL)
    .then(res => console.log(res))
    .catch(error => console.error(error));



/*
Проверка на ссайте:
    https://codebeautify.org/base64-to-image-converter
*/




