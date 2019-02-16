window.onscroll = function (){
  
  let header = document.getElementById('header');
  header.classList.add('scroll-sticky');

  if (window.scrollY == 0){
    header.classList.remove('scroll-sticky');
  }
}

$(function(){
  $('[data-toggle="tooltip"]').tooltip()
})