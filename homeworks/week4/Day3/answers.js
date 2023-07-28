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

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let turtle of turtles) {
  turtle = turtle.toUpperCase();
  console.log(turtle);
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
// Here is a list of favMovies:

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
// - Console log: the index of Titanic
// - Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like

// - use the .sort method
// - Thought question: what did this do to the array? Did it permanently alter it?
// A. It sorted the array alphabetically. Yes it mutated the array.
// - Use the method pop
// - push "Guardians of the Galaxy"
// - Reverse the array
// - Use the shift method
// - unshift- what does it return?
// A. It returns the new length of the array.
// - splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself)
// - Thought question: did this permanently alter our array?
// A. Yes
// - slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it)
//  - Thought question: did this permanently alter our array?
// A. No
// - store the value of your slice in a variable, console.log it
// - Thought question: what is going on here?
// - console.log your final results
// - After running the above tasks, console.log the index of "Fast and Furious"
// - We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// A. -1
// - Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
// A. No. The value of the variable is an array and const prevents us from changing that value from being an array not the elements inside of it.

console.log(favMovies.indexOf("Titanic"));
favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");
favMovies.slice(Math.floor((favMovies.length - 1) / 2), favMovies.length - 1);
const bottomhalf = favMovies.slice(
  Math.floor((favMovies.length - 1) / 2),
  favMovies.length - 1
);
console.log(bottomhalf);
console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious"));

////////////////////////////////
// Where is Waldo
////////////////////////////////
// With the following multi-dimensional array
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
// Remove Eggbert (hint look at the slice/splice method(s))
// Change "Neff" to "No One"
// Access and console.log "Waldo"

whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1)
whereIsWaldo[1].splice(whereIsWaldo.indexOf("Neff")-1, 1, "No One")
console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////

////////////////////////////////
//  Find the Median
////////////////////////////////
