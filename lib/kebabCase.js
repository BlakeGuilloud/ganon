/**
 * Converts string to kebab case
 * Should return a string in the lowerCamelCase style
 *
 * For more info: https://en.wikipedia.org/wiki/Letter_case#Special_case_styles
 * @param {String} input
 * @returns {String}
 */

function kebabCase(input) {
  // Replace camelCase capitals to kebab-case.
  input = input.replace(/([a-z][A-Z])/g, function(match) {
    return match.substr(0, 1) + "-" + match.substr(1, 1).toLowerCase();
  });

  // Convert non-camelCase capitals to lowercase.
  input = input.toLowerCase();

  // Convert non-alphanumeric characters to hyphens
  input = input.replace(/[^-a-z0-9]+/g, "-");

  // Remove hyphens from both ends
  return input.replace(/^-+/, "").replace(/-$/, "");
}

module.exports = kebabCase;
