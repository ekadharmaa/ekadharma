function showDiv() {document.getElementById('subkonten').style.opacity = "1"; document.getElementById('konten').style.top = "0";document.getElementById('ftawal').style.opacity = "1";document.getElementById('ftawal').style.height = "130px";}
  function tombol() {document.getElementById('tombWA').style.margin = "0";document.getElementById('tombWA').style.visibility = "visible";document.getElementById('tombWA').style.opacity = "1";var e1 = document.getElementById('photo');e1.classList.add("degdeg");}  

function duar(){
duar2();setInterval(createHeart,200);
document.body.style.backgroundColor = "black";
document.getElementById('ftawal').style.opacity = "0";document.getElementById('ftawal').style.height = "0";
document.getElementById('fotoloveu').style.opacity = "1";document.getElementById('fotoloveu').style.height = "200px";
document.getElementById('subkonten').style.display = "none";
}
function duar2(){
if(a<finish.length){document.getElementById("sp2").innerHTML += finish.charAt(a);a++;setTimeout(duar2,100);}
if(a==finish.length){duar3();}
}
function duar3(){
if(i<finish2.length){document.getElementById("sp3").innerHTML += finish2.charAt(i);i++;setTimeout(duar3,200);}
if(i==finish2.length){setTimeout(tombol,1000);}
}
