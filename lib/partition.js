/**
 * Partition an array into slices of a given length n
 * @param {Array} arr The array to partition
 * @param {number} n The partition size
 * @return {Array} An array or partitioned array slices
 */



function partition(xs, n) {
  if (!Array.isArray(xs)) {
    throw new TypeError("The first argument of partition must be an array");
  }
  let partitionedArray = [];
  while (xs.length > 0) {
    partitionedArray.push(xs.splice(0, n));
  }
  return partitionedArray;
}

module.exports = partition;
