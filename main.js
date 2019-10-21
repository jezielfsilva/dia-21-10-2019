var texto = document.querySelector('.enter');
var clickar = document.querySelector('.click');
var title = document.querySelector('h1');


function appear(event) {
    title.innerHTML = texto.value
    event.preventDefault();
    console.log(event)
}

