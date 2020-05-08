(function() {
  var windowWidth = document.body.clientWidth;
  var windowHeight = document.body.clientHeight;

  var mobileWidthBreakPoint = 810;
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
  
  var mainWinder = document.querySelector('.mobile-winder .winder-winder');
  var mainWinderHeight = mainWinder.offsetHeight * 2.4;

  var mainWinderOffset = 0;
  var mainWinderOffsetAdjustmentStart = 800;
  if (window.innerHeight > mainWinderOffsetAdjustmentStart) {
    mainWinderOffset = window.innerHeight - mainWinderOffsetAdjustmentStart;
  }

  /**
   * Sticky menu
   */
  var stickyMenuBlackClass = new ScrollMagic.Scene({ offset: window.innerHeight * 2 + 20 })
    .setClassToggle('header', 'header-inner--black')
    // .addIndicators({name: 'Sticky Menu Black BG'})
    .addTo(controller);

  /**
   * Top Winder
   */
  var winder = new ScrollMagic.Scene({
    triggerElement: ".banner-section",
    triggerHook: 1,
    duration: 700,
    offset: 300 - mainWinderOffset + (mainWinderHeight / 2),
  })
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

  var lightOn = new ScrollMagic.Scene({triggerElement: '.banner-section', duration: 250, offset: 300})
    .setClassToggle('.mobile-winder-top .winder-light', 'winder-light--visible')
    // .addIndicators({name: 'Lights On'})
    .addTo(controller);

  var winder2Offset = 1700;

  if (windowWidth < 550) {
    winder2Offset = 1180;
  }

  var winder2Duration = 717;

  if (windowWidth < 550) {
    winder2Duration = 900;
  }

  /**
   * Top Winder Second Stop
   */
  var winder2 = new ScrollMagic.Scene({triggerElement: ".mobile-winder-section", duration: winder2Duration, offset: 1180 + mainWinderOffset})
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

  var textFadeOutOffset = 1300;

  if (windowWidth < 550) {
    textFadeOutOffset = 1500;
  }

  var textFadeOut = new ScrollMagic.Scene({triggerElement: '.mobile-winder-section', duration: 100, offset: textFadeOutOffset})
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

  var standRemoveScale = 1.7;

  if (windowWidth < 550) {
    standRemoveScale = 1.6;
  }

  var standRemoveTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.stand-without-top-one', 1, { scale: standRemoveScale }, { scale: .25, ease: Linear.easeNone, immediateRender: false })
    ]);

  var removeTopSectionOffset = 3500;

  if (windowWidth < 550) {
    removeTopSectionOffset = 2800;
  }

  var removeTopSection = new ScrollMagic.Scene({triggerElement: '.banner-section', offset: removeTopSectionOffset, duration: 500})
    .setTween(standRemoveTween)
    // .addIndicators({name: 'TWEEN IT'})
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
  var mockupAppTweenOffset = 600;
  if (windowWidth < 550) {
    mockupAppTweenOffset = 500;
  }

  var mockupAppTween = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: 2000, offset: mockupAppTweenOffset})
    .setPin('.app-mockup')
    // .addIndicators({name: 'mockup scroll'})
    .addTo(controller);

  var appMockupsDuration = 800;

})();
