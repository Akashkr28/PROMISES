const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    // DB calls, cryptography, networkcalls
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task Two");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async Two resolved")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Akash", email: "email.akash2010@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error){
            resolve({username: "Akash Kumar", password: "12345"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "Akash Kr", password: "12345"})
        } else {
            reject('ERROR: Execution went wrong')
        }
    }, 1000)
});

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }

// consumePromiseFive()


async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()