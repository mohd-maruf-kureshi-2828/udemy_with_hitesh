// Abstraction
class CoffeeMachine {
    start() {
        console.log("Starting the machine...");
    }

    brewCoffee() {
        console.log("Brewing coffee...");
    }

    makeCoffee() {
        this.start();     // andar ka process hidden
        this.brewCoffee();
        console.log("Your coffee is ready!");
    }
}

let myCoffee = new CoffeeMachine();
// myCoffee.makeCoffee(); // user ko bas makeCoffee call karna hai


// Encapsulation (Data + Functions ko ek box me band karna)

class BankAccount {
    #balance = 0;  // private property (encapsulated)

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount();
account.deposit(500);
//console.log(account.getBalance()); // ✅ balance dekh sakte hai
// console.log(account.#balance); ❌ Error: private property


// Polymorphism (ak cheez ke multiple forms)
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat meows");
    }
}

let a1 = new Dog();
let a2 = new Cat();

a1.sound();  // Dog barks
a2.sound();  // Cat meows
