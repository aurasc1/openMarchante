// ----- On render -----
$(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true
  })   
});

$(document).foundation();

$(".view a").on('click', function(){
  $('.products ul').toggleClass('list');
  return false;
});