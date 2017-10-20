// Write function which takes a nested object and flattens it
//
// flattenNestedObject({ "a" : 1, "b" : { "c" : { "d" : { "e" : 1, "f" : 2 } } } }, '-') => {a: 1, "b-c-d-e": 1, "b-c-d-f": 2}
// flattenNestedObject({ "a" : 1, "b" : { "c" : { "d" : { "e" : 1, "f" : 2 } } } }) => {a: 1, "b.c.d.e": 1, "b.c.d.f": 2}

function flattenNestedObject( object, delimiter = "." ) {

  //	Your code goes here

}

module.exports = flattenNestedObject;