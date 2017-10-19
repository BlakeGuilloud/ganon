/**
 *  Write a function that find the most repeated numbe
 * @param {Array} list
 */
function mode(list) {
  var cnt = {};
  var mx = -1;
  
  if (!list.length) {
    return "No elements in the Array";
  }
  
  var ans = [];
  Array.prototype.forEach.call(list, function (elem) {
    if (!cnt.hasOwnProperty(elem)) {
      cnt[elem] = 0;
    }
    ++cnt[elem];

    if (mx === cnt[elem]) {
      ans.push(elem);
    }

    if (mx < cnt[elem]) {
      mx = cnt[elem];
      ans = [];
      ans.push(elem);
    }
  });

  return ans.sort();
}

module.exports = mode;