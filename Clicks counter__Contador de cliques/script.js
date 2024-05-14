let clicks = 0;

function contarClick() {
clicks++;
console.log (clicks);

let contagemCliques = document.getElementById('clickCount');
contagemCliques.innerHTML = `${clicks}`;
}

//----------------Code that I've tried before---------------------
//document.addEventListener('DOMContentLoaded', function() {
    //let contagemCliques = document.getElementById('clickCount');
    //contagemCliques.innerHTML = `${clicks}`;
//});
//----------------------------------------------------------------