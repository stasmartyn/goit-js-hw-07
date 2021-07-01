const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const cooklist= document.getElementById('ingredients');
  for(let ingredient of ingredients){

    let node=document.createElement('li');
    node.append(document.createTextNode(ingredient));
cooklist.append(node);
  };