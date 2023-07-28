// Part I: HTML & CSS
// Rank you comfort with the following material on a scale of 0 - 5:
// 5 - I got this! I am ready to code

// Part II: JavaScript Reps
////////////////////////////////
// Easy Going
////////////////////////////////
// Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
// Write a for loop that will log only the even numbers in 0 through 200.
// Hint: Think about the increment expression.
// First option
for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Second Option
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// First Option
for (let i = 1; i <= 100; i++) {
  if (i & (3 === 0) && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i & (3 === 0)) {
    console.log("Fizz");
  } else if (i & (5 === 0)) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
// Second Option
for (let i = 1; i <= 100; i++) {
  console.log(i % 3 === 0 ? "Fizz" : null + (i % 5) === 0 ? "Buzz" : null || i);
}
////////////////////////////////
// Wild Wild Life
////////////////////////////////
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// Give D'Art a second hometown by adding "Hawkins"
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

plantee[2]++;
wolfy[3] = "Gotham City";
dart[3] += ", Hawkins";
wolfy[0] = "Gameboy";

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let turtle of turtles) {
  turtle = turtle.toUpperCase()
  console.log(turtle)
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

////////////////////////////////
// Where is Waldo
////////////////////////////////

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
