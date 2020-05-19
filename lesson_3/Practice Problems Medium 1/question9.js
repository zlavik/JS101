// Method calls can take expressions as arguments. Suppose we define
// a function called rps as follows, which follows the classic rules of
// the rock-paper-scissors game, but with a slight twist: in the event
// of a tie, it awards the win to the first of the two fists.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// What is the result of the following call?
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// Answer: paper

/*
The outermost call determines the result of comparing
rps(rps("rock", "paper"), rps("rock", "scissors"))
against rock. That means that we must evaluate the two
separate calls, rps("rock", "paper") and rps("rock", "scissors"),
and combine them by calling rps on their results. Those innermost
expressions return "paper" and "rock", respectively. Calling rps on
those two values returns "paper", which, when evaluated
against "rock", returns "paper".
*/