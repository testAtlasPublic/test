String.prototype.removeDuplicate = function () {

    const history = {}

    this.split(' ').forEach(word => {
        if (!history.hasOwnProperty('_'+word))
            history['_'+word] = word;
    });

    return Object.values(history).join(' ');
};


let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
console.log(x.removeDuplicate()) // Int32 Double