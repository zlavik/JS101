function centerOf(string) {

  if (string.length % 2 === 0) {
    return `${string[(string.length / 2) - 1]}${string[(string.length / 2)]}`;
  } else {
    return `${string[(string.length - 1) / 2]}`;
  }

}


centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
