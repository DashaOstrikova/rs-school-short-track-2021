/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const newS2 = s2.split('');
  let sum = 0;
  s1.split('').forEach((letter) => {
    const letterS2Index = newS2.findIndex((s2Letter) => s2Letter === letter);
    if (letterS2Index >= 0) {
      newS2.splice(letterS2Index, 1);
      sum += 1;
    }
  });

  return sum;
}

module.exports = getCommonCharacterCount;
