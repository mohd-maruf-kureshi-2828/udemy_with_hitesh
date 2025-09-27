let names=['Arbaz','umair','Kureshi']

let infoObj={
    name:'Arbaz',
    course:'PFS',
    fullInfo:function(){
        console.log(`Name Is ${this.name} Completed This Course ${this.course}`)
    }
}

// infoObj.fullInfo()
// object create kiye hai aur a function hum sab me di sakte hai array string sab me
Object.prototype.maruf=function(){
    console.log(`Maruf Kureshi Created This Function`)
}
// infoObj.maruf()
// names.maruf()


//array me he sirf acces milta hai a prototype ka object me nhi mila ga
Array.prototype.marufArray=function(){
    console.log(`Maruf Kureshi Created Array Prototype`)
}
// names.marufArray()
// infoObj.marufArray()



let name="maruf                "

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`the lengh of ${this.trim().length}`)
}
 name.trueLength()
 'javaScript'.trueLength()