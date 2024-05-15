const promiseOne = new Promise(function(resolve, reject){
    // Do an Async task
    // DB calls, cryptography, networkcalls
    setTimeout(function(){
        console.log('Async task is completed')
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})