//MUESTRA LAS IMAGENES DEPENDIENDO DEL BOTON//
$(document).ready( function(){
  $('.img').hide();
  $('#img1').show();
  $('.btns').css('background-color', 'rgb(23, 105, 97)');
});

$('#btn1').click(function(){
  $('.img').hide();
  $('#img1').show();
  $('.btns').css('background-color', 'rgb(23, 105, 97)');
  $('#btn1').css('background-color', '#fff');
});

$('#btn2').click(function(){
  $('.img').hide();
  $('#img2').show();
  $('.btns').css('background-color', 'rgb(23, 105, 97)');
  $('#btn2').css('background-color', '#fff');
});

$('#btn3').click(function(){
  $('.img').hide();
  $('#img3').show();
  $('.btns').css('background-color', 'rgb(23, 105, 97)');
  $('#btn3').css('background-color', '#fff');
});

$('#btn4').click(function(){
  $('.img').hide();
  $('#img4').show();
  $('.btns').css('background-color', 'rgb(23, 105, 97)');
  $('#btn4').css('background-color', '#fff');
});

//MUESTRA LAS IMAGENES CADA 3 SEGUNDOS//
// $(function(){
//     $('#slider div:gt(0)').hide();
//     setInterval(function(){
//       $('#slider div:first-child').fadeOut(0)
//          .next('div').fadeIn(1000)
//          .end().appendTo('#slider');}, 3000);
//     $('.controles span:gt(0)').css("background-color", 'white');
//     setInterval(function(){
//      $('.controles span:first-child').css("background-color", "rgb(205, 139, 138)");
//           .next('span').fadeIn(1000)
//           .end().appendTo('.controles');}, 3000);
// });
