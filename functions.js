function greet(name, lastName){
    if(lastName==undefined){
        lastName='no last name input';
     }
    console.log('Hello ' + name + " " +lastName);

}
// name is parameter of greet
greet('John', 'ping'); //john is argumennt for greet
