const deepEqual = (obj1, obj2) => {

    const isObject = (obj1, obj2) =>
        obj1 !== null &&
        obj2 !== null &&
        typeof obj1 === "object" &&
        typeof obj2 === "object";


    if (isObject(obj1, obj2)) {

        for (let key in obj1) {

            if (Object.keys(obj1).length !== Object.keys(obj2).length)
                return false;
            else {
                if (isObject(obj1[key], obj2[key])) {
                    if (!deepEqual(obj1[key], obj2[key]))
                        return false;
                }
                else
                    if (obj1[key] !== obj2[key])
                        return false;
            }
        }
        return true;
    }
    else
        return (obj1 === obj2)

}

console.log(
    deepEqual({ name: 'test' }, { name: 'test' }))          // true
console.log(
    deepEqual({ name: 'test' }, { name: 'test1' }))         // false
console.log(
    deepEqual({ name: 'test' }, { name: 'test', age: 10 })) // false