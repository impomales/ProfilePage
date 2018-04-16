function switchDisplay(opt1, opt2, opt3) {
  $(opt1).show('fade', null, 800);
  $(opt2).hide();
  $(opt3).hide();
}

$(document).ready(function() {
  $('#portfolio').hide();
  $('#contact').hide();

  $('#about-link').click(function() {
    switchDisplay('#about', '#portfolio', '#contact');
  });

  $('#portfolio-link').click(function() {
    switchDisplay('#portfolio', '#about', '#contact');
  });

  $('#contact-link').click(function() {
    switchDisplay('#contact', '#about', '#portfolio');
  });
});
