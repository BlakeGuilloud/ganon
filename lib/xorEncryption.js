/**
 * Perform a XOR encryption on a string with a key
 * All integers passed are in the 0...255 range.
 * You can convert:
 * - from int->char with String.fromCharCode(65)
 * - from char->int with 'a'.charCodeAt(0)
 *
 * For more info: https://en.wikipedia.org/wiki/XOR_cipher
 *
 * @param {String|array} data The data to be encrypted (string or array of integer)
 * @param {String|array} key The key used to encrypt the data (string or array of integer)
 * @param {boolean?} outputAsString Whether to return an array of integer or its string value
 * @returns {String|array}
 */

function xorEncryption (data, key, outputAsString = false) {
  var dataLength = data.length;
  var keyLength = key.length;
  var output = []; // Default to Array
  var i = 0; //Prevent Redeclaring i over loops
  if(outputAsString){
    //True block for String as Output
    output = "";
    if(Array.isArray(data)){
      //If input data is Array then dont use charCodeAt as it Doesn't Exist
      if(Array.isArray(key)){
        //IF key is Array Dont use charCodeAt
        for( i = 0; i < dataLength; i++ ){
          output += String.fromCharCode(data[i] ^ key[i % keyLength]); //XOR
        }
      }else {
        //If string then use, charCodeAt
        for( i = 0; i < dataLength; i++ ){
          output += String.fromCharCode(data[i] ^ key.charCodeAt(i % keyLength));
        }
      }
    }else {
      // Data is a String. Use charCodeAt to XOR Stuffs
      if(Array.isArray(key)){
        //If key ain't String then use as normal XOR
        for( i = 0; i < dataLength; i++){
          output += String.fromCharCode(data.charCodeAt(i) ^ key[i % keyLength]);
        }
      }else {
        //IF key is String use charCodeAt
        for( i = 0; i < dataLength; i++){
          output += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % keyLength));
        }
      }
    }
  }else {
    //False block for Non String as Output
    output = []; // Put Output as a Array
    if(Array.isArray(data)){
      //If Given input is an Array. Don't use charCodeAt
      if(Array.isArray(key)){
        //If Given key ain't String then.
        for( i = 0; i < dataLength; i++){
          output[i] = data[i] ^ key[i % keyLength];
        }
      }else {
        //Key is a String and data isn't a string
        for( i = 0; i < dataLength; i++){
          output[i] = data[i] ^ key.charCodeAt(i % keyLength);
        }
      }

    }else {
      //Given data is a String.
      if(Array.isArray(key)){
        //But key is Array
        for( i = 0; i < dataLength; i++){
          output[i] = data.charCodeAt(i) ^ key[i % keyLength];
        }
      }else {
        //Key is too a string
        for( i = 0; i < dataLength; i++){
          output[i] = data.charCodeAt(i) ^ key.charCodeAt(i % keyLength);
        }

      }

    }
  }

  return output;

}

module.exports = xorEncryption;
