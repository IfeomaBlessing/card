let form = document.getElementById("form");
let complete = document.getElementById('complete')
let confirmBtn =document.getElementById("confirm")
let continueBtn =document.getElementById("continue")

confirmBtn.addEventListener('click',function(){
    complete.style.display ='block';
    form.style.display ='none';
});

continueBtn.addEventListener('click',function(){
    form.style.display ='block';
    complete.style.display ='none';
})