/**
* Checks if given String is a valid website
*
* @param {String} url
* @return bool true if url is a valid website, false otherwise
*
* @example
* isWebsite("https://github.com") // -> true
* isWebsite("www.google.com") // -> true
* isWebsite("www.googlecom")  // -> false
*/
function isWebsite(url) {
  return /^((https?):\/\/)?[0-9a-z.]+(\.([a-z]){1,3})$/i.test(url);
}

module.exports = isWebsite;
