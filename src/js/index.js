// Burger
var Menu = {
  el: {
    ham: $('.burger'),
    menuTop: $('.burger__item--top'),
    menuMiddle: $('.burger__item--middle'),
    menuBottom: $('.burger__item--bottom')
  },

  init: function() {
    Menu.bindUIactions();
  },

  bindUIactions: function() {
    Menu.el.ham
      .on(
        'click',
        function(event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
  },

  activateMenu: function() {
    Menu.el.menuTop.toggleClass('burger__item--top-click');
    Menu.el.menuMiddle.toggleClass('burger__item--middle-click');
    Menu.el.menuBottom.toggleClass('burger__item--bottom-click');
  }
};
Menu.init();
// Menu
$('.burger').click(function() {
  $('.header__nav').fadeToggle();
});

// For disappear menu
$('.header__nav').click(function() {
  $('.header__nav').fadeToggle();
});


// Menu for scrolling
var Menu = {
  el: {
    ham: $('.header__nav'),
    menuTop: $('.burger__item--top'),
    menuMiddle: $('.burger__item--middle'),
    menuBottom: $('.burger__item--bottom')
  },

  init: function() {
    Menu.bindUIactions();
  },

  bindUIactions: function() {
    Menu.el.ham
      .on(
        'click',
        function(event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
  },

  activateMenu: function() {
    Menu.el.menuTop.toggleClass('burger__item--top-click');
    Menu.el.menuMiddle.toggleClass('burger__item--middle-click');
    Menu.el.menuBottom.toggleClass('burger__item--bottom-click');
  }
};

Menu.init();


// SCROLL
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Works slider

$('.works__slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  cssEase: 'linear',
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  dotsClass: "dots",
});

