const Lisaa = document.getElementById("lisaa");
const Poista = document.getElementById("poista");
const Jarjesta = document.getElementById("jarjesta");
const KaveriLista = [];

function LisaaKaveri() {
    let Kaveri = document.getElementById("Teksti").value;
    if (Kaveri !== "") { 
        KaveriLista.push(Kaveri);
        var li = document.createElement("li"); 
        var text = document.createTextNode(Kaveri);
        li.appendChild(text);
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("Teksti").value = "";
}
function PoistaKaveri() {
    let Kaveri = document.getElementById("Teksti").value;
    if (Kaveri !== "") { 
        const index = KaveriLista.indexOf(Kaveri);
        if (index > -1) {
            KaveriLista.splice(index, 1);
            const ul = document.getElementById("myUl");
            const listItems = ul.getElementsByTagName("li");

            for (let i = 0; i < listItems.length; i++) {
                if (listItems[i].textContent === Kaveri) {
                    ul.removeChild(listItems[i]);
                    break;
                }
            }
        }
    }
    document.getElementById("Teksti").value = "";
}

function JarjestaKaverit(){
    KaveriLista.sort();
    const ul = document.getElementById("myUl");
    while (ul.hasChildNodes()){
        ul.removeChild(ul.firstChild);
    }
    KaveriLista.forEach(addToUl);
    function addToUl(element){
        console.log(element);
        var li = document.createElement("li"); 
        var text = document.createTextNode(element);
        li.appendChild(text);
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("Teksti").value = "";
}

Lisaa.addEventListener("click", LisaaKaveri);
Poista.addEventListener("click", PoistaKaveri);
Jarjesta.addEventListener("click", JarjestaKaverit);