// // // let numbers1=[1,2,3,4,5,6,7,8]
// // // let numbers2=[9,10]

// // // let num=0;
// // // let isPrime= (num)=>{

// // // }

// // function IsPrime(num){
// //     if(num%2 === 0) return false 
// //     else{          
// //     for(let i=3;i<num;i+=2)
// //         if(num%i===0)
// //             return false;
        
// //     }
// //     return true;
// // }
// let i=2;

// IsPrime(num,i){
//     if(num%i!==0)
//         IsPrime(num,i+2)
//     else return true;
//     return false;

    
// }

// console.log(IsPrime(59,i));

// //-------------------------------------------------------------

// const b=[1,2,3,4,5]

// //for of faghat baraye array va for in braye key haye object
// // for of faghat baraye ittereit ro arra
// let sum=0;
// for(let element of b){
//     sum+=element;
// }
// console.log(sum);

// let a = b.map(element){
//     return a.toUpperCase();
// }

// const array =[1,2,3,4,5,6]
// for(let element  of array){

// }


// // map ye array be andazeye array asli barmigardone, age chizi bar nagardune undifinee bar migardune map 

// // reduce ye array barmigardone

// // some mesle ||
// // indo boolean bar migardunan
// // every mesle && 
// // find string barmigardune, avvalin elementi ke ma tu shart goftim ro bar migardune

// array.forEach(num => console.log(num);)
// array.map(num=> num.reverse)

// //forEach kollan hichi return nemikone
// //arrow function dastur ro kutah mikone va age {} nabashe biniaz az return mishe
// setTimeout(() => {
//     console.log("hello");
// }, 2000);

// setInterval(() => {
//     console.log("har 3 sanie tekrar misham");
// }, 3000);
// //ba ctrl+c ham ghat' mishe

// setInterval(() => {
//     console.log(i++);
//     if(i===5){
//         clearInterval(stop);
//     }
// }, 1000);

const number =[1,2,3,4,5,6,7,8]

// let moreThanTen = number.filter(num=> num>=10)
// console.log(moreThanTen);

// const even=number.filter(no=> no%2===0)
// console.log(even)

for (let el of number) {
    el*=100;
}




















