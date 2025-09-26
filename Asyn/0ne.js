let promise= new Promise((resolve,reject)=>{
    let promise=false
    if(promise){
        resolve('Successfully Fetch The Data🤝')
    }else{
        reject('error occuried🤖')
    }
})
promise.then((value)=>{
    // console.log(value)
})
.catch((ERROR)=>{
    // console.log('Mistake ,',ERROR)
})


/* 
syntax
any funtion or variable
let promise = use new keyword to create promise , new promise((resolve,reject)=>{
        // asynchronous operation
    })
promise.then((value)=>{
    fullfill state
})
.catch((Error)=>{
    reject state
    })
*/


/* 
// example hai biryani order ka
function Myorder(){
    console.log('Restuarant Received Order')
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let biryaniReady=true
            if(biryaniReady){
                resolve('Biryani Ready😋')
            }else{
                reject('sorry no biryani today😞')
        }
    },4000)
})
} 
Myorder().then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})
console.log('Watch Sultan While Waiting 🎥')
*/


// promises chaining
function order(food){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                console.log(`Order Confirm ${food} `)
                resolve(food)
    },3000)
    })
}
function paymentProcess(food){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Payment Successfully✅`)
            resolve(food)
        },3000)
    })
}
function deliverySucc(food){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Food Derivery Successfully ${food}✅`)
            resolve(food)
        })
    })
}


order('biryani')
.then((food)=>paymentProcess(food))
.then((food)=>deliverySucc(food))
.then((msg)=>console.log(`Enjoy Your Food ${msg} ☺️`))


async function getAll(){
    try{
        
       let orderFood= await order("biryani")
       let payment=await paymentProcess(orderFood)
       let delivery=await deliverySucc(payment)
       console.log(delivery)

    }
    catch(err){
        console.log('error',err)
    }
}
getAll()