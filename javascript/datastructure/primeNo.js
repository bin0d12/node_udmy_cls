// function primeNo(num){
//     if(num < 2){
//         return false
//     }
//     for(let i = 2; i < Math.sqrt(num); i++){
//         if(num % i === 0){
//             console.log(false);
//         }
//         else {
//             console.log(true);
//         }
//     } 
//         return true   
// }

// console.log(primeNo(10));

// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
//         if(num % i === 0) return false;
//     }
//     return num > 1;
// }
// console.log(isPrime(5))

// const isPrime = num => {
//     for (var i = 2; i < num; i++) 
//        if (num % i == 0) 
//        return false;
//     return num >= 2; 
//   }
// console.log(isPrime(4))


let primeNo = num => {
    if(num < 2)
        return `${num} please give greater than 2 number`
        for(let i =2; i < num; i++){
            if(num % i === 0){
                return `${num} it is not a prime number`
            }
        }
        return `${num} it is a prime number`
}

console.log(primeNo(1));