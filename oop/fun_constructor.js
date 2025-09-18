function Car(carName,model){
    this.carName=carName
    this.model=model
}

let car=new Car('80',2001)
// console.log(car)

function Food(biryany){
    this.biryany=biryany
    this.test=function(){
        return `this food is my fav ${this.biryany}`
    }
}
let food=new Food('chicken biryany')
// console.log(food)
// console.log(food.test())

// const and prototypes
function Animal(spicies){
    this.spicies=spicies
}
Animal.prototype.sound=function(){
    return `${this.spicies} make sound`
}
let animal=new Animal('Dog')
// console.log(animal)
// console.log(animal.sound())


// new key word na ho to error do

function Laptop(laptop){
    if(!new.target){
        throw new Error('missing new keyword')
    }
    this.laptop=laptop
}
let mylap=new Laptop('hp')
console.log(mylap)
