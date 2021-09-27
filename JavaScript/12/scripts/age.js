const inputAge = document.querySelector('#inputAge');
const btnAgePlus = document.querySelector('#btnAgePlus');
const btnAgeMinus = document.querySelector('#btnAgeMinus');




inputAge.addEventListener('input', event => {
    event.preventDefault();
    event.stopPropagation();

    let value = event.target.value;
    event.target.value = ageValid(value);

})

const ageValid = (value) => {

    value = value.replace(/\D/g, '')

    if (value >= 99)
        value = 99;
    if (value <= 16)
        value = 16;

    return value;
}

btnAgePlus.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();

    inputAge.value++;
    inputAge.value = ageValid(inputAge.value);
})

btnAgeMinus.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    
    inputAge.value--;
    inputAge.value = ageValid(inputAge.value);
})
