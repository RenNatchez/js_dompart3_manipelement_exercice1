let elements = document.querySelector('#liste-competences')
var children = elements.children
elements = Array.from(children)
console.log(elements)


let compet = {
    html: 100,
    css: 70,
    js: 50,
    react: 0,
    laravel: 0,
}
var proprietes = Object.keys(compet)
console.log(proprietes)

var valeur = Object.values(compet)
console.log(valeur)

for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = `mes connaisance en ${proprietes[i]} sont de ${valeur[i]}%`
    if (valeur[i] == 100) {
        elements[i].style.color = "black";
        elements[i].style.background = "gold";
    } else if (valeur[i] > 50) {
        elements[i].style.color = "white";
        elements[i].style.background = "green";
    } else if (valeur[i] == 50) {
    } else if (valeur[i] < 50) {
        elements[i].style.background = "red";
    }
}