function greet(name, lastName){
    if(lastName==undefined){
        lastName='no last name input';
     }
    console.log('Hello ' + name + " " +lastName);
// template literals later to help clean up code
}
// caluclating a value
function square(number){
    return number * number;
}
// name is parameter of greet
//greet('John', 'ping'); //john is argumennt for greet
let number = square(2);
console.log(number);
console.log(square(4));

