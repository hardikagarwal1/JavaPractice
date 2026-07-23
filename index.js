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

for(i = 1; i<15; i++){
    console.log(i)
}
if ( i%2 ){
    console.log("Frontend")
}
if( i%3 ){
    console.log("Backened")
}
else if( i%5 ){
    console.log("ASAP")
}