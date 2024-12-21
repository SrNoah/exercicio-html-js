const form = document.getElementById("form-validacao");
const campoA = document.getElementById("numero1");
const campoB = document.getElementById("numero2");

form.addEventListener("submit", function(e){
    e.preventDefault();

    if (campoA.value <= campoB.value) {
        alert("Correto, o campo b é maior que o campo A");
    } else {
        alert("Errado, o campo A é maior que o campo B!");
    }
});