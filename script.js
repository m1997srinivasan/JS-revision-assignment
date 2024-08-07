// Display Numbers from 1 to 100.
// 
var box1 = document.getElementById("box1")

function result(){
    var input1=Number(box1.value)
    for(i=1;i<=input1;i++)
        {
            console.log(i)
        }
}

// Display Even Numbers from 1 to 100.

// var box2 = document.getElementById("box2")

// function result(){
//     var input=Number(box2.value)
// for(i=2;i<=input;i=i+2)
//     {
//         console.log(i)
//     }
// }

// Display Odd Numbers from 1 to 100.

// var box2 = document.getElementById("box2")

// function result(){
//     var input=Number(box2.value)
// for(i=1;i<=input;i=i+2)
//     {
//         console.log(i)
//     }
// }

// Display Prime Numbers from 1 to 100.


function isPrime(num) { 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) { 
            return false; 
        } 
    } 
    return num > 1; 
} 
  
function printPrimeNumbers(n) { 
    for (let i = 2; i <= n; i++) { 
        if (isPrime(i)) { 
            console.log(i); 
        } 
    } 
} 
  
printPrimeNumbers(100);