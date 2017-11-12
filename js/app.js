// window.onload = function(){
//     var board = document.querySelector('.board-js');
//     board.addEventListener('click',addXorO);
//     var cells = document.querySelectorAll('.cell');
  
    

//     // cells.addEventListener('click',reset)
   
// };

//Declaracion de variables
var button = document.querySelector('.btnReset'); //Declaro variable que almacenara el primer elemento en el documento con class ="btnReset"
var cells = document.querySelectorAll('.cell'); //Declaro variable que almacenara el una coleccion de elementos del documento con class ="cell"
var arrTicTacToe= []; //array que almacenará los elementos del juego 
var board = document.querySelector('.board-js'); //Declaro variable que almacenara el primer elemento en el documento con class ="board-js"




//Asignar a todos los elementos que tienen la clase board el evento click y la funcion "addXorO"
board.addEventListener('click',addXorO);

var centinel=true;
var count=0; //contador para los resultados


function addXorO(){
    var idCell=event.target.id;//variable que almacenara el id del elemento que desencadeno el evento
    var positionCell=idCell[1]-1;
    if(event.target.matches('td') && event.target.textContent===''){
        if(centinel){

            event.target.textContent='X';
            arrTicTacToe[positionCell]='X';
            count++;
            wiener('X');
        }
        else {
            event.target.textContent='O';
            count++;
            arrTicTacToe[positionCell]='O';
            wiener('O');
        }
        centinel=!centinel;
        console.log(arrTicTacToe,positionCell,idCell,count);
    }
    if(count==9){
        alert('empate'); 
        window.location.reload()//La pagina se recarga por medio del metodo reload del objeto location 
    }
    

}






//Declaracion de Funciones


//document.getElementsByClassName('cell').addEventListener('click',play)

function wiener(letter){
    //cualquier de estas 8 que se cumplen 
    if(
        (arrTicTacToe[0]==letter && arrTicTacToe[1]==letter && arrTicTacToe[2]==letter) ||
        (arrTicTacToe[3]==letter && arrTicTacToe[4]==letter && arrTicTacToe[5]==letter) || 
        (arrTicTacToe[6]==letter && arrTicTacToe[7]==letter && arrTicTacToe[8]==letter) || 
        (arrTicTacToe[0]==letter && arrTicTacToe[3]==letter && arrTicTacToe[6]==letter) ||
        (arrTicTacToe[1]==letter && arrTicTacToe[4]==letter && arrTicTacToe[7]==letter) || 
        (arrTicTacToe[2]==letter && arrTicTacToe[5]==letter && arrTicTacToe[8]==letter) || 
        (arrTicTacToe[0]==letter && arrTicTacToe[4]==letter && arrTicTacToe[8]==letter) || 
        (arrTicTacToe[2]==letter && arrTicTacToe[4]==letter && arrTicTacToe[6]==letter)

)
    
    {
        alert('Jugador'+ letter+'GANA');
        window.location.reload();
    }
}
function play(event){
    //mandame la alerta el id del elemento que desencadeno el evento especifico
    alert(event.target.id);
    var idCell=event.target.id;

    //objeto global
    var cell=event.target;
    var cell

}

button.onclick=function(){
    for(var i=0 ; i<cells.length;i++){
      cells[i].textContent='';
   }
 
 }