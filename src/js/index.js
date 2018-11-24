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

// Team slider
$('.team__slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  prevArrow: $('.team__slider-prev'),
  nextArrow: $('.team__slider-next'),
});

// Team slider for desktope
$('.team__slider-lg').slick({
  infinite: true,
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.team__slider-prev--lg'),
  nextArrow: $('.team__slider-next--lg'),
});

// MAP

$(window).ready(function(){
  const $map = $('#map');
  // The location of Kremenchuk
  var Kremenchuk = {lat: 49.078967, lng:  33.416660};

  // The map, centered at Kremenchuk
  var map = new google.maps.Map(
      $map[0], 
      {zoom: 13, center: Kremenchuk});

  // The marker, positioned at Kremenchuk
  var marker = new google.maps.Marker({
    position: Kremenchuk, map: map,
    icon: "images/icons/map-icon2.png",
    title: 'Creative Solution',
    animation: google.maps.Animation.BOUNCE, 
  });  

  });

// MAP show
  $('.map__display').click(function() {
    $('.map__background').fadeToggle();
  });

  $('.map__display').click(function() {
    $('.contacts').fadeToggle();
  });

  $('.map__display').click(function() {
    $('.form').fadeToggle();
  });

  // Contacts

  $('.contacts__icon--adress').click(function() {
    $('.contacts__content--adress').fadeToggle();
  });
 
  $('.contacts__icon--phone').click(function() {
    $('.contacts__content--phone').fadeToggle();
  });

  
 

  


