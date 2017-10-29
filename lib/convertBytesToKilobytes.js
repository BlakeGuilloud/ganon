/**
 * Converts bytes to kilobytes
 * @param {number} bytes
 * @return {number} kilobytes
 */
function convertBytesToKilobytes(bytes) {
  // Your code goes here
  
  try{
    var KBData=0;
    if(parseInt(bytes)>0)
    {
      KBData=bytes/1000;
      retrun KBData;
    }
    else
    {
      return KBData;
    }
  }
  catch(e){
    throw ("Error");
  }
 
}

module.exports = convertBytesToKilobytes;
