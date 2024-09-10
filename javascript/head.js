const ico=document.getElementById('icf');
const gosh=document.getElementById("goshie");

ico.addEventListener("click",function(){
kol();

})


function kol(){
    if (gosh.style.display === "block") {
        gosh.style.display = "none";
      } else {
        gosh.style.display = "block";
      }

}