const firstUnique = (arr) => {
    const history = {}

    arr.forEach(element => {
        if (!history.hasOwnProperty('_' + element))
            history['_' + element] = element;
        else
            delete history['_' + element];
    });

    return Object.values(history)[0];
}

console.log(
    firstUnique([1, 2, 3, 2, 1, 3, 4, 5, 5])) // output 4 
console.log(
    firstUnique([9, 1, 2, 3, 2, 1, 3, 4, 5, 5, 0])); // output 9