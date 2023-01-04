function lessThenOrEqualToZero(num){
    if(num <= 0){
        console.log(true)
    } else{
        console.log(false)
    }
}
lessThenOrEqualToZero(0)
lessThenOrEqualToZero(1)

// using ternary operator

function lessThenOrEqualToZero1(num){
    return num <= 0 ? console.log(true) : console.log(false);;
}
lessThenOrEqualToZero1(0)
lessThenOrEqualToZero1(1)