/**
 * Returns the users name anonymized such that only the first letter of each name is exposed
 * The remaining characters are each replaced with '*'
 * Ex. anonymize("John Smith Doe") => J*** S**** D**
 * @param {String} name
 * @return {String}
 */
function anonymize(name) {

  const anonymizer = (str) => {
    return str
      .split("")
      .map(l => str.indexOf(l) === 0 ? l : "*")
      .join("");
  };

  return name.length > 0
    ? name.split(" ").length > 1
      ? name
        .split(" ")
        .map(partial => anonymizer(partial))
        .join(" ")
      : anonymizer(name)
    : name;
}

module.exports = anonymize;
