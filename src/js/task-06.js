const validationInput=document.getElementById('validation-input');

validationInput.addEventListener('blur',(event)=>{
let length=validationInput.dataset.length;
if(length>=validationInput.value.length){

validationInput.className='valid';

    }
else{validationInput.className='invalid';
}
        });
