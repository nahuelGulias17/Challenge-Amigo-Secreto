let listaAmigos = [];
let sorteado = 0;

function agregarAmigo(){
    let input = document.getElementById("amigo").value.trim();
    if(input == ''){
        enviarAlerta();
        return;
    }
    listaAmigos.push(input);
    actualizarLista(input);
}

function actualizarLista(input){
    let listaDom = document.getElementById("listaAmigos");
    listaDom.innerHTML += '<li>' + input + '</li>';
    limpiarInput()
}

function enviarAlerta(){
    alert("Por favor, inserte un nombre.");
}

function limpiarInput(){
    document.getElementById("amigo").value = ' ';
}

function limpiarListas(){
     document.getElementById("listaAmigos").innerHTML = " ";
     listaAmigos = []
}

function sortearAmigo(){
    if(listaAmigos.length!=0){
        let maxNumero = listaAmigos.length-1;
        sorteado = Math.floor(Math.random() * maxNumero);
        let amigoSorteado = listaAmigos[sorteado];
        mostrarResultado(amigoSorteado);
    }else{
        alert ("No hay amigos para sortear.")
    }
}

function mostrarResultado(amigoSorteado){
    let elemento = document.getElementById("resultado");
    elemento.innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;
    limpiarListas();
}

