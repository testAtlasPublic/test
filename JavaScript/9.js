String.prototype.toTitleCase = function () {
    
    return this.split(' ').map(word => 
        (word.charAt(0).toUpperCase() + word.slice(1))
    ).join(' ');
};


let x = 'test task'

console.log(x.toTitleCase()) // Outputs: Test Task
