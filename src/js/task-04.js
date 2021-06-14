let counterValue = 0;

 
let changeValue=document.getElementById("value")
const buttonplus = document.getElementById("plus");
const buttonminus = document.getElementById("minus");

buttonminus.addEventListener('click', function()  {
    counterValue--;
    changeValue.textContent=counterValue;

});

buttonplus.addEventListener('click', function() {
    counterValue++;
    // TODO:ADD FUNCTION;
    
  changeValue.textContent=counterValue;
    
});
