// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// nestedFunction can access internal because nestedFunction is nested within myFunction. What nesting means is a function within a function or something that exists inside of something else. This is similar to a child-parent relationship. The child can access things in the parent function (outside of its own function) and use it, while the parent function cannot access something inside of the child function because that is outside of its scope. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param1){
  counter++;
}