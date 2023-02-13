// let promise = new Promise((resolve, reject) => {
//     resolve('tomorrow i will discuss async and await keyword')
// })

// promise.then((success) => {
//     console.log(success);
// }).catch((error) => {
//     console.log("error");
// })

// // using setTimeOut

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello")
//     }, 2000);
// } )

// promise1.then((suc) => {
//     console.log(suc);
// }).catch((error) => {
//     console.log(error);
// })

// multiple promises

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise1")
//     }, 0);
// })

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("error in promise2")
//     }, 5000)
// })


// let promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise3")
//     }, 10000)
// })

// promise2.then((succ) => {
//     console.log(succ);
// }).catch((error) => {
//     console.log(error);
// })

// promise3.then((succ) => {
//     console.log(succ);
// }).catch((error) => {
//     console.log(error);
// })

// promise4.then((succ) => {
//     console.log(succ);
// }).catch((error) => {
//     console.log(error);
// })


// it will take all the promise and return in one promise
// if any one of promise is error it will throw error
// Promise.all([promise2, promise3, promise4]).then((succ) => {
//     console.log(succ);
// }).catch((error) => {
//     console.log(error);
// }) 

// error will return


// promise.allsettled it will iterate all the promise and return both full-filled or rejected promises
// Promise.allSettled([promise2, promise3, promise4]).then((succ) =>{
//     console.log(succ);
// }).catch((error) => {
//     console.log(error);
// })

// promise.race :
//  > it is use to know the which promise will execute first

// Promise.race([promise2, promise3, promise4]).then((succ) => {
//     console.log(succ);
// }).catch((error) => {
//     console.log(error);
// })


// this all above code is using then and catch key word to handle the execuation

// async & await


// let promise = new Promise((resolve, reject) => {
//     resolve("this is using async and await")
// })

// // async & await

// async function funCallAsync(){
//     const res = await promise
//     console.log(res);
// }

// funCallAsync()


// nested promise and accessing with async and await


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is promise 1")
    }, 0)
})


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is promise 2")
    }, 5000)
})


let promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("this is promise 3")
    }, 10000)
})


async function funCall(){
    let data1 = await promise
    let data2 = await promise1
    let data3 = await promise2
    console.log(data1, data2, data3);
}

funCall()