// Question 5:
// Consider the following nested object and
// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalMaleAge = 0;

for (let persons in munsters) {
  if (munsters[persons].gender === 'male') {
    totalMaleAge += munsters[persons].age;
  }
}
console.log(totalMaleAge);

/*
set totalMaleAge
cycle through munster
if male add persons age to totalMaleAge
display totalMaleAge
end of program
*/