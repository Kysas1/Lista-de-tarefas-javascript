let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('arealista')

function addTarefa(){
    //pegar o valor digitado no input
    valor = input.value ; 
    //se nao for vazio,nem nulo, nem indefinido
    if ( (input.value !== '') && (input.value !==null) && (input.value !== undefined)){
        ++contador;    
        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcado(${contador})" class="item-icone">
                <i id='icone-${contador}' class="fa-regular fa-circle"></i>
            </div>
            <div onclick="marcado(${contador})" class="item-nome">
                ${valor}
            </div>
            <div class="item-botao">
                <button onclick='deletar(${contador})' class="delete">
                    <i class="fa-solid fa-trash"></i>  Deletar
                </button>
            </div>` ; 
            // Adcionar novo item no main
            main.innerHTML += novoItem;
            //zerar 
            input.value ='';
            input.focus();
    }   
}
function marcado(id) {
    var item = document.getElementById(id) ;
    var classe = item.getAttribute('class');
    console.log(classe);
    if (classe === 'item'){
        item.classList.add('clicado') ; 
        var iconee = document.getElementById('icone-'+id);
        iconee.classList.remove('fa-circle');
        iconee.classList.add('fa-circle-check');  
        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado') ; 
        var iconee = document.getElementById('icone-'+id);
        iconee.classList.remove('fa-circle-check');
        iconee.classList.add('fa-circle');  
    }
}
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
input.addEventListener('keyup', function(event){
    // se teclou enter (13)
    if(event.keyCode ===13){
        event.preventDefault();
        btnAdd.click();
    }
})