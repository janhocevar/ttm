(function() {
  var windowWidth = document.body.clientWidth;
  var windowHeight = document.body.clientHeight;

  var mobileWidthBreakPoint = 770;
  var isMobile = windowWidth <= mobileWidthBreakPoint;

  if (!isMobile) {
    return;
  }

  const mobileMenuOpenerListener = document.querySelector('.open-mobile-menu');
  const closeMenuOpenerListener = document.querySelector('.close-header-menu');

  mobileMenuOpenerListener.addEventListener('click', function() {
    document.body.classList.add('mobile-menu-opened')
  });

  closeMenuOpenerListener.addEventListener('click', function() {
    document.body.classList.remove('mobile-menu-opened')
  });

  var controller = new ScrollMagic.Controller();

  /**
   * Top Winder
   */
  // var winder = new ScrollMagic.Scene({triggerElement: ".banner-section", duration: 1000, offset: 200})
  //   .setPin('.mobile-winder')
  //   .addIndicators({name: 'Top Winder'})
  //   .addTo(controller);

  // /**
  //  * Decrease top winder size
  //  */
  // var winderTween = new TimelineMax()
  //   .add([
  //     TweenMax.fromTo('.mobile-winder', 1, { scale: 2.7 }, { scale: 1, immediateRender: false })
  //   ])
  // var startWinderParallax = new ScrollMagic.Scene({triggerElement: '.banner-section', duration: 200, offset: 400})
  //   .setTween(winderTween)
  //   .addIndicators({name: 'Top Winder Smaller'})
  //   .addTo(controller);

})();
