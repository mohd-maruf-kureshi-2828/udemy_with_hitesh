let maruf={
    develop:'js',
    // __proto__:arbaz
}

let arbaz={
    develop:'Python',
    __proto__:maruf
}

// let maruf={
//     develop:'js',
//     // __proto__:arbaz
// }
// console.log('maruf dev',maruf.__proto__)
// console.log('arbaz dev',arbaz.__proto__)

// notes upper ke object me nichy ke value access nhi kar sakte 


//new method
let genaralCar={
    tier:4
}
let tesla={
    driver:"AI"
}
Object.setPrototypeOf(tesla,genaralCar)
// console.log('tesla car',tesla.tier)
console.log('tesla',Object.getPrototypeOf(tesla))