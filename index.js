// console.log("ASAP FRONTEND" [12]);

let string = "ASAP FRONTEND";
console.log(string[string.length - 1]);

let userEmail = "hardik@example.com";
let age = 21;
let isLoggedIn = true;
let state = "WB";
let city = "KOLKATA";

age = age + 1
console.log(age);
console.log(userEmail);
console.log(isLoggedIn);
console.log(state);
console.log(city);

const nameLetters = "5";
// nameLetters = nameLetters + 1;
// we cannot reassign a value to a constant variable, but we can change the value of a variable declared with let.


5=='5' // true compares only the value and not the type
5==='5' // false compares both the value and the type

let comparison = 5!= '5';
console.log(comparison);
let comparison2 = 5 === '5';
console.log(comparison2);

let hasMembership = false
let signedIn = false

if (hasMembership === true) {
    console.log('show user the video')
}
else if (signedIn){
    console.log('tell user to upgrade account ')
}
else{
    console.log('tell user to login')
}

age = 21;

if (age > 18){
    console.log(`Youre ${age}yrs old, you may enter`)
}
else if ( age == 18){
    console.log("Huraay u are 18, ur welcomed")
}
else{
    console.log(" You'r " + "10" + " yrs old, get outta here ")
}

age = 22;
let hasId = false

if (age >= 18 && !hasId){
    console.log("You may enter")
}

// hasId === true
// !hasId === false


// if (age >= 18 || hasId){
//     console.log("You may enter")
// }

age = 21;
let hasPass = false

if(99){
    console.log("You may enter the club")
// entering boolean value can permit
}

age = 24;
let hasbaba = false;

let str = age >= 18 || hasbaba? "You may go" : "You may not go"
console.log(str)

let loggIn = true;
let hasSubscription = true;

// loggIn && hasSubscription? console.log("Play the video") : console.log("Get out")
let str2 = loggIn && hasSubscription? "Play": "Dont play"
console.log(str2);

// while loop

// let counter = 1;
// while(counter <=20){
//     console.log("while loop ran");
//     counter = counter +1;
// }

// console.log("while loop finished running")

// for loop

// for(let i = 0; i<5; i++){
//     console.log(i)
// }

for (let i = 1; i <= 15; ++i) {

    if (i % 5 ===0){
        console.log(`${i} - AsapFrontend`)
    }
    else if (i % 2 === 0) {
        console.log(`${i} - Frontend`);
    } else {
        console.log(`${i} - ASAP`);
    }
}

let str3 ="AsapFrontend";

for(let i = 0; i< str3.length; ++i){
    console.log(str3[i])
}



function greetUser(name,time){
    console.log(`Hello ${name}, ${time}`);
}

greetUser("Hardik","Fantastic");
greetUser("Kriti");
greetUser("Bhumika")



function main(){
    // console.log('Hello World')
    return 10
}
console.log(main())


function sum(){
    return 99+1
}
console.log(sum())


function total(num1,num2){
    return num1+num2
}
console.log(total(5,4))


function converter(dollars){
    let AUD = dollars * 1.5
    return AUD
}
console.log(converter(2000));


// Arrow Functions

const converterUsdToAud = (dollars) => {
    return dollars * 1.5;
}

console.log(converterUsdToAud(1000));


// Arrays
// Mutating method

let array = ["Apple", "Bananna", "Mango", "Melon"]
console.log(array)
console.log(array[2])
console.log(array[array.length - 1])
array.push("Bread")
console.log(array)


array.filter((element) => {
    console.log(element);
});

// Non-mutating method

let fruits = [20, 15, 10, 30];
let filteredFruits = fruits.filter((element) => {
    console.log(element);
    if (element <= 15) {
        return true;
    }
});
console.log(filteredFruits);

// 2nd Method


// let Veggies = [20, 15, 10, 30];
// let filteredVeggies = Veggies.filter((element) => {
//     return element <= 15;
// });
// console.log(filteredVeggies)

// 3rd Method


let Veggies = [20, 15, 10, 30];
let filteredVeggies = Veggies.filter((element) => element <= 15);
console.log(filteredVeggies)

let user = [
{
    email: "example@gmail.com",
    password: "test1234",
    name: "Hardik",
},
{
    email: "maths@gmail.com",
    password: "test12345",
    name: "krishnam",
}
];
console.log(user[0].email);
console.log(user[0].name);
console.log(user[0].name[0]);   

// // Method 1 (Mostly used)
// console.log(document.querySelector(`#heading`))

// // Method 2
// console.log(document.getElementById(`heading`))

document.querySelector(`h1`).innerHTML += "Asap"
document.querySelector(`h1`).style.backgroundColor= "Orange"

function changeButtonToGreen() {
    document.querySelector(`button`).style.backgroundColor = "Green"
    console.log("Change Button To Green")
}


// Objects array lil bit confusing
// last 10 min also
