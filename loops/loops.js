// sum nakalo using while loop 1 se 5 tak
/*
let sum=0
let i=1
while(i<=5){
    sum += i
    console.log(i)
    i++
}
console.log(`sum is ${sum}`)
*/


// 5 se 1 tak loop chala ho while loop aur sab ak array me daro o array ka name hoga count
/*
let count=[]
let i=5
while(i>0){
    count.push(i)
    i--
}
console.log(count)
*/



//  do while loop chala ho ak prompt ke saath agar user stop di to stop ho jaye aur more items di to add

/*
let carCollection=[]
let car;
do{
    car=prompt(`Enter Karo Car Names Ko Jo Ap Future Me Buy Karna chahti Ho ("Stop type karo exit ke liye")`)
    
    if(car !== 'stop'){
        carCollection.push(car)
    }

}while(car !== 'stop')
console.log(carCollection)
*/

// do while rikho 1 3 tak aur usko store karo total me
let i=1
let total=0
do{
 total+=i
 i++
}while(i<=3)



// [2,3,4,5] is array ko multiply 2 se karke new array do using for loop

let numbers=[2,3,4,5]
let MultipleNumbers=[]
for(let i=0; i<numbers.length; i++){
    // console.log(numbers[i]*2)
    let takenNumber=numbers[i]*2
    MultipleNumbers.push(takenNumber)

}
// console.log(MultipleNumbers)


let cities=['Ahmedabad','Vadoda','Surat','Bng']
let CollectCities=[]
for(let c=0; c<cities.length;c++){
    const city=cities[c]
    CollectCities.unshift(city)
}
console.log(CollectCities)


