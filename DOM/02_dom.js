document.getElementById('clickMe').addEventListener('click',function(){
    alert("Event Handling In The DOM")
})



document.getElementById('proglang').addEventListener('click',function(event){
    if(event.target && event.target.matches('.lang')){
        alert(`Your Select This Lang ${event.target.textContent}`)
    }
})


document.getElementById('feedBackForm').addEventListener('submit',function(event){
    userFeed=document.getElementById('feedBackInput').value
    console.log(userFeed)
    document.getElementById('feedbackDisplay').textContent=`User FeedBack ${userFeed}`
})

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domStatus').textContent='Dom fully loaded'
})

document.getElementById('toggleHighlight').addEventListener('click',function(){
    let color=document.getElementById('descriptionText')
    color.classList.toggle('highlight')
})