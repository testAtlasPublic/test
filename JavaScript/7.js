const objectToArray = (obj) => {
    let arr = [];

    Object.entries(obj).map(([key, val]) => {

        if (typeof val === 'object')
            arr.push([key, objectToArray(val)])
        else
            arr.push([key, val])
    })

    return arr;
}


var obj = {
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
}

console.log(
    objectToArray(obj))



