function eventNo(num){
    for(let i = 0; i < Math.sqrt(num); i++){
        if(i % 2 == 0){
            return true
        }
        else {
          return false
        }
         
    }
}
// eventNo(10)
console.log(eventNo(13));