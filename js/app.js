// window.onload = function(){
//     var board = document.querySelector('.board-js');
//     board.addEventListener('click',addXorO);
//     var cells = document.querySelectorAll('.cell');
  
    

//     // cells.addEventListener('click',reset)
   
// };
// var centinel=true;
// function addXorO(){

//     if(event.target.matches('td') && event.target.textContent===''){
//         if(centinel){
//             event.target.textContent='X';
//         }
//         else {
//             event.target.textContent='O';
//         }
//         centinel=!centinel;
//     }

// }

var board = document.querySelector('.board-js');
board.addEventListener('click',addXorO);

var centinel=true;
function addXorO(){

    if(event.target.matches('td') && event.target.textContent===''){
        if(centinel){
            event.target.textContent='X';
        }
        else {
            event.target.textContent='O';
        }
        centinel=!centinel;
    }

}

var button = document.querySelector('.btnReset');
var cells = document.querySelectorAll('.cell');

button.onclick=function(){
   for(var i=0 ; i<cells.length;i++){
     cells[i].textContent='';
  }

}


/*function wiener(){
var text=document.getElementById("row-1").value;
// for(var row=1;row<=3;row++){
//   var count= 0;
//   for(var col=1;col<=3;col++){
//    var text='';
//    text=document.getElementById('table-board').rows[row].cells[col].value;
//   }
// }
  alert(text);
}*/


