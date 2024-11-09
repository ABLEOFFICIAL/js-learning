var form = document.getElementById('formControl');
var listItems = document.getElementById('listItems');

form.addEventListener('submit', addListItem);
listItems.addEventListener('click', removeitem);

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
    document.getElementById('text').value = '';


}

function removeitem(e) {
    e.preventDefault();

    if(e.target.classList.contains('btn')){
        if(confirm('Are You sure?')){
            var item = e.target.parentElement;
            listItems.removeChild(item);
        }
    }
}