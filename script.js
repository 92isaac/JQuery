$('document').ready(function(){

    $(window).on('load', function(){
    $('#slide-in1').animate({marginRight:'200px'}, 2000).fadeOut(1000, 'linear');
    $('#slide-in2').animate({marginRight:'200px'}, 6000).fadeOut(2000, 'linear');
    // $('#slide-in3').animate({marginLeft:'200px'}, 7000).fadeOut(2000, 'linear')
    // $('#slide-in4').animate({marginLeft:'200px'}, 9000).fadeOut(2000, 'linear')
    // $('#slide-in5').animate({marginLeft:'200px'}, 11000).fadeOut(2000, 'linear')
  })

})