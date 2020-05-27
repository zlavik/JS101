// Question 6:
// One of the most frequently used real-world string operations is that
// of "string substitution," where we take a hard-coded string and
// modify it with various parameters from our program.
// Given this previously seen family object, print
// the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

/* Pseudocode:
current name
current age
current gender
cycle through munsters adding its info into current info
display current info
*/
for (let member in munsters) {
  let name = member;
  let age = munsters[member].age;
  let gender = munsters[member].gender;
  console.log(`${name} is a ${age}-year-old ${gender}.`);
}
