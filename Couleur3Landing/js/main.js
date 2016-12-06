//Smooth scroll

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//Screen switch

          
$('.iphone').click(function () {
    $('.icones').find('.turquoiseText').removeClass('turquoiseText');
    $('.gallery ul').css({
        'transform': 'translateY(0px)'
    });
    $('.explication').addClass('disapear');
    $('#base').toggleClass('disapear');
});

$('.live').click(function () {
    $('.icones').find('.turquoiseText').removeClass('turquoiseText');
    $('.live span').addClass('turquoiseText');
    $('.gallery ul').css({
        'transform': 'translateY(-419px)'
    });
    $('.explication').addClass('disapear');
    $('#live').toggleClass('disapear');
});

$('.eye').click(function () {
    $('.icones').find('.turquoiseText').removeClass('turquoiseText');
    $('.eye span').addClass('turquoiseText');
    $('.gallery ul').css({
        'transform': 'translateY(-838px)'
    });
    $('.explication').addClass('disapear');
    $('#eye').toggleClass('disapear');
});

$('.podcast').click(function () {
    $('.icones').find('.turquoiseText').removeClass('turquoiseText');
    $('.podcast span').addClass('turquoiseText');
    $('.gallery ul').css({
        'transform': 'translateY(-1257px)'
    });
    $('.explication').addClass('disapear');
    $('#podcast').toggleClass('disapear');
});

$('.diy').click(function () {
    $('.icones').find('.turquoiseText').removeClass('turquoiseText');
    $('.diy span').addClass('turquoiseText');
    $('.gallery ul').css({
        'transform': 'translateY(-1676px)'
    });
    $('.explication').addClass('disapear');
    $('#diy').toggleClass('disapear');
});

$('.alert').click(function () {
    $('.icones').find('.turquoiseText').removeClass('turquoiseText');
    $('.alert span').addClass('turquoiseText');
    $('.gallery ul').css({
        'transform': 'translateY(-2095px)'
    });
    $('.explication').addClass('disapear');
    $('#alert').toggleClass('disapear');
});

$('.partage').click(function () {
    $('.icones').find('.turquoiseText').removeClass('turquoiseText');
    $('.partage span').addClass('turquoiseText');
    $('.gallery ul').css({
        'transform': 'translateY(-2514px)'
    });
    $('.explication').addClass('disapear');
    $('#partage').toggleClass('disapear');
});