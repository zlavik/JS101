function createBlankJsFiles (num) {
  for (let index = 1; index <= num; index += 1) {
    Node(`touch practiceProblem${index}`);
  }
}

createBlankJsFiles(18);