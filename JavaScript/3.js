//---HOF---

// Так будет лучше
const toPromise = (asyncFn) => (...arg) =>
	new Promise(resolve => asyncFn(...arg, resolve))

function asyncPlus(x, y, resolve) {
	setTimeout(() => resolve(x + y), 1000)
}

toPromise(asyncPlus)(1, 2).then(res => console.log(res)); // Output: 3




// Задание
/*const toPromise = (asyncFn, arg) =>
	new Promise(resolve => asyncFn(...arg, resolve))

function asyncPlus(x, y, cb){
	setTimeout(() => cb(x + y), 1000)
}

toPromise(asyncPlus, [1, 2]).then(res => console.log(res)) // Output: 3
*/




