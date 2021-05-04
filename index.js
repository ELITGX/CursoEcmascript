function newFunction(name, age, country){
    var name = name;
    var age = age;
    var country = country;
    console.log(name,age,country);
}

//es6
function newFunction2(name = "oscar", age = 32, country = "IT"){
    console.log(name, age, country);
}
newFunction2();//si no le paso ningun parametro, me tomara los valore por defecto que le dimos a la función
newFunction2("Ricardo,", 23, "CO");

//Template literals
let hello = "Hello";
let world = "World";
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);