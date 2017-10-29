/**
 * Hamming
 * Write a program that can calculate the Hamming difference between two DNA strands.
 *
 * A mutation is simply a mistake that occurs during the creation or
 *  copying of a nucleic acid, in particular DNA.
 *
 * By counting the number of differences between two homologous DNA strands taken from
 *  different genomes with a common ancestor, we get a measure of the minimum number of
 *  point mutations that could have occurred on the evolutionary path between the two
 *  strands.
 *
 * This is called the 'Hamming distance'.
 * It is found by comparing two DNA strands and counting how many of the
 *  nucleotides are different from their equivalent in the other string.
 *
 * GAGCCTACTAACGGGAT
 * CATCGTAATGACGGCCT
 * ^ ^ ^  ^ ^    ^^
 *
 * The Hamming distance between these two DNA strands is 7.
 */

function hamming(dna1, dna2) {
  if (dna1.length !== dna2.length) {
    throw new Error("DNA strands must be equal length");
  }

  const map = Array.prototype.map;
  return map.call(dna1, (e,i) => e !== dna2[i])
    .reduce((a,b) => a + b, 0);
}

module.exports = hamming;
