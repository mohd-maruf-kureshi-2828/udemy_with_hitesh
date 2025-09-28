class User{
    constructor(name,gmail,password){
        this.name=name
        this.gmail=gmail
        this.password=password
    }
    get name(){
        return this._name.toUpperCase()
    }
    set name(value){
        this._name=value
    }
    get password(){
        return `${this._password}@#`
    }
    set password(value){
        this._password=value

    }
}
let user=new User('maruf','@gmail',123)
console.log(user.name)
console.log(user.password)