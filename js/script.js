var dinazavr = document.querySelector('.dinazavr');
var kaktus = document.querySelector('.kaktus')
  
function sanjar(){
  if(dinazavr,classList  = 'sanjar') {
    dinazavr.classList.add('sanjar') 
  }
   setTimeout(()=>{
    dinazavr.classList.remove('sanjar')
   },500)  
}

var  ddd= setInterval(function(){
var dt=parseInt(window.getComputedStyle(dinazavr).getPropertyValue("top"));
var kl=parseInt(window.getComputedStyle(kaktus).getPropertyValue("left"));
if(kl<20 && kl>0 && dt>=130 ){
  dinazavr.style.animation="none";
  kaktus.style.animation="none";
  kaktus.style.display="none";
  alert("Siz yutqazdingiz")

}
},20)


