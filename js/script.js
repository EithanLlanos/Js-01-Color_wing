function simple(){
    val=1
}
function hex(){
    val=0
}
let val=1;
let arrayc=['Green','Red','rgba(133,122,200)','#F15025'];
let arrayhex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',]
function mainbutton(){
    let container=document.getElementById('container'); 
    let rand;
    if (val==0){
        rand='#';
        for(let i=0;i<6;i++){
            rand=rand+(arrayhex[Math.floor(Math.random()*16)]);
        }
        }
    else {
        rand=arrayc[Math.floor(Math.random()*4)]
    }
    container.style.backgroundColor = rand;
    let textc =document.getElementById('textc');
    textc.innerHTML=rand;
}