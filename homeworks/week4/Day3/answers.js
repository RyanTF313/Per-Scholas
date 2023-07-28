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

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

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
