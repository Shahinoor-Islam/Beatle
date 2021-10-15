$(window).scroll(function () {
  if ($(window).scrollTop() > 32) {
    $('#menu_part').addClass('fixed');
  } else {
    $('#menu_part').removeClass('fixed');
  }



});