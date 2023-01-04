let obj = {
    name: "Binod",
    city: "berhampur",
    getIntro: function(){
    return `${this.name} from ${this.city}`;
    }
}
let obj2 = {
    name: "sameer",
    city: "balaswar"
}
obj2.__proto__ = obj
console.log(obj.getIntro())    // Binod from berhampur
console.log(obj2.getIntro())   // sameer from balaswar