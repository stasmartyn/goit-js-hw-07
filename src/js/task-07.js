const inputElement=document.getElementById('font-size-control');


function inputFunction( event){
  document.getElementById('text').style.fontSize=event.target.value+'px';
   
};

inputElement.addEventListener('input', inputFunction);
