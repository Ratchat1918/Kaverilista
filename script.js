const Button=document.getElementById("Btn");

function WindowList(){
    let listateksti="";
    for (let i=0; i<10; i++){
        let kaveri=prompt("Anna kaverin nimi:");
        listateksti+="<li>"+kaveri+"</li>";
    }
    document.getElementById("kaverilista").innerHTML=listateksti;
}

Button.addEventListener("click",WindowList);