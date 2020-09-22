/*
Write a function that will take a short line of
text, and write it to the console log within a box.


Input: string
output: string with a box around it

Examples:

logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
logInBox('');
+--+
|  |
|  |
|  |
+--+

Algorithm:
  - declare a global variable that contains the tiles of box
  - declare a global variable that contains the walls of box
  - declare a function box that displays the box
    - within the box have a text parameter
    - within the box have a tiles tile variable
  - declare a function tileAndaddEmptyLine that increases the amount of
    tiles and spaces based on amount of char there is in text
    - return .length of text
  - declare a function logInBox that contains a text
    - invoke the box function with the text argument and the roofAndFloorAdder
      with the text as the parameter

*/
function displayBox(text, tiles, spaces) {
  console.log(`+-${tiles}-+`);
  console.log(`| ${spaces} |`);
  console.log(`| ${text} |`);
  console.log(`| ${spaces} |`);
  console.log(`+-${tiles}-+`);

}
function addEmptyLine(text) {
  let spaces = '';
  for (let index = 0; index <= text.length - 1; index++) {
    spaces += " ";
  }
  return spaces;
}

function addTile(text) {
  let tiles = '';
  for (let index = 0; index <= text.length - 1; index++) {
    tiles += "-";
  }
  return tiles;
}

function logInBox(text) {
  displayBox(text, addTile(text), addEmptyLine(text));
}

logInBox('To boldly go where no one has gone before.');
logInBox('Is the cat in the hat or in the box?');
logInBox('Yeet');
logInBox('This is such a long sentence that I don\'t even know if it will fit inside the box? or will it? who knows? I don\'t!');
logInBox('');