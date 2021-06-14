const categories=document.getElementsByClassName('item');
const getAmountListItem = (array) => { 
    return `В списке ${array.length} категории`;
    }
    console.log(getAmountListItem(categories));

    for(let i=0 ; i < categories.length;i++){
   let title=categories[i].getElementsByTagName('h2');
   console.log(title[0].innerText);

   let itemCategories=categories[i].getElementsByTagName('li');
   console.log(getAmountListItem(itemCategories));
    };

