function userName(username){
    this.username=username 
    console.log('call')  //call ho raha hai but call stack se nikal ja raha hai
}

function userInfo(username,course,gmail){
    // userName(username) call ho raha hai but call stack se nikal ja raha hai isliye a variable bhi nikal ja raha hai

    userName.call(this,username)  //idhar humne call funtion se call kiye aur this is hamara usko bola ab ap nikalo aur apka instance contact humko dido simple hai sir.........
    this.course=course
    this.gmail=gmail
}

let joy= new userInfo('joy','MERN','@gmail.com')
console.log(joy)