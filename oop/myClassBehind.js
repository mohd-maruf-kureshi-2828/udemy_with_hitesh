// class User{
//     constructor(name,course,gmail,pass){
//         this.name=name
//         this.course=course
//         this.gmail=gmail
//         this.pass=pass
//      }
//      addInlastPas(){
//         return `${this.pass}@#`
//      }
//      userNameInCapital(){
//         return `${this.name.toUpperCase()}`
//      }
// }

// let User1=new User('Ammu','B.tech','@gmailAmmu','ammu')
// console.log(User1.addInlastPas())
// console.log(User1.userNameInCapital())


// behind the scene classes na hote to kise rikhte
function User(name, course, gmail, pass) {
    this.name = name
    this.course = course
    this.gmail = gmail
    this.pass = pass
}

Object.prototype.lastPas=function(){
    return `${this.pass}@!@#`
}
Object.prototype.UserNameCapital=function(){
    return `${this.name.toUpperCase()}`
}

let user=new User('arbaz','bca','gmail@com',1234)
console.log(user.UserNameCapital())
console.log(user.lastPas())