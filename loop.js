// for(var i=0; i<10; i++){
//     console.log("hi");
// }
// console.log("hello");
   
//wap to multiply the number of 5?
// var a=5;
// var i;
// for(var i=1; i<=10 ; i++){
//     console.log(a*i)
// }

// for(let i=0; i>-10; i--){
//     console.log(i)
// }

// let a="5"
// let b= 5
// console.log(a == b); //true aauxa kina ki number value matra check garxa
// console.log(a === b); //false aauxa kina ki data type pani check garxa


//even number
// let n=10;
// let i;
// for(let i=1; i<=10; i++){
//     if(i%2==0){
//  console.log(i)
//     }
// }

// let sum = 0;
// for (let i = 0 ; i<=5; i++){
//     sum=sum+i;                      
//     console.log(sum)
// }

//string
// let place = "butwal"
// for(let chr of place){
//     console.log(chr)
// }

// let place = "butwal"
//  for(let i of place){
//     if(i == "a" || i == "e"){
//        console.log("vowel");
//        break;
//     }     
//  }

//wap to count the string
// let place ="cat" ;
// var c=0;
// for(let i of place){
//     c++;
// }
// console.log(c);

// let college = "lumbini" ;
// var new_college = "";
// //output lumbini
// for (let i of college){            [program bata lumbini lai Lumbini banauna gareko ho]
//     if(i == "l"){
//         new_college= new_college + "L"
//     }
//     else{
//        new_college= new_college + i
//     }
// }
// console.log(new_college);


// var line = "js is very easy"
// // output jsisveryeasy
// var liner=" ";
// for(let i of line){
//     if(i!= " "){
//       liner=liner+i
//     }
// }
// console.log(liner)

//wap to count "a" from the string

//str1="apple anta"
// var str1="apple anta"
// var count=0

// for(let i of str1){
//     if(1 == "a"){
//         count++;              (to count letter a how many a are there)
//     }
// }
// console.log(count);





//function 
// function fun1(){
    //code
// }

// var math = 20
// var science = 50
// var sum = math + science
// console.log(sum);


// function sum (a,b){
//     console.log(a+b)
// }
// sum(10,20)

//wap to greet user with his or her name pass them as parameter to the function?
// Greet("garima") //out hello miss.garima namaste     (output)

// function greet(name){
//     console.log("hello miss",name,"Namaste")
// }
// greet("Garima")                                              (greet garni program hoo)
// greet("pandey")


//wap for a shop product(price,quantity)
// function product (p,q){
//     cal = p*q
//     console.log(cal)
// }                                        (function to calculate price and quantity)
// product(100,4)
// product(120,10)

//reverse a string in a function
// function reverse_string (name){
//     var reverse= ""
//     for(let i of name){                    (reverse garna strings laii)
//         reverse = i+ reverse
//     }
//     console.log(reverse);
// }
// reverse_string("butwal")

//palindrome 
//create a function to determine if a given string is a palindrome (reads the same backward as forward)
// function palindrome(name){
//     var reverse = ""
//     for(let i of name){
//         reverse = i+ reverse
//     }
//     if (reverse == name){
//         console.log("palindrome");               (agadi ra paxadi aautei aayeko string palindrome ho )
//     }
//     else{
//         console.log("not palindrome")          
//     }
// }
// palindrome("ele")
// palindrome("eagle")


//return --- value return function name
//terminate

// function add(a,b){
//     return a+b
// }
// console.log(add(4,7));

// function add(a,b){
//     return b;
//     console.log("hi");
// }
// console.log(add(4,7));


//calculator function: write a java script function calculators and returns the values addition,subtraction, multiplication and division
// const prompt = require ("prompt-sync")({signit: true})
// function addition(a,b){
//     return a+b
// }

// function subtraction(a,b){
//     return a-b
// }

// function multiplication(a,b){
//     return a*b
// }

// function division(a,b){
//     return a/b
// }

// while(true){
//     console.log("1.addition 2.subtraction 3.multiplication 4.division")
//     let userInput= parseInt(prompt("enter your choise:"))
     
//     let num1 = parseInt(prompt("num1"))
//     let num2 = parseInt(prompt("num2"))

//     if (userInput === 1){
//         console.log(addition(num1,num2));
//     }
//     else if (userInput === 1){
//         console.log(subtraction(num1,num2));
//     }
//     else if (userInput === 1){
//         console.log(multiplication(num1,num2));
//     }
//     else if (userInput === 1){
//         console.log(division(num1,num2));
//     }
//     else if (userInput === 5){
//         console.log("thankyouuu");
//         break;
//     }
// }

