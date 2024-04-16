// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task is completed")
//         resolve()
//     },1000)
// })


// promiseOne.then(
//     function(){
//         console.log("Promise consummed")
//     }
// )

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async task 2")
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("promise 2 consumed")
// })



// const PromiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"suhan"})
//     },1000)
// })

// PromiseThree.then(function(user){
//     console.log(user)
// })


const promiseFour = new Promise(function(resolve,reject){
    let erro = false
    erro?resolve({username:"suhan"}):reject("Error")
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>console.log("finally"))