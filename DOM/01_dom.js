document.getElementById('changeText').addEventListener('click',function(){
    console.log(this)
    let change=document.getElementById('first-sec')
    change.textContent='The Content Is Changed🤝'
})


// Exaple 2
document.getElementById('highlightFirstCity').addEventListener('click',function(){
   let hold=document.getElementById('citiesList')
    // hold.firstElementChild.classList.add('highlight')
    // hold.firstElementChild.textContent='hello'
})



// Example 3
document.getElementById('changeOrder').addEventListener('click',function(){
    let changeType=document.getElementById('teaTypes')
    changeType.textContent='Masala Chai Is Ready😋'
})


// Example 4
document.getElementById('addNewItem').addEventListener('click',function(){
    let newLi=document.createElement('li')
    newLi.textContent='Chicken'
    let secLi=document.createElement('li')
    secLi.textContent='Paneer'
    document.getElementById('shopping-list').appendChild(newLi)
     document.getElementById('shopping-list').appendChild(secLi)
})


// Example 5
document.getElementById('removeLastTask').addEventListener('click',function(){
    let removeList=document.getElementById('tastList')
    removeList.lastChild.remove()
})