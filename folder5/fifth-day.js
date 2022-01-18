// let str1="hello";
// let str2="hi guys, i'm deniz";

// //methods

// console.log(str1.charAt(0));
// console.log(str1.endsWith());
// console.log(str1.repeat(5));
// // console.log(str1.);
// // console.log(str1.);
// let fit="13.511"

// let numbers= [1,2,3,4,5,7]

// for(const [i, number] of numbers.entries()){}

  function dices(){
    let dice1= Math.floor(Math.random()*6)+1;
    let dice2= Math.floor(Math.random()*6)+1;
    console.log(`You roled a ${dice1} and a ${dice2}. they sum to ${dice1+dice2}`)
  }  

  dices();


//------------------------------------------------------------------------------------------------------
let fibonacci_series = function (n) {
     if (n===1) { 
         return [0, 1]; 
        } else { 
            let s = fibonacci_series(n - 1); 
            s.push(s[s.length - 1] + s[s.length - 2]); 
            return s; 
        } 
    }; 
    console.log(fibonacci_series(20));