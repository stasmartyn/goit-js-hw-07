const inputElement=document.getElementById('name-input');


function inputFunction( event){
    let inputValue=event.target.value;
    if(!inputValue){
        document.getElementById('name-output').textContent='незнакомец';
  
    }
    else{
        document.getElementById('name-output').textContent=inputValue;


    }
   
};

inputElement.addEventListener('input', inputFunction);
