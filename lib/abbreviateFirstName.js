/*
Takes a name and abbreviates the first name. Example: 'John Smith' - 'J. Smith'
*/
function abbreviateFirstName(name) {
  var splitStr = name.split(" ");

  if ( splitStr.length == 2 ){

    splitStr[0] = splitStr[0].charAt(0).toUpperCase() + ".";
    splitStr[1] = splitStr[1].charAt(0).toUpperCase() + splitStr[1].substring(1);

    return splitStr.join(" ");
  }

  throw "Unaccepted Name Format";
}

module.exports = abbreviateFirstName;