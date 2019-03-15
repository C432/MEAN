// GIVEN
// console.log(example);
// var example = "I'm the example!";

// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


// // console.log(hello);
// // var hello = "world";  

// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello);
// hello = 'world';

// var needle = "haystack";
// test();
// function test() {
//   var needle = "magnet";
//   console.log(needle);
// }
// AFTER HOISTING BY THE INTERPRETER
// var needle;
// needle = "haystack";
// function test(){
//   var ne = "magnet"
//   console.log(needle);
// }
// test();
          // =>'magnet'



// var brendan = "super cool";
// function print() {
//   brendan = "only okay";
//   console.log(brendan);
// }
// console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER

// var brendan;
// brendan = "super cool";
// function print(){
// brendan = "only okay"
//   console.log(brendan);
// }
// console.log(brendan);
        // => super cool


// var food = "chicken";
// console.log(food);
// eat();
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";
// }
// AFTER HOISTING BY THE INTERPRETER

// var food;
// food = "chicken"
// function eat()
// {
//   var food;
//   food = "half-chicken";
//   console.log(food);
//   food = "gone"
// }
// console.log(food);
// eat();
          // =>chicken
          // =>half-chicken



// mean();
// console.log(food);
// var mean = function() {
//   food = "chicken";
//   console.log(food);
//   var food = "fish";
//   console.log(food);
// };
// console.log(food);

// AFTER HOISTING BY THE INTERPRETER

// var mean;
// console.log(food);
// mean();
// mean = function()
// {
//   var food;
//   food = "chicken";
//   console.log(food);
//   var food = "fish";
//   console.log(food);
// };
// console.log(food);

        //  => type error.  var mean got hoisted to the top, and we tried to invoke it before we assigned a function to it...

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//   genre = "rock";
//   console.log(genre);
//   var genre = "r&b";
//   console.log(genre);
// }
// console.log(genre);

// AFTER HOISTING BY THE INTERPRETER

// var genre;
// function rewind(){
//   var genre;
//   genre = "rock";
//   console.log(genre);
//   genre = "r&b";
//   console.log(genre);
// }
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);
        // => undefined
        // => "rock"
        // => "r&b"
        // => "disco"



// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//   dojo = "seattle";
//   console.log(dojo);
//   var dojo = "burbank";
//   console.log(dojo);
// }
// console.log(dojo);

// AFTER HOISTING BY THE INTERPRETER

var dojo;
dojo = "san jose";
function learn()
{
  var dojo;
  dojo = "seattle";
  console.log(dojo);
  dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
learn();
console.log(dojo);

          // =>san jose
          // =>seattle
          // =>burbank
          // =>san jose


// Optional:

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//   const dojo = {};
//   dojo.name = name;
//   dojo.students = students;
//   if (dojo.students > 50) {
//     dojo.hiring = true;
//   } else if (dojo.students <= 0) {
//     dojo = "closed for now";
//   }
//   return dojo;
// }