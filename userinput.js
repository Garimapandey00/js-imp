// user input ~~ prompt
const prompt = require ("prompt-sync")({signit: true})
// var a = 22;
/* var b = prompt (prompt( "enter your name:"))//string
 console.log(typeof b); */
//guess the number
//step 1 sn = 50

//guess the number
//please enter 1 to 100
// step 1 sn = 50
//while in
//while(true){}
//prompt
//prompt == sn break
//prompt > msg your guess is high
//prompt > msg your guess is low
 
console.log("please,Guess between 1 to 100");
var sn = 50 
// var a = 10
while (true){
    var userInput = parseInt (prompt("enter the number:"))
    if (userInput == sn) {
        console.log("you win cash rs 1 lakh");
        break;
    } 
    else if (userInput > sn) {
        console.log("your guess is too high");
    } 
    else if(userInput < sn) {
        console.log("your guess is too low");
    }
}



