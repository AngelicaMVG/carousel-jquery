$(function(){
  $('#btn1').click(function(){
    $('#btn1').css('background-color', 'red');
    $('img1').show();
});
});

$(function(){
    $('#slider div:gt(0)').hide();
    setInterval(function(){
      $('#slider div:first-child').fadeOut(0)
         .next('div').fadeIn(1000)
         .end().appendTo('#slider');}, 3000);
    // $('.controles span:gt(0)').css("background-color", 'white');
    // setInterval(function(){
    //  $('.controles span:first-child').css("background-color", "rgb(205, 139, 138)")
    //       .next('span').fadeIn(1000)
    //       .end().appendTo('.controles');}, 3000);
});
