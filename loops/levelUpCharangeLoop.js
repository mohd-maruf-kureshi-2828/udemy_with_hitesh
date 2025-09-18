let myCars=['BMW','Audi','80','Scorpio','belero']
let Selected=[]
for(let car=0; car<myCars.length; car++){
    if(myCars[car]==='80'){
        break;
    }
    Selected.push(myCars[car])
}
// console.log(Selected)

let myLang=['js','py','ruby','golang']
let meNo=[]
for(let i=0; i<myLang.length; i++){
    if(myLang[i] === 'ruby'){
        continue
    }
    meNo.push(myLang[i])
}
// console.log(meNo)


// using for of add karo ak array ko dusre array me
// let favCars=['BMW','Scorpio','Fortuner']
// let myCar=[]
// for(let car of favCars){
    // myCar.push(car)
// }
// console.log(myCar)


// using for loop break
/*
let favCars=['BMW','Scorpio','Fortuner','Skoda','Audi']
let myCar=[]
for(let car of favCars){
    if(car === 'Fortuner'){
        break
    }
    myCar.push(car)
}
console.log(myCar)
*/


/*
let favCars=['BMW','Scorpio','Fortuner','Skoda','Audi']
let myCar=[]
for(let car of favCars){
    if(car === 'Fortuner'){
        continue
    }
    myCar.push(car)
}
// console.log(myCar)
*/


/*
let indCities={
    Mumbai:'bollyhood',
    Bng:'IT Hub',
    jaipur:'pink',
    Delhi:'Capital'
}
let citiesDetails={}
for(let city in indCities){
   //key chaiye ho to sirf
    //  console.log(city)

    // value aise access karte hai
    // console.log(indCities[city])

    if(city === 'jaipur'){
        break
    }

    citiesDetails[city]=indCities[city]
}
console.log(citiesDetails)
*/



let indCities={
    Mumbai:'bollyhood',
    Bng:'IT Hub',
    jaipur:'pink',
    Delhi:'Capital'
}
let citiesDetails={}

for(let city in indCities){
    if(city==='bng' || city==='Bng'){
        continue
    }
    citiesDetails[city]=indCities[city]
}
// console.log(citiesDetails)


// for each loop
/*
let myArray=['java','c','c++','py','js']
let empty=[]
myArray.forEach(function(item){
    if(item ===  'c++'){
        return
    }
    empty.push(item)
})
console.log(empty)
*/

/*
let myArray=['java','c','c++','py','js']
let empty=[]
myArray.forEach((item)=>{
    if(item==='c++'){
        return
    }
    empty.push(item)
})
console.log(empty)
*/

let myAr=[2,5,7,9]
multipleNum=[]
myAr.forEach((num)=>{
    if(num===7){
        return
    }
    let mul=num*2
    multipleNum.push(mul)
})
// console.log(multipleNum)



let array=['umair','arbaz','faizan','arbshad','hassan','nizamkddddddddddddjsj']
let emp1=[]
for(let name of array){
    if(name.length>8){
        break
    }
    emp1.push(name)
}
console.log(emp1)