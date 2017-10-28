/**
 * A function which returns a true when
 * a given array or object is empty
 * @param {Array or Object} type
 * @returns {boolean}
 *
 * Examples:
 *  isEmpty([]) === true
 *  isEmpty([1, 2, 3]) === false
 *  isEmpty({}) === true
 *  isEmpty({"key": "value"}) === false
 */
export function isEmpty(value) {
    var check = false;
    
    if(isArrayAndEmpty(value)){
        check = true;
    }
    
    if(isObjectAndBlank(value)){
        check = true;
    }
    
    return check;
}

/**
* Method used to Check an Array Type with Array Length
*/
function isArrayAndEmpty(pArray){
    if(Array.isArray(pArray)){
        return pArray.length == 0 ? true : false;
    }
}

/**
* Method used to Check an Object Type with Empty Object
*/
function isObjectAndBlank(pObject){
    if(Object.prototype.toString.call(pObject) == "[object Object]"){
        return Object.keys(pObject).Object === 0 && obj.constructor === Object ? true : false;
    }
}

module.exports = isEmpty;