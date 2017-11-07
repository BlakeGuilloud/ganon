/**
 * Convert tablespoons to teaspoons
 * @param {number} tablespoons
 * @return returned value in teaspoons
 */

const teaspoonsInATablespoon = 3;

function convertTablespoonsToTeaspoons(tablespoons) {
  if (typeof tablespoons !== "number") {
    throw new Error("Tablespoons must be a number.");
  }
  if (tablespoons < 0) {
    throw new Error("Number of tablespoons cannot be negative. Flip your measuring spoons right-side-up and try again.");
  }
  return tablespoons * teaspoonsInATablespoon;
}

module.exports = convertTablespoonsToTeaspoons;
