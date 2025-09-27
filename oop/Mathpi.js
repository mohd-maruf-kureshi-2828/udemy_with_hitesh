const mathobj=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(mathobj)
// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

let lang={
    name:'js',
    use:'Web Dev',
    price:239
}
console.log(Object.getOwnPropertyDescriptor(lang,'name'))
Object.defineProperty(lang,'name',{
    // writable: false,
    enumerable: false //false kiye matlab a iterator nhi hoga ab
})

for(let [key,value] of Object.entries(lang)){
    console.log(`${key} : ${value}`)
}