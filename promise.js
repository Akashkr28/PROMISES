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