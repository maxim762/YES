function showText(text) {
    document.getElementById("fullscreen").style.display = "flex";
    document.getElementById("fulltext").innerText = text;
}

function closeText() {
    document.getElementById("fullscreen").style.display = "none";
}

let a = prompt('Готова?');
if (a === "Да" ){
    alert("Выбирай")
}else {
    alert("НЕ ПОН!")
}