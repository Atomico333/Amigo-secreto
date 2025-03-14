// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const ArregloDeNombres = [];

function agregarAmigo(){
    const input = document.querySelector('.input-name');
    if (input.value === ''){
        alert('Ingrese un nombre valido');
    } 
    else{
        ArregloDeNombres.push(input.value);
        actualizarListaDeAmigos();
        document.querySelector('.result-list').replaceChildren('');
        input.value = '';
    }
}

function actualizarListaDeAmigos(){
    const listaDeNombres = document.querySelector('.name-list');
    listaDeNombres.innerHTML = '';
    for (let i=0 ; i < ArregloDeNombres.length ; i++){
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = ArregloDeNombres[i];
        listaDeNombres.appendChild(nuevoItem);
    }
}

function sortearAmigo(){
    if (ArregloDeNombres.length === 0){
        alert('No se ingresaron nombres');
    }
    else{
        const indiceRandom = Math.floor(Math.random() * ArregloDeNombres.length);
        const amigoSecreto = ArregloDeNombres[indiceRandom];
        const listaResultado = document.querySelector('.result-list');
        listaResultado.innerHTML = `<li> El amigo secreto sorteado es: ${amigoSecreto} </li>`;
        ArregloDeNombres.length = 0;    
    }
}