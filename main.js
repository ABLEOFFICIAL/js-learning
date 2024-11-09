var form = document.getElementById('fornControl');
var listItems = document.getElementById('listItems');


form.addEventListener('submit', addListItem);

function addListItem(e) {
    e.preventDefault();


    var inputValue = document.getElementById('text').value;
    var newItem = document.createElement('li');
    var newDiv = document.createElement('div');

    newDiv.className = 'card';

    // add class
    newItem.className = 'items';

    // append child
    newDiv.appendChild(newItem);
    newItem.appendChild(document.createTextNode(inputValue));

    listItems.appendChild(newDiv);

    var delbtn = document.createElement('button');
    delbtn.className = 'btn';

    var delvalue = document.createTextNode('x');
    delbtn.appendChild(delvalue);

    newDiv.appendChild(delbtn);


    console.log(delbtn);

    console.log(newItem);


}
// console.log(form);