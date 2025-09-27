new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('data fetching')
    },1000)
}).then(()=>{
    console.log('successfully fetch')
})



const second=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('second data fetching.....')
        resolve()
    },1000)
})
// second.then(()=>{
//     console.log('data fetching successfully')
// })


const three=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name:'arbaz',course:'PFT',placement:null})
    },2000)
})
// three.then((userInfo)=>{
//     console.log('User Information',userInfo)
// })


const four=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let userInfo=false;
        if(!userInfo){
            resolve({name:'Sheru',pasword:12})
        }else{
            reject('Something Wrong')
        }
    },2000)
})

// four.then((user)=>{
//     console.log(user)
//     return user;
// }).then((userAcc)=>{
//      console.log(userAcc.name)
//      console.log(userAcc.pasword)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log('finally the promise either resolve or reject')
// })




