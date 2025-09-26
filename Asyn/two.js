function likes(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('User Like Your Post')
        },2000)
    })
}

function comment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('User Comment On Your Post')
        },3000)

    })
}

async function getAllNotification(){
    try{
         console.log('fetching data ..........')
        //  let likeSec=await likes()
        //  let commentSec=await comment()

        // second approuch
        let [likeSec,commentSec]=await Promise.all([
            likes(),comment()
        ])

         console.log(likeSec)
         console.log(commentSec)
         console.log('Open Your App')
    }
    catch(err){
        console.log(err)
    }
}

getAllNotification()