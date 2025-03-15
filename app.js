// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];

function agregarAmigo(){
let valorInput = document.getElementById('amigo').value;
if(valorInput != ""){
    amigos.push(valorInput);
    document.getElementById("amigo").value = "";
    recorreLista();
}else{
    alert("La caja de texto esta vacia");
}
}
function recorreLista(){
 let lista=document.getElementById('listaAmigos');
 lista.innerHTML= "";
    for(let i=0 ; i<amigos.length ; i++){
       let item=document.createElement("li");
       item.textContent = amigos[i];
        lista.appendChild(item);
    }
   
}

function sortearAmigo(){
    let resultado=document.getElementById('resultado');
    resultado.innerHTML = "";
    if(amigos[0]==undefined){
        alert("la lista esta vacia");
}else{
    let amigoSorteado = Math.floor(Math.random()*amigos.length);
    let textoLista=document.createElement("li");
    textoLista.textContent = amigos[amigoSorteado];
    resultado.appendChild(textoLista);

    
}
}