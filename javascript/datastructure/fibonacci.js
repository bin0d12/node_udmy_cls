function fabonacci(n){
    const fib = [0,1];
    for(let i =2; i < n; i++){
        fib[i] = fib[i -1] + fib[i -2]
    }
    return fib
}

console.log(fabonacci(2));
console.log(fabonacci(3));
console.log(fabonacci(7));