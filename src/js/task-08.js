let boxesJs=document.getElementById('boxes');
let inputBox=document.getElementById('input-number');
document.getElementById('render').addEventListener('click',createButtonClicked);
document.getElementById('destroy').addEventListener('click',destroyBoxes);

function createBoxes(amount){

let width=30,heigth=30;
for(let i=0; i<amount;i++){

 let creteDiv = document.createElement('div');

 creteDiv.style.width=width+'px';
 creteDiv.style.height=heigth+'px';

 var randomColor = Math.floor(Math.random()*16777215).toString(16);
creteDiv.style.backgroundColor='#'+randomColor;

boxesJs.appendChild(creteDiv);
width+=10;
heigth+=10;
}

}

function destroyBoxes(){

    boxesJs.innerHTML='';

}


function createButtonClicked(){
createBoxes(inputBox.value);


}