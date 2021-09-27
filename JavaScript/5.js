const arrayToObject = (arr) => {
    const obj = {}

    arr.forEach(element => {

        if (Array.isArray(element[1]))
            obj[element[0]] = arrayToObject(element[1]);
        else
            obj[element[0]] = element[1];
    });

    return obj;
}


var arr = [
    ['name', 'developer'],
    ['age', 5],
    ['skills',
        [
            ['html', 4],
            ['css', 5],
            ['js',
                [
                    ['ES5', 5],
                    ['ES6', 5]
                ]
            ]
        ]
    ]
];

console.log(arrayToObject(arr))