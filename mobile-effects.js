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
  var winder = new ScrollMagic.Scene({triggerElement: ".banner-section", duration: 700, offset: 150})
    .setPin('.mobile-winder-wrapper')
    // .addIndicators({name: 'Top Winder'})
    .addTo(controller);

  // /**
  //  * Decrease top winder size
  //  */
  var winderTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.mobile-winder-top', 1, { scale: 2.4 }, { scale: 1, immediateRender: false })
    ])
  var startWinderParallax = new ScrollMagic.Scene({triggerElement: '.banner-section', duration: 250, offset: 850})
    .setTween(winderTween)
    // .addIndicators({name: 'Top Winder Smaller'})
    .addTo(controller);

  /**
   * Top Winder Second Stop
   */
  var winder2 = new ScrollMagic.Scene({triggerElement: ".mobile-winder-section", duration: 900, offset: 1180})
    .setPin('.mobile-winder-wrapper')
    // .addIndicators({name: 'Top Winder Second Stop'})
    .addTo(controller);

  var standTween = new TimelineMax()
  .add([
    TweenMax.fromTo('.mobile-winder-top .winder-stand', 2, { scale: 1, z: 0, opacity: 1 }, { scale: .95, z: -50, opacity: 0, ease: Linear.easeNone, immediateRender: false })
  ]);

  var standAnimation = new ScrollMagic.Scene({triggerElement: '.mobile-winder-section', duration: 300, offset: 1300})
    .setTween(standTween)
    // .addIndicators({name: 'Remove Stand'})
    .addTo(controller);

  var textFadeOutTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.mobile-winder-paragraph', 2, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone, immediateRender: false })
    ]);

  var textFadeOut = new ScrollMagic.Scene({triggerElement: '.mobile-winder-section', duration: 100, offset: 1500})
    .setTween(textFadeOutTween)
    // .addIndicators({name: 'Fade Out Text'})
    .addTo(controller);

  var addEmptyWinderToTop = new ScrollMagic.Scene({triggerElement: ".banner-section", offset: 2700})
    .setClassToggle('.top-one-empty', 'stand-without-top-one--visible')
    // .addIndicators({name: 'Add Top One Empty'})
    .addTo(controller);

  var winderCenterTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.mobile-winder-top .winder-center', 5, { rotation: 0 }, { rotation: 180, ease: Linear.easeNone, immediateRender: false })
    ])

  var winderCenterAnimation = new ScrollMagic.Scene({triggerElement: '.banner-section', duration: 568, offset: 1800})
    .setTween(winderCenterTween)
    // .addIndicators({name: 'rotation'})
    .addTo(controller);

  var standRemoveTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.stand-without-top-one', 1, { scale: 1.6 }, { scale: .25, ease: Linear.easeNone, immediateRender: false })
    ]);

  var removeTopSection = new ScrollMagic.Scene({triggerElement: '.banner-section', offset: 2800, duration: 500})
    .setTween(standRemoveTween)
    .addTo(controller);
    
  var textFadeOutTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.slider-descriptions', 2, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone, immediateRender: false })
    ]);

  var textFadeOut = new ScrollMagic.Scene({triggerElement: '.banner-section', duration: 100, offset: 3300})
    .setTween(textFadeOutTween)
    // .addIndicators({name: 'Descriptions fade in'})
    .addTo(controller);


  var bottomWinderTriggerElement = '.mobile-bottom-winder-start-descriptions';

  var winder2 = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, duration: 3200, offset: 230})
    .setPin('.mobile-winder--bottom-wrapper')
    // .addIndicators({name: 'Bottom Winder Stop'})
    .addTo(controller);

  var winder2fadeouttween = new TimelineMax()
    .add([
      TweenMax.fromTo('.mobile-winder--bottom-wrapper', 2, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone, immediateRender: false })
    ]);

  var winder2fadeout = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, duration: 10, offset: 3300})
    .setTween(winder2fadeouttween)
    // .addIndicators({name: 'Bottom Winder Fade Out'})
    .addTo(controller);

  /**
   * DESCRIPTION 1
   */
  var bottomDescription1WinderWinderTween = new TimelineMax().add(TweenMax.fromTo('.mobile-winder--bottom .winder-winder, .mobile-winder--bottom .winder-center', { opacity: 1 }, { opacity: .3, immediateRender: false }));

  var bottomDescription1WinderWinder = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 300, duration: 250 })
    .setTween(bottomDescription1WinderWinderTween)
    // .addIndicators({name: 'bottom description #1 winder opacity'})
    .addTo(controller);

  var bottomDescription1Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__1', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  var bottomDescription1 = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 300, duration: 250 })
    .setTween(bottomDescription1Tween)
    // .addIndicators({name: 'bottom description #1'})
    .addTo(controller);

  var bottomDescription1TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__1', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription1Out = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 900, duration: 250 })
    .setTween(bottomDescription1TweenOut)
    // .addIndicators({name: 'bottom description #1 out'})
    .addTo(controller);

  var bottomDescription1WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.mobile-winder--bottom .winder-winder, .mobile-winder--bottom .winder-center', { opacity: .3 }, { opacity: 1, immediateRender: false }));

  var bottomDescription1Out = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 900, duration: 250 })
    .setTween(bottomDescription1WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #1 winder opacity out'})
    .addTo(controller);

  /**
   * DESCRIPTION 2
   */
  var bottomDescription2WinderWinderTween = new TimelineMax().add(TweenMax.fromTo('.mobile-winder--bottom .winder-winder, .mobile-winder--bottom .winder-stand', { opacity: 1 }, { opacity: .3, immediateRender: false }));

  var bottomDescription2WinderWinder = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 1000, duration: 250 })
    .setTween(bottomDescription2WinderWinderTween)
    // .addIndicators({name: 'bottom description #2 winder opacity'})
    .addTo(controller);

  var bottomDescription2Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__2', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  var bottomDescription2 = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 1000, duration: 250 })
    .setTween(bottomDescription2Tween)
    // .addIndicators({name: 'bottom description #2'})
    .addTo(controller);

  var bottomDescription2TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__2', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription2Out = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 1600, duration: 250 })
    .setTween(bottomDescription2TweenOut)
    // .addIndicators({name: 'bottom description #2 out'})
    .addTo(controller);

  var bottomDescription2WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.mobile-winder--bottom .winder-winder, .mobile-winder--bottom .winder-stand', { opacity: .3 }, { opacity: 1, immediateRender: false }));

  var bottomDescription2OutOpacity = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 1600, duration: 250 })
    .setTween(bottomDescription2WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #2 winder opacity out'})
    .addTo(controller);

  /**
   * DESCRIPTION 3
   */
  var bottomDescription3WinderWinderTween = new TimelineMax().add(TweenMax.fromTo('.mobile-winder--bottom .winder-winder, .mobile-winder--bottom .winder-stand', { opacity: 1 }, { opacity: .3, immediateRender: false }));

  var bottomDescription3WinderWinder = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 1900, duration: 250 })
    .setTween(bottomDescription3WinderWinderTween)
    // .addIndicators({name: 'bottom description #3 winder opacity'})
    .addTo(controller);

  var bottomDescription3WinderWatchTween = new TimelineMax().add(TweenMax.fromTo('.winder-watch', { opacity: 0 }, { opacity: 1, immediateRender: false }));

  var bottomDescription3WinderWatch = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 1900, duration: 250})
    .setTween(bottomDescription3WinderWatchTween)
    // .addIndicators({name: 'bottom description #3 watch in'})
    .addTo(controller);

  var bottomDescription3Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__3', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  var bottomDescription3 = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 1900, duration: 250 })
    .setTween(bottomDescription3Tween)
    // .addIndicators({name: 'bottom description #3'})
    .addTo(controller);

  var bottomDescription3TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__3', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription3Out = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 2400, duration: 250 })
    .setTween(bottomDescription3TweenOut)
    // .addIndicators({name: 'bottom description #3 out'})
    .addTo(controller);

  var bottomDescription3WatchTweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-watch', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription3Out = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 2400, duration: 250 })
    .setTween(bottomDescription3WatchTweenOut)
    // .addIndicators({name: 'bottom description #3 watch out'})
    .addTo(controller);

  var bottomWinderCenterTween = new TimelineMax()
    .add(TweenMax.fromTo('.mobile-winder--bottom .winder-center', 5, { rotation: 0 }, { rotation: 90, ease: Linear.easeNone, immediateRender: false }));

  var bottomWinderCenter = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 2600, duration: 750})
    .setTween(bottomWinderCenterTween)
    // .addIndicators({name: 'bottom rotate'})
    .addTo(controller);

  var bottomDescription3WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.mobile-winder--bottom .winder-winder, .mobile-winder--bottom .winder-stand', { opacity: .3 }, { opacity: 1, immediateRender: false }));

  var bottomDescription3OutOpacity = new ScrollMagic.Scene({triggerElement: bottomWinderTriggerElement, offset: 2600, duration: 250 })
    .setTween(bottomDescription3WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #3 winder opacity out'})
    .addTo(controller);

  





  /**
   * Bottom Texts
   */
  var mockupAppTween = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: 3500, offset: 300})
    .setPin('.app-mockup')
    // .addIndicators({name: 'mockup scroll'})
    .addTo(controller);

  var appMockupsDuration = 800;

  /**
   * first text
   */
  // var appMockupFirstTextPin = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: appMockupsDuration, offset: 650})
  //   .setPin('.app-mockup-text-section--first')
  //   .addIndicators({name: 'stick first text'})
  //   .addTo(controller);

  // var appMockupFirstTextTween = new TimelineMax()
  //   .add(TweenMax.fromTo('.app-mockup-text-section--first', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  // var appMockupFirstText = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--first', duration: 150, offset: 650, ease: Linear.easeNone })
  //   .setTween(appMockupFirstTextTween)
  //   .addIndicators({name: 'first text visibility'})
  //   .addTo(controller);

  // var appMockupFirstTextTweenOut = new TimelineMax()
  //   .add(TweenMax.fromTo('.app-mockup-text-section--first', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  // var appMockupFirstTextOut = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--first', duration: 150, offset: 750, ease: Linear.easeNone })
  //   .setTween(appMockupFirstTextTweenOut)
  //   .addIndicators({name: 'first text visibility out'})
  //   .addTo(controller);

  // /**
  //  * second text
  //  */
  // var appMockupFirstTextPin2 = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: appMockupsDuration, offset: 1500})
  //     .setPin('.app-mockup-text-section--second')
  //     .addIndicators({name: 'stick second text'})
  //     .addTo(controller);

  // var appMockupFirstTextTween2 = new TimelineMax()
  //   .add(TweenMax.fromTo('.app-mockup-text-section--second', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  // var appMockupFirstText2 = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--second', duration: 150, offset: 150, ease: Linear.easeNone })
  //   .setTween(appMockupFirstTextTween2)
  //   .addIndicators({name: 'second text visibility'})
  //   .addTo(controller);

  // var appMockupFirstTextTweenOut2 = new TimelineMax()
  //   .add(TweenMax.fromTo('.app-mockup-text-section--second', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  // var appMockupFirstTextOut2 = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--second', duration: 150, offset: 737, ease: Linear.easeNone })
  //   .setTween(appMockupFirstTextTweenOut2)
  //   .addIndicators({name: 'second text visibility out'})
  //   .addTo(controller);

  // /**
  //  * third text
  //  */
  // var appMockupFirstTextPin3 = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: appMockupsDuration, offset: 2300})
  //     .setPin('.app-mockup-text-section--third')
  //     .addIndicators({name: 'stick third text'})
  //     .addTo(controller);

  // var appMockupFirstTextTween3 = new TimelineMax()
  //   .add(TweenMax.fromTo('.app-mockup-text-section--third', { opacity: 0 }, { opacity: 1 }));
  
  // var appMockupFirstText3 = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--third', duration: 150, offset: 150, ease: Linear.easeNone })
  //   .setTween(appMockupFirstTextTween3)
  //   .addIndicators({name: 'third text visibility'})
  //   .addTo(controller);

  // var appMockupFirstTextTweenOut3 = new TimelineMax()
  //   .add(TweenMax.fromTo('.app-mockup-text-section--third', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  // var appMockupFirstTextOut3 = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--third', duration: 150, offset: 700, ease: Linear.easeNone })
  //   .setTween(appMockupFirstTextTweenOut3)
  //   .addIndicators({name: 'third text visibility out'})
  //   .addTo(controller);

})();
