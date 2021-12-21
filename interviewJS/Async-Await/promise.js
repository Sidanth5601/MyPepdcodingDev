// function placeOrder(drink) {
//     return new Promise(function (resolve, reject) {
//         if(drink === 'coffee') resolve('Order Placed')
//         else reject('Sorry we serve only coffee')
//     })
// }

// function processOrder(order) {
//     return new Promise(function(resolve) {
//         console.log("order is been processed");
//         resolve(`coffee is been served for ${order}`)
//     })
// }

// placeOrder('coffee')
// .then(function(orderFromCostumer) {
//     console.log(orderFromCostumer)
//     console.log("request received");
//     let orderProcessed = processOrder(orderFromCostumer); 
//     return orderProcessed;
// }).then(function(orderProcessed) {
//     // console.log(orderProcessed);
// }).catch(function(err) {
//     console.log(err);
// })



// function placeOrder(drink) {
//     return new Promise(function(resolve, reject) {
//         if(drink ==='coffee') resolve('order placed')
//         else reject("sorry we serve only coffee")
//     })
// }


// function processOrder(order) {
//     return new Promise(function (resolve){
//         console.log("order received");
//         resolve("served the coffee for " + order);
//     })
// }


// // // promise method 
// // placeOrder('coffee').then(function(orderFromCostumer) {
// //     console.log(orderFromCostumer)
// //     let processingOrder = processOrder(orderFromCostumer);
// //     return processingOrder;
// // }).then(function(processingOrder) {
// //     console.log(processingOrder)
// // })
// // .catch(function(err) {
// //     console.log(err);
// // })


// // async-await method

// // async - makes a function to return promise
// // await - makea a function to wait for a promise (works inside async function only)

// async function serveOrder(){

//     try {
// const orderReceived = await placeOrder('coffee');
//     console.log(orderReceived);
//     const processedOrder = await processOrder(orderReceived);
//     console.log(processedOrder);
//     }
//     catch(error) {
// console.log(error)
//     }

    
    
// }
// serveOrder()


