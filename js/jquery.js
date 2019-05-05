$(document).ready(function() {

  $('.amoeba-right ul li:nth-child(1) a').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('html,body').animate({scrollTop: 0}, 600);
  });

  $('.amoeba-right ul li:nth-child(2) a').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('html,body').animate({scrollTop: $('.about').offset().top-80}, 600);

  });

  $('.amoeba-right ul li:nth-child(3) a').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('html,body').animate({scrollTop: $('.portfolio').offset().top-70}, 600);
  });

  $('.amoeba-right ul li:nth-child(4) a').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('html,body').animate({scrollTop: $('.tittle-contact').offset().top-90}, 600)
  });

});
