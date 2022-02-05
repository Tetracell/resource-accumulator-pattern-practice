/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */
function getAllNames(people) {
  let namesArr = [];
  for (let person of people){
    namesArr.push(person.name);
  }
  return namesArr;
}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
function findPersonByName(people, name) {
  for (let person in people){
    if (people[person].name.toLowerCase() == name.toLowerCase()){
      return people[person];
    }
  }
  return null;
}

/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
  let youngPeople = [];

  for (let person in people){
    if (people[person].age < 25){
      youngPeople.push(people[person]);
    }
  }
  return youngPeople;
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleWithGmail(people) {
  let googlers = [];
  for (let person in people){
    if (people[person].email.includes('gmail')){
      googlers.push(people[person]);
    }
  }
  return googlers;
}

module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
