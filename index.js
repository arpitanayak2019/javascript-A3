//Question 1 - write a javascript program to construct the following pattern,using a nested for loop.
// *
// **
// ***
// ****
// *****

//solution
// rows = 5
// let pattern = "";
// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < i; j++) {
//         pattern += " * ";   
//     }
//     pattern += "\n";
    
// }
// console.log(pattern);

//Question 2 - Iterate through all numbers from 1 to 45 .print the following.
//  For multiples of 3 print "Fizz"
//  for multiples of 5 print "Buzz"
//  for multiples of 3  and 5 print "fizzBuzz"
//solution -


// for (let i = 0; i <= 45; i++) {

//     if (i % 3 === 0) {

//         console.log("fizz")

//     } else if (i % 5 === 0) {

//         console.log("buzz")
//     } else if (i % 3 === 0 && i % 5 === 0) {

//         console.log("fizzbuzz")

//     } else {

//         console.log(i)
//     }
// }

// Question 3 - calculate the sum of all the numbers in the following array
//var numbersArray = [1 ,13 ,22 ,123 ,49]
// let numbersArray = [1 ,13 ,22 ,123 ,49]
// let sum = 0;

// for (let i = 0; i < numbersArray.length; i++) {

//     sum += numbersArray[i];

// }

// console.log(sum)

//Question 4 - Get the sum of two arrays actually the sum of all their elements.
// let arr_1 = [3 ,5 ,22 ,5 ,7 ,2 ,45 ,75 ,89 ,21 ,2];
// let arr_2 = [9 ,2 ,42 ,55 ,71 ,22 ,4 ,5 ,90 ,25 ,26];
// let sum1 = 0
// let sum2 = 0
// let total = 0


// for (let i = 0; i < arr_1.length; i++) {
//     sum1 += arr_1[i]

// }


// for (let j = 0; j < arr_2.length; j++) {


//     sum2 += arr_2[j]
// }


// total = sum1 + sum2;
// console.log(total)

//Question 5 - Using a for loop output the elements in reverse order.
// let arr = [43, "what",9 ,true ,"cannot",false,"be",3 ,true];
// let reversedArray = [];

// for(let i = arr.length -1; i >= 0; i--){
//     reversedArray.push(arr[i])
     
// }
// console.log(reversedArray);



