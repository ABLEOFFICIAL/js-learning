var newDiv = document.createElement('div');
newDiv.className = 'itemListing';

var divText = document.createTextNode('hello worlld')
newDiv.appendChild(divText);
var container = document.querySelector('.container');
var add = document.querySelector('.add')


console.log(newDiv);