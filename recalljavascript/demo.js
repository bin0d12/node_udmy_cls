// var a = 20;
// var b = a
// b = 30
// console.log(a,b);


function isPrime(num){
    if(num < 2) 
    return 'please provide greater then 2'
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return `${num} is not a prime number`
        }
    }
    return `${num} is a prime number`
}

console.log(isPrime(5));