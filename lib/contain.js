// Write a function that returns true if a word is inside an array,
//otherwise false
function contain(array, word) {
    if (array === null || array === undefined) {
        return false;
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return true;
        }
    }
    return false;
}

module.exports = contain;