const chunkArray = (arr, div) => {

    const resArray = [];
    let cellLength = (arr.length / div);

    for (let N = 0; N < div; N++) {
        resArray[N] = arr.slice(N * cellLength, N * cellLength + cellLength);

        if (N > 0)
            if (arr.length % div !== 0) {
                resArray[N - 1] = [...resArray[N - 1], resArray[N][0]];
                resArray[N] = [...resArray[N].slice(1, resArray[N].length)];
            }
    }

    return resArray;
}


console.log(
    chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(
    chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(
    chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(
    chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

