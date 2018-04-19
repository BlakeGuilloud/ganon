/**
 * Expects an input with three names (first, middle, last)
 * and returns the full name with an abbreviated middle initial, properly capitalized.
 * eg. 'Leslie Barbara Knope' should return 'Leslie B. Knope'
 * eg. 'ann meredith perkeins' should return 'Ann M. Perkins'
 *
 * @param {String} name
 * @return {String}
 */

function abbreviateMiddleName (name) {
  if((/[^a-z|A-Z| ]/g).test(name) === false) {
    if (typeof(name) === "string") {
      let f = name.split(" ");
      if (f.length > 2) {
        let first = f[0].split("");
        let middle = f[1].split("")[0].toUpperCase();
        let last = f[2].split("");
        first[0] = first[0].toUpperCase();
        last[0] = last[0].toUpperCase();
        return first.join("") + " " + middle + "." + " " + last.join("");
      }
      else throw new Error("Argument is less than 2 words");
    }
    else throw Error("Argument is not a string");
  }
  else throw new Error("Argument has non alphabet character");
}

module.exports = abbreviateMiddleName;
