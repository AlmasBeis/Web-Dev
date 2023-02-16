// create new list element when button is clicked
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        newElement();
    }
});
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Вы должны что-то написать!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");

    span.className = "close"; //create close button
    span.appendChild(txt);
    li.appendChild(span);
    let close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) { //delete li when clicked close
        close[i].onclick = function() {
            let div = this.parentElement;
            div.parentNode.removeChild(div)
        }
    }
}


// Добавить "checked" символ при нажатии на элемент списка
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
});
