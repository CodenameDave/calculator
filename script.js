'strict'




// document.querySelector('.check').addEventListener('click', function () {
    document.querySelector('.display').textContent = 'HELLO';


  
let divName =  document.getElementById('numpad-container');
let calcbtns = divName.getElementsByClassName('btn');
for (let i =0; i< calcbtns.length; i++)
{
    calcbtns[i].addEventListener('click', function(){
    const userInput = calcbtns[i].textContent
    if(userInput >= 0 && userInput <=9)

        document.querySelector('.display').textContent = userInput  //displays to calc display

      
        
    })
}
   
    





