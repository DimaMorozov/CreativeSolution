
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
$('.burger').click(function(){
       $('.header__nav').fadeToggle();
    });