function lineThruText(){
let listItem = document.querySelector('#argument li');
listItem.style.textDecoration = 'line-through';
};
lineThruText();



function  setImage(id, url){
const image = document.querySelector('#$id');
image.src = url

};
setImage('#image-1', 'https://sportsbookwire.usatoday.com/wp-content/uploads/sites/16/2022/08/USATSI_18870987.jpg?w=1000&h=600&crop=1');
setImage('#image-2', 'https://sportsbookwire.usatoday.com/wp-content/uploads/sites/16/2022/08/USATSI_18870987.jpg?w=1000&h=600&crop=1');
setImage('#image-3', 'https://sportsbookwire.usatoday.com/wp-content/uploads/sites/16/2022/08/USATSI_18870987.jpg?w=1000&h=600&crop=1');



function removeLine(){
const li = document.querySelector("li");
li.remove();
};
removeLine();
removeLine();

function changeFontSize(fnt, id);{
const text = document.querySelector(id);
text.style.fontSize = fnt;
}

changeFontSize("25px", "heading");

//PART TWO ==========================================================================================================================

function takeDom(li){
    let list = document.querySelector('#arguments');
    list.appendChild(li);
};

let newElement = document.createElement('li');
newElement.innerText = 'New Item';
addChild(newElement);


takeDom();
//=================================

function modifyHeight(image){
    let img = document.getElementById('');
if(img && img.style) {
    image.style.height = '30px';
    document.getElementById(""); 
}};
modifyHeight(image);

function makeInvisible(){
    const image = document.querySelector(image);
    image.classList.add('invisible');
    document.getElementById("arguments");
}
//==================================
function textMaker(text){
    let listItem = document.createElement('li');
    listItem.innerText = text;
    return textMaker(text)
}

//--================================
function createHeader(hSize, text){
let header = document.createElement('h${hSize}');
header.innerText = text;
return header;
}

let headerTest = createHeader('3', 'some text');
addChild(headerTest)