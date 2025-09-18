class Friends{
    constructor(name,hisskill){
        this.name=name
        this.hisskill=hisskill
    }
    skill(){
        return `${this.name} skill in ${this.hisskill}`
    }
}

class Arbaz extends Friends{
    habbiet(){
        return `${this.name} Giving Advance To EveryOne`
    }
}

let myfrd=new Friends('umair','Account')
// console.log(myfrd)
// console.log(myfrd.skill)

let snfrd=new Arbaz('Arbaz','python dev')
// console.log(snfrd)
// console.log(snfrd.skill())
console.log(snfrd.habbiet())