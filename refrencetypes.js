// objects are like objects in real life
//functions and arrays are also refrence types 
//let name= "david";
//let age= "28"; 
// variables above no longer needed defined in person object 
let person = {
  name: 'david',
  age: 28 
}; // curly braces delcare an object literal

// dot notation
person.name="juan";

// bracket notation
let selection = 'name';
person[selection]="maria";



console.log(person.name);
