function evenNum(num){
    for(let i = 0; i <= Math.sqrt(num); i++){
        if(i % 2 === 0 ){
            return true
        } else {
            return false
        }
    }
}

console.log(evenNum(21));