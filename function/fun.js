function makeTea(tea){
    return`making ${tea}`
}
let chai=makeTea('chai')
// console.log(chai)


function order(teaTypes){ 
    function ConfirmOrder(){
        return 'order confirmed chai'
    }
    return ConfirmOrder()

}
let chaitypes=order()
// console.log(chaitypes)


const calculatorTotal=(price,quantity)=>{
    return price*quantity
}
let totalCost=calculatorTotal(10,10)
// console.log(totalCost)


// high order funtion
function makeTea(typeoftea){
    return `making ${typeoftea}`
}

function myTea(fun){
    return fun('masala chai')
}
let final=myTea(makeTea)
// console.log(final)




function car(){
    return function(cartypes){
        return `i have this car ${cartypes}`
    }
}
let myCar=car()
// console.log(myCar('bmw'))
let result=myCar('bmw')
// console.log(result)


