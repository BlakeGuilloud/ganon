/**
 * Shannon Entropy
 * Write a program that can calculate the entropy of a list of elements.
 *
 * Entropy is a measure of the average amount of information a random variable
 *  contains. (Here, we'll limit our attention to discrete random variables)
 *
 * A good introductory video can be found here:
 *  https://www.youtube.com/watch?v=2s3aJfRr9gE
 *
 * Is it computed by the calculating the product of the probability and
 *  information content of an outcome of the random variable like so:
 *
 *   P(x) * I(x) = P(x) * (- log P(x))
 *
 * and then summing over all values of this product for each possible outcome
 *  of the random variable. The logarithm can be taken to any base, yielding
 *  different units of entropy. Common units of entropy are bits (also known
 *  as shannons) for base 2 logarithms, nats (or natural units) for base e
 *  logarithms, and bans (or hartleys) for base 10 logarithms.
 *
 * As an example, given a uniform random variable (ie. one whose outcomes all
 *  have equal probability) called X, which can take on the values [1,2,3]
 *  we compute the information entropy as:
 *
 * H(X) = [P(1) * (- log P(1))] + [P(2) * (- log P(2))] + [P(3) * (- log P(3))]
 *      = [(1/3) * (- log(1/3))] + [(1/3) * (- log(1/3))] + [(1/3) * (- log(1/3))]
 *      = - log (1/3)
 *      = log 3
 *
 * The function should take either a list of any type (possibly
 *  containing duplicates) or a Map from objects of any suitable type to their
 *  respective probabilities, then compute its Shannon
 *  Entropy, treating the input as the possible outcomes of a random variable.
 * Assume that, in the case of a list, all outcomes have equal probability,
 *  and that duplicate elements increase the probability of an outcome.
 * In the case of a Map, the probabilities provided must sum to 1; if they
 *  do not, throw an error.
 * Secondly, the function should allow the user to specify the base of the
 *  logarithm, using base 2 as the default.
 *
 */


function walkElements(elements, evaluator) {
  var probabilityNumerators = Object.create(null);
  var k;
  elements.forEach(function(c) {
    if(probabilityNumerators[c]) {
      probabilityNumerators[c]++;
    } else {
      probabilityNumerators[c] = 1;
    }
  });
  if (evaluator) {
    for (k in probabilityNumerators) {
      evaluator(k, probabilityNumerators[k]);
    }
  }
  return probabilityNumerators;
}

function shannonEntropy(randomVariable, base = 2) {
  var sum = 0;
  var probabilitiesSum = 0;
  if (randomVariable instanceof Map) {
    randomVariable.forEach(function(value, key, map) {
      probabilitiesSum += value;
      sum -= value * Math.log(value) / Math.log(base);
    });
    if (probabilitiesSum != 1) {
      throw "Given probabilities don't add up to 1!";
    }
  }else{
    var len = randomVariable.length;
    walkElements(randomVariable, function(k, f) {
      var p = f / len;
      sum -= p * Math.log(p) / Math.log(base);
    });
  }

  return sum;
}

module.exports = shannonEntropy;
