/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  let stringAlong = "";

  for (let word of words) {
    stringAlong += word;
  }
  return stringAlong;
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers. --what?
 */
function repeatAllWords(words) {
  let strArray = [];
  for (let word in words) {
    strArray.push(words[word]);
    strArray[word] += words[word];
  }
  return strArray;
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {
  let returnArr = [];
  for (let word in words) {
    if (words[word].length <= 4) {
      returnArr.push(words[word]);
    }
  }
  return returnArr;
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {
  for (let word of words) {
    if (word.includes(character)) {
      return word;
    }
  }
  return null;
}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {
  for (let word of words) {
    if (/[a-z]/.test(word)) {
      // Reference: https://www.w3schools.com/jsref/jsref_regexp_test.asp
      return false;
    }
  }
  return true;
}

/**
 * Return the first longest word.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The first word that is the longest.
 */
function getLongestWord(words) {
  let longestWord = words[0];
  longestWord.length;
  for (let word in words){
    if (words[word].length > longestWord.length){
      longestWord = words[word];
    }
  }
  return longestWord;

}

module.exports = {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
};
