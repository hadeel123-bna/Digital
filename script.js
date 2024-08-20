let openMenu = true;
let menu = document.getElementById("mu");
function opener(){
   if (openMenu === true) {
      menu.style.display='block';
      openMenu = false;
   }else{
      menu.style.display='none';
      openMenu = true;
   }
}

let move = document.querySelectorAll(".row");
let con = document.querySelectorAll(".con");

window.onscroll = function (){
 for(let i = 0; i < 3; i++){
  if (this.scrollY >= 50) {
  move[i].classList.add('anme');
   }else{
  move[i].classList.remove('anme');
   }
 
 if (this.scrollY >= 320) {
    con[0].classList.add("in");    
    con[1].classList.add("out");
 }else{
    con[0].classList.remove("in");
    
    con[1].classList.remove("out");
 }
 

}
}
