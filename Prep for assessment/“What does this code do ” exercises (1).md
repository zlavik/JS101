Variable Scope
==============

1\. ([source](https://launchschool.com/books/javascript/read/functions#variablescope))

What does this code log to the console? Does executing the foo function affect the output? Why or why not?

```js
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
```

* global variable ```bar``` is declared on line 1 and assigned a pointer to the value of 1
* function ```foo()``` is invoked on line 6. Within the function definition of  ```foo()```(lines 2-4) a new inner scope variable ```bar``` is declared with ```let``` at line 3 and assigned a value of  2 
* function ```console.log()``` is invoked with the argument of ```bar``` logging  ```1``` to the console.
* Executing ```foo``` function does not affect the output because ```bar``` on line 3 is created in an inner scope of ```foo``` and is not the same as the one on line 1. 

 2\. ([source](https://launchschool.com/exercises/e710c517))

What will the following code log to the console and why?

```js
console.log(greeting);

var greeting = 'Hello world!';
```

* Global variable ```greeting``` is declared with ```var``` on line 3 hoisting the variable ```greeting``` with the value of undefined to the top of the program and assigning the variable ```greeting``` with the string ```'Hello World!'``` on line 3.
* function ```console.log();``` is invoked  with the variable ```greeting``` being passed as the argument, which logs ```undefined``` to the console.
* undefined is logged because ```var``` hoists its variable with a value of undefined to the top of the program. So when ```console.log()``` was invoked variable ```greeting``` had the value of ```undefined```.

3\. ([source](https://launchschool.com/exercises/aba8a530))

What will the following code log to the console and why?

```js
console.log(greeting);

let greeting = 'Hello world!';
```

* Global variable ```greeting``` is declared with ```let``` on line 3 with the string ```'Hello world!'``` 
* Function ```console.log()```is invoked with argument of ```greeting``` being pass to it, raising an error, 
* Because unlike ```var```, ```let``` doesn't hoist to the top. In this case, variable ```greeting``` is declared after the ```console.log()``` function is invoked.

4\. ([source](https://launchschool.com/exercises/85bba3f0))

What will the following code log to the console and why?

```js
if (true) {
  let myValue = 20;
}

console.log(myValue);
```

* Variable ```myValue``` is declared using ```let``` inside the scope of  the```if``` statement on lines 1-3
* function ```console.log()``` is invoked on line 5 with the argument of ```myValue``` being passed to it. Logging a reference error. 
* An error occurs because variables declared with ```let``` are block scoped and are not accessible outside the block it was declared in. 

5\. ([source](https://launchschool.com/exercises/4c097ca6))

What will the following code log to the console and why?

```js
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();
```

* function ```myFunction()``` is declared on lines 1-7.  
* Within the function definition of ```myFunction``` variable ```a``` is declared with ```let``` on line 2 and assigned a value of 2.
* function ```myFunction();``` is invoked on line 9 logging ```1``` to the console. Because the ```if``` statement in function ```myFunction``` on line 4 is true, and the function ```console.log``` on line 5  with an argument of ```a``` is passed, which is accessible outside the ```if``` statement scope.

6\. ([source](https://launchschool.com/exercises/8bd04112))

What will the following code log to the console and why?

```js
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
```

*

7\. ([source](https://launchschool.com/exercises/2c7c0c0f))

What will the following code log to the console and why?

```js
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);
```

* This logs ```false``` to the console
* Global variable ```a``` is declared with ```let``` on line 1 assigning a value of ```5```
* Global variable ```b``` is declared with ```let``` on line 2 assigning a Boolean of ```false```
* Within the condition ```if``` statement on line 4```(a > 4) ``` evaluates to true, since ```a``` points to the value ```5``` on line 1.  Since it evaluated true the inner scope of the if condition a new variable ```b``` is declared and assigned a Boolean ```true```;
* con

8\. ([source](https://launchschool.com/exercises/dbcd15de))

What will the following code log to the console and why?

```js
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
```

*

9\. ([source](https://launchschool.com/exercises/36d6b9d0))

What will the following code log to the console and why?

```js
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);
```

* 

10.([source](https://launchschool.com/exercises/73c36214))

What will the following code log to the console and why?

```js
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
```

*

11\. ([source](https://launchschool.com/exercises/84f23c76))

What will the following code log to the console and why?

```js
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
```

* Global variable ```a``` is declared with ```const``` on line 1-4 and assigned to the object ```{firstName: 'John', lastName: 'Doe'}```
* 
* function ```myFunction();```is invoked on line 10 which changes the value of the property ```firstName``` of the object ```a``` from 'John' to 'Jane'. Returning undefined. Even that ```a``` is a constant variable doesn't mean that the object it references isn't mutable, it just means that ```a``` can't be reassigned.
* function ```console.log()```with an argument of ```a``` is invoked which logs ```{ firstName: 'Jane', lastName: 'Doe'}``` to the console.

Conditionals
============

12\. ([source](https://launchschool.com/exercises/f83e8ac3)) 

Predict the output of the following code:

```js
if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}
```

*

13\. ([source](https://launchschool.com/exercises/5fdb6386)) 

Predict the output of the following code:

```js
if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}
```

*

14\. ([source](https://launchschool.com/exercises/f1dfe3f6))

Without running the below code, determine what will be logged to the console.

```js
let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);
```

*

15\. ([source](https://launchschool.com/exercises/111638e5)) 

Determine what the following code snippet logs. First solve it in your head or on paper, and only then run it in your JavaScript console to check the result.

```js
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);
```

*

BONUS: Do we need the parentheses in the boolean expression or could we also have written the following?

```js
let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
```

*

Loops
=====

16\. ([source](https://launchschool.com/exercises/5bd541dc)) 

The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.

```js
let i;

for (i = 0; ; i += 1) {
  console.log("and on");
}
```

*

Objects
=======

17\. ([source](https://launchschool.com/exercises/516713a8)) 

We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.

```js
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
}

for (prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}
```

*

Debugging
=========

18\. ([source](https://launchschool.com/exercises/681d8f05))

Gemma and some friends are working on a complex program to generate word ladders, transforming one word into another word one character at a time. The smallest of her tasks is to print the resulting ladder to the screen.

A "ladder" is simply an array of word strings; Gemma decides to transform this array into a single string where each word within the string is separated by a hyphen ('-'). For example, the array ['pig', 'pie', 'lie', 'lit', 'let'] should be printed as the string 'pig-pie-lie-lit-let'.

Upon first glance, Gemma's code below looks like it should work. But it throws a TypeError, saying: Cannot read property 'forEach' of undefined. Why is that?

```js
let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail
```

*

19\. ([source](https://launchschool.com/exercises/f319b8bc))

We have been asked to implement a function that determines whether or not a given word is a reserved keyword. We wrote the isReserved function below along with some test cases, but we aren't seeing the expected result. Why not? Fix the code so that it behaves as intended.

```js
const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      return true;
    }
  });

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true
```

*

20\. ([source](https://launchschool.com/exercises/bb8f2935))

One bored and hungry evening we decided to randomly generate recipes. We can't wait to see the first suggestions, but JavaScript raises a TypeError, telling us that dishName.join is not a function. What is wrong?

```js
// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = random(adjective) + random(firstNoun) + random(secondNoun);
let dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));
```

*

21\. ([source](https://launchschool.com/exercises/ad7d2874))

We were asked to implement a task list and the following functionality:

- adding a new task

- completing a given number of existing tasks

- displaying the task list

We decided to keep things simple and model the tasks as strings. Completing a task for us simply means deleting the string from the array of tasks.

Experimenting with our code reveals that it doesn't work exactly as we expected. Find the problem and fix it.

```js
let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    delete todos[0];
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();
```

*

22\. ([source](https://launchschool.com/exercises/ca783829))

We are assigned the task to implement a range function that returns an array of integers beginning and ending with specified start and end numbers. When only a single argument is provided, that argument should be used as the ending number and the starting number should be 0.

Check our code below. Why do the the example invocations fail with an error saying Maximum call stack size exceeded? Can you fix the code, so it runs without error and satisfies the requirements?

```js
function range(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));
```

*

23\. ([source](https://launchschool.com/exercises/f6207bd4))

Caroline manages the member directory of her club and decided to implement a program she can use for doing that. Since the club is not very big, it's sufficient for her to keep the members' names and phone numbers in an object. Later she wants to add functionality that allows her to write this object to a file.

One requirement Caroline takes very seriously is input validation. She intended for her code to strictly require that only alphabetic letters be included in the members' first and last names, separated by a space. But upon making a typo when entering the information of the newest member, she realizes that isn't the case.

Figure out why not and fix the code so that it works as expected. You may also consider writing a few more test cases to insure that the input validation requirement is properly met.

```js
let memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) {
  return (/^\w+ \w+$/).test(name);
}

function isValidPhone(phone) {
  return (/^\d{3}-\d{4}$/).test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

addMember('Laura Carlisle', '444-2223');
addMember('Rachel Garcia', '232-1191');
addMember('Earl 5mith', '331-9191');

console.log(memberDirectory);
```

*

24\. ([source](https://launchschool.com/exercises/59187001))

We want to implement a role-playing game and started working on the dice roll functionality. First, study the game code. Then take a look at the example output and information provided below.

```js
// Standard role-playing dice, with 20 faces,
// specified in terms of minimum and maximum face value.

let d20 = {min: 1, max: 20};

function roll(die) {
  return Math.floor(Math.random() * (die.max - die.min + 1)) + die.min;
}

// Standard target roll tossing a 20-sided die,
// with optional bonus and penalty dice.
// Used to determine whether a character wanting to perform an action
// succeeds or fails, based on whether the sum of the dice is higher
// or lower than the relevant character trait.
// (See below for examples.)
function targetRoll(characterValue) {

  let result = roll(d20);

  console.log("--> " + result);

  switch (result) {
    case 1:
      automaticFail();
    case 20:
      automaticSuccess();
    default:
      void (result >= characterValue ? success() : fail());
  }
}

function success() {
  console.log("Your character succeeds.");
}

function fail () {
  console.log("Your character fails.");
}

function automaticSuccess() {
  console.log("Your character succeeds without effort. Glory!");
}

function automaticFail() {
  console.log("Meagre attempt. Your character fails miserably.");
}

// Example character.
let myCharacter = {
  name: 'Jenkins',
  strength: 4,
  constitution: 6,
  education: 11,
  luck: 3,
  sanity: 9,
};

// Example rolls:

// Jenkins wants to break in a door with brute force,
// so he has to roll against his strength value.
targetRoll(myCharacter.strength);

// Jenkins found an ancient scroll and attempts to decipher it.
// He has to roll against his education, in order to determine
// whether he's able to read it.
targetRoll(myCharacter.education);
```

*

When playing around with the above program, our two test rolls result in two random values that produce the sample output below (because each dice roll produces a random value, your output may differ). The outcome of rolling 16 looks correct, but the output when we rolled values 1 and 20 doesn't make sense. For each roll, only one outcome should be displayed. What is wrong with the code?

```js
--> 1
Meagre attempt. Your character fails miserably.
Your character succeeds without effort. Glory!
Your character fails.
--> 20
Your character succeeds without effort. Glory!
Your character succeeds.
--> 16
Your character succeeds.
```

*

25\. ([source](https://launchschool.com/exercises/23afd966https://launchschool.com/exercises/860af5ab))

Professor Graham is wrote some simple code to help him determine the average and median scores on each of his quarterly exams, but some of the test cases are failing. Figure out why, and write the code necessary for the program to work as expected.

```js
function average(nums) {
  let sum = nums.reduce((total, num) => total + num);

  return sum / nums.length;
}

function median(nums) {
  let median;
  let length = nums.length;

  nums.sort();

  if (length % 2 === 0) {
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

// Tests

let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// should all log 'true':
console.log(average(quarter1ExamScores) === 86.8);
console.log(average(quarter2ExamScores) === 86.3);
console.log(average(quarter3ExamScores) === 83.7);
console.log(average(quarter4ExamScores) === 88.8);

console.log(median(quarter1ExamScores) === 89.5);
console.log(median(quarter2ExamScores) === 89.5);
console.log(median(quarter3ExamScores) === 87);
console.log(median(quarter4ExamScores) === 89.5);
```

*

26\. ([source](https://launchschool.com/exercises/28cb5e8c))

There are a lot of exciting classes offered in our region. We wrote a small script that checks which ones are still upcoming and compatible with our calendar. We must be available to attend all sessions of a particular class in order to sign up for it. We can always arrange that on weekends, but for weekdays we have to check whether our calendar is free.

Although the code below runs, something is wrong with it. Why is everything except for the Back To The Future Movie Night in the list of compatible classes?

```js
function toDate(string) {
  return new Date(string + "T00:00:00");
}

const TODAY = toDate("2018-08-05");

function toString(date) {
  return `${date.getYear()}-${date.getMonth()}-${date.getDay()}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 && date.getDay() <= 5;
}

let myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"]
};

let offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsey Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"]
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    let dateStr = toString(date);
    return !calendar[dateStr] || calendar[dateStr].length === 0;
  }

  let compatibleClasses = [];

  Object.keys(classes).forEach(className => {
    let classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]
```

*

27\. ([source](https://launchschool.com/exercises/5d853595))

We wrote a neutralize function that removes negative words from sentences. However, it fails to remove all of them. What exactly happens?

```js
function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.
```

*

Lesson 3 Practise Problems: Easy 3
==================================

28\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/da7ec933))

What will the following code output?

```js
console.log([1, 2, 3] + [4, 5]);
```

*

29\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/da7ec933))

What will the following code output?

```js
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)
```

*

30\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/da7ec933))

What will the following code output?

```js
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
```

*

31\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/da7ec933))

The following function unnecessarily uses two return statements to return boolean values. How can you eliminate the unnecessary duplication?

```js
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
```

*

Lesson 3 Practice Problems: Medium 1
====================================

32\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/e4fb9aaf))

How can he make this work without using a do/while loop?

```js
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
```

*

33\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/e4fb9aaf))

What is the difference between these two functions?

```js
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
```

*

34\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/e4fb9aaf))

What will the following two lines of code output?

```js
console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
```

*

34\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/e4fb9aaf))

What will the following code output?

```js
let nanArray = [NaN];
console.log(nanArray[0] === NaN);
```

*

35\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/e4fb9aaf))

What will the following code output?

```js
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);
```

*

36\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/e4fb9aaf))

What will the following code output?

```js
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
```

*

37\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/e4fb9aaf))

What will the following code return?

```js
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
bar(foo());
```

*

Lesson 3 Practice Problems: Hard 1
==================================

38\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/59c055ee))

Will the following functions return the same results? Why?

```js
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());
```

*

36\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/59c055ee))

What will the following code output?

```js
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);
```

*

37\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/59c055ee))

What will the following code output?

```js
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

*

38\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/59c055ee))

What will the following code output?

```js
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

*

39\. ([source](https://launchschool.com/lessons/0206c7f9/assignments/59c055ee))

What will the following code output?

```js
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
```

*

Lesson 4 Practice Problems
==========================

40\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What is the return value of filter()? Why?

```js
[1, 2, 3].filter(num => 'hi');
```

*

41\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What is the return value of map()? Why?

```js
[1, 2, 3].map(num => {
  num * num;
});
```

*

42\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What is the return value of map()? Why?

```js
[1, 2, 3].map(num => num * num);
```

*

43\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What is the return value of the following code? Why?

```js
['ant', 'bear', 'caterpillar'].pop().length
```

*

44\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What is the return value of the following code? Why?

```js
[1, 2, 3].every(num => {
  return num = num * 2;
});
```

*

45\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What is the return value of the following code? Why?

```js
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
```

*

Lesson 5: Working with Callback Functions - Examples
====================================================

46\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What's happening in this piece of code?

```js
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined
```

*

47\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What's happening in this piece of code?

```js
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]
```

*

48\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What will this code return? What will the side-effects be?

```js
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});
```

*

49\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What will this code output and what will the value of `myArr` be?

```js
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});
```

*

50\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What will the return value be in this example?

```js
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});
```

*

51\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What is happening in this code?

```js
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
```

*

52\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What is happening in this code?

```js
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]
```

*

53\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What is happening in this code?

```js
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]
```

*

54\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

What is happening in this code?

```js
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});
```

*

Lesson 5: Advanced Javascript Collections - Practice Problems
=============================================================

55\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2))

Given the following code, what will the final values of `a` and `b` be?

```js
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;
```

*

Questions from Quizzes
======================

56\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2https://launchschool.com/quizzes/a817ba73))

Which names are in scope after the last line executes but before the program ends?

```js
let foo = 1;
function bar() {
  let xyz = 3;
  const qux = 5;
  return qux;
}

const yam = function() {};
bar();
```

*

57\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2https://launchschool.com/quizzes/a817ba73))

Describe what is happening in this code:

```js
let foo = 1;

function bar() {
  let foo = 2;
  console.log(foo);  // logs 2
}

bar();
```

*

58\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2https://launchschool.com/quizzes/a817ba73))

Describe what is happening in this code (different from above):

```js
function bar() {
  let foo = 2;
  console.log(foo);  // logs 2
}

let foo = 1;
bar();
```

*

59\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2https://launchschool.com/quizzes/a817ba73))

The following code has log calls on lines 1, 4, 8, 10, and 16\. In what sequence will those 5 log calls execute? Why?

```js
console.log(foo());

function foo() {
  console.log('Waiting for bar!');
}

function foo() {
  console.log(foo);
  function bar() {
    console.log('bar again');
  }

  bar();

  function bar() {
    console.log('bar again and again');
  }
}
```

*

60\. ([source](https://launchschool.com/lessons/60e10aa5/assignments/d4f91ca2https://launchschool.com/quizzes/a817ba73))

Will the 3 output lines always match each other? Why?

```js
function foo1(a) {
  return 2 * a;
}

let foo2 = function(a) {
  return 2 * a;
};

const foo3 = a => 2 * a;

// create a random integer between 0 and 9
let randomNumber = Math.floor(10 * Math.random());

console.log(foo1(randomNumber));
console.log(foo2(randomNumber));
console.log(foo3(randomNumber));
```

*

61\. ([source](https://launchschool.com/quizzes/b4dc8a2c))

If any, which built-in array method is this code most similar to?

```js
let result = ['a', 'b', 'c'].someMethod(function(item) {
  console.log(item);
});

result; // []
```

*

62\. ([source](https://launchschool.com/quizzes/b4dc8a2c))

If any, which built-in array method is this code most similar to?

```js
let result = [1, 2, 3, 4, 5].someMethod(num => num + 1);
result; // []
```

*

63\. ([source](https://launchschool.com/quizzes/b4dc8a2c))

If any, which built-in array method is this code most similar to?

```js
let colors = ['green', 'blue', 'red'];
let result = colors.someMethod(word => word.toUpperCase());
result; // ['GREEN', 'BLUE', 'RED']
```

*

64\. ([source](https://launchschool.com/quizzes/b4dc8a2c))

If any, which built-in object method is this code most similar to?

```js
const obj = { a: 'able', b: 'baker', c: 'charley' };
let result = someMethod(obj).map(value => value.toUpperCase());
// => [ 'ABLE', 'BAKER', 'CHARLEY' ]
```

*

65\. ([source](https://launchschool.com/quizzes/90380894))

Describe what this code is doing:

```js
let arr = [340, 15, 1, 3400];
arr.sort(); // => [ 1, 15, 340, 3400 ]
```

*

66\. ([source](https://launchschool.com/quizzes/90380894))

Describe what this code is doing:

```js
const ARR = [
  { one: '1', two: 2 },
  [ { four: 5, three: 6 }, 'three' ],
  'three',
  { '2': 'two', '3': 'three' }
]

ARR[1][0]['three']; // => 6
```

*

67\. ([source](https://launchschool.com/quizzes/90380894))

Describe what this code is doing:

```js
let todoLists = [
  {
    id: 1,
    listName: 'Groceries',
    todos: [
      { id: 1, name: 'Bread', completed: false },
      { id: 2, name: 'Milk', completed: false },
      { id: 3, name: 'Apple Juice', completed: false }
    ]
  }
];

todoLists[0]['todos'][2]['name'] = 'Orange Juice';
```

*

68\. ([source](https://launchschool.com/quizzes/90380894))

What is the return value of the final line?

```js
function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]);
```

*

Examples from our study session on Sun 3rd May
==============================================

69\. (from Brian to Marc)

What is the return value of the final line?

```js
function makePerson() {
  let name = "Marc";
  return function() {
    console.log(name);
  };
}
let name = "Dmytro";
let person = makePerson();
person();
```

*

70\. (from Brian to Marc)

What does sayHi() output to the console? Why?

```js
let phrase = "Bonjour";
if (true) {
  let user = "Jean";
  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}
sayHi();
```

*

71\. (from Marc to Dmytro)

What does this code output to the console? Why?

```js
const greeting = "Hello!";
function change(greeting) {
    greeting = "Hi!";
    while (greeting === "Hi!") {
        greeting = "Alright?";
        let greeting = "What up?";
    }
    return greeting;
}
console.log(change());
```

*

72\. (from Marc to Dmytro)

What does this code output to the console? Why?

```js
let words = [["hunter", "spear"], ["gatherer", "sack"]];
// adding "s" to each word
function pluralize(array) {
    return array.map(words => {
        words[0] += "s";
        words[1] += "s";
        return words;
    });
}
console.log(pluralize(words));
console.log(words);
```

*

73\. (from Dmytro to Brian)

How many scopes are in the function below? Please explain why you think so? What is the return value of function? Why?

```js
function printSomething(string) {
  let printString = string => console.log('=> ' + string);
  let length = i => i.length;
  for (let i = 0; i < 3; i++) {
    console.log(printString);
  }
  if (string.length > 5) {
    printString(`Wow, this is a long string. It consists of ${length(string)} characters.`);
  }
}
printSomething('longWord');
```



74\. (from Dmytro to Brian)

What is going to be printed on line 6? Why?

```js
let array = [1, 2, 3, 4, 5].filter(num => {
  num < 2;
})
console.log(array);
```

*