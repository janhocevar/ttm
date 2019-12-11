(function() {
  var controller = new ScrollMagic.Controller();

  var winder = new ScrollMagic.Scene({triggerElement: ".single-break", duration: 1090})
                .setPin('.main-winder')
                .addTo(controller);

  var firstText = new ScrollMagic.Scene({triggerElement: ".single-break", duration: 900, offset: 350})
                .setClassToggle('.extra-info-paragraph', 'in-viewport')
                .addTo(controller);

  var firstTextPin = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 480, offset: 750})
    .setPin('.extra-info-paragraph')
    // .addIndicators({name: 'first text pin'})
    .addTo(controller);

  var firstTextParallax = new ScrollMagic.Scene({triggerElement: ".single-break", duration: 1000, offset: 350})
                .setTween('.extra-info-paragraph', {y: "-50%", ease: Linear.easeNone})
                .addTo(controller);

  var lightOn = new ScrollMagic.Scene({triggerElement: ".single-break", duration: 250})
                .setClassToggle('.main-winder .winder-light', 'winder-light--visible')
                .addTo(controller);

  var winderCenterTween = new TimelineMax()
                .add([
                  TweenMax.fromTo('.main-winder .winder-center', 5, { rotation: 0 }, { rotation: 180, ease: Linear.easeNone, immediateRender: false })
                ])

  var winderCenterAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 3440})
                              .setTween(winderCenterTween)
                              
                              .addTo(controller);

  var winderTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.main-winder', 2, { scale: 1.6 }, { scale: .9, immediateRender: false })
    ])
  var startWinderParallax = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-section', duration: 500})
                            .setTween(winderTween)
                            
                            .addTo(controller);

  var winderStopPosition = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-stop-section', duration: 1810})
                          .setPin('.main-winder')
                          
                          .addTo(controller);
  
  var secondTextPin = new ScrollMagic.Scene({triggerElement: '.start-second-info', duration: 680})
    .setPin('.section-second-info-paragraph')
    // .addIndicators({name: 'second text pin'})
    .addTo(controller);

  var secondInfoParagraph = new ScrollMagic.Scene({triggerElement: ".start-second-info", duration: 640})
                          .setClassToggle('.section-second-info-paragraph', 'in-viewport')
                          // .addIndicators({name: 'second text toggle'})
                          .addTo(controller);

  var secondInfoParagraph = new ScrollMagic.Scene({triggerElement: ".start-second-info", duration: 650})
                          .setTween('.section-second-info-paragraph', {y: "-20%", ease: Linear.easeNone})
                          // .addIndicators({name: 'second text scroll'})
                          .addTo(controller);


  var standTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.main-winder .winder-stand', 2, { scale: 1, z: 0, opacity: 1 }, { scale: .95, z: -50, opacity: 0, ease: Linear.easeNone, immediateRender: false })
    ]);

  var standAnimation = new ScrollMagic.Scene({triggerElement: '.start-winder-stand-remove', duration: 300, offset: 100})
                        .setTween(standTween)
                        
                        .addTo(controller);

  var standRemoveTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.stand-without-top-one', 1, { scale: 2 }, { scale: .22, ease: Linear.easeNone, immediateRender: false })
    ]);
  var removeTopSection = new ScrollMagic.Scene({triggerElement: '.remove-top-stand-section', duration: 500})
                        .setTween(standRemoveTween)
                        
                        .addTo(controller);


  var addEmptyWinderToTop = new ScrollMagic.Scene({triggerElement: ".remove-top-stand-section", duration: 0})
                          .setClassToggle('.top-one-empty', 'stand-without-top-one--visible')
                          
                          .addTo(controller);
  
  var startWinderSlider = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 4000})
    .setPin('.stand-without-top-one')
    .addTo(controller);

  var winderSliderTweenIn = new TimelineMax()
    .add([ TweenMax.fromTo('.stand-without-top-one', 1, { x: 0 }, { x: -150, ease: Linear.easeNone, immediateRender: false }) ]);

  var winderSliderFirstSectionIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 150 })
    .setTween(winderSliderTweenIn)
    .addTo(controller);

  var sliderDescriptions = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 21000})
    .setPin('.slider-descriptions')
    .addTo(controller);

  var sliderDescriptionsClasses = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 21000, offset: 5500})
    .setClassToggle('.slider-descriptions', 'slider-descriptions--visible')
    // .addIndicators({name: 'toggle descriptions'})
    .addTo(controller);
    
  var firstSlideAnimationTween = new TimelineMax()
    .add(TweenMax.fromTo('.slider__1 .slider-content', { zIndex: 0, opacity: 0, y: '10%' }, { opacity: 1, zIndex: 10, y: '-10%', ease: Linear.easeNone, immediateRender: false }))

  var firstSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 5500, duration: 1800 })
    .setTween(firstSlideAnimationTween)
    // .addIndicators({name: 'slide #1'})
    .addTo(controller);

  var winderSliderTweenOut = new TimelineMax()
    .add([ TweenMax.fromTo('.stand-without-top-one', { opacity: 1 }, { opacity: 0, x: -200, immediateRender: false }) ]);

  var firstSlideAnimationOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 7300, duration: 200 })
    .setTween(winderSliderTweenOut)
    // .addIndicators({name: 'slide #1 out'})
    .addTo(controller);

  var firstSlideAnimationTweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__1 .slider-content', { opacity: 1, y: '-10%' }, { opacity: 0, zIndex: 0, y: '-20%', ease: Linear.easeNone, immediateRender: false }))
  
  var firstSlideAnimationTextOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 7300, duration: 200 })
    .setTween(firstSlideAnimationTweenOut)
    // .addIndicators({name: 'slide #1 text out'})
    .addTo(controller);

  /**
   * SLIDE 2
   */
  var secondSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__2 .slider-content', { zIndex: 0, opacity: 0, y: '10%' }, { opacity: 1, zIndex: 10, y: '-10%', ease: Linear.easeNone, immediateRender: false }))

  var secondSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__2 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, immediateRender: false }));

  var secondSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 7500, duration: 1800 })
    .setTween(secondSlideBodyIn)
    // .addIndicators({name: 'slide #2'})
    .addTo(controller);

  var secondSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 7500, duration: 300 })
    .setTween(secondSlideSimageIn)
    // .addIndicators({name: 'slide #2 image in'})
    .addTo(controller);

  var secondSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__2', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var secondSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 9300, duration: 200 })
    .setTween(secondSlideSimageOut)
    // .addIndicators({name: 'slide #2 out'})
    .addTo(controller);

  /**
   * SLIDE 3
   */
  var thirdSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__3 .slider-content', { zIndex: 0, opacity: 0, y: '10%' }, { opacity: 1, zIndex: 10, y: '-10%', ease: Linear.easeNone, immediateRender: false }))

  var thirdSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__3 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, immediateRender: false }));

  var thirdSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 9500, duration: 1800 })
    .setTween(thirdSlideBodyIn)
    // .addIndicators({name: 'slide #3'})
    .addTo(controller);

  var thirdSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 9500, duration: 300 })
    .setTween(thirdSlideSimageIn)
    // .addIndicators({name: 'slide #3 image in'})
    .addTo(controller);

  var thirdSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__3', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var thirdSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 11300, duration: 200 })
    .setTween(thirdSlideSimageOut)
    // .addIndicators({name: 'slide #3 out'})
    .addTo(controller);

  /**
   * SLIDE 4
   */
  var fourthSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__4 .slider-content', { zIndex: 0, opacity: 0, y: '10%' }, { opacity: 1, zIndex: 10, y: '-10%', ease: Linear.easeNone, immediateRender: false }))

  var fourthSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__4 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, immediateRender: false }));

  var fourthSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 11500, duration: 1800 })
    .setTween(fourthSlideBodyIn)
    // .addIndicators({name: 'slide #4'})
    .addTo(controller);

  var fourthSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 11500, duration: 300 })
    .setTween(fourthSlideSimageIn)
    // .addIndicators({name: 'slide #4 image in'})
    .addTo(controller);

  var fourthSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__4', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var fourthSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13300, duration: 200 })
    .setTween(fourthSlideSimageOut)
    // .addIndicators({name: 'slide #4 out'})
    .addTo(controller);

  /**
   * SLIDE 5
   */
  var fifthSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .slider-content', { zIndex: 0, opacity: 0, y: '10%' }, { opacity: 1, zIndex: 10, y: '-10%', ease: Linear.easeNone, immediateRender: false }))

  var fifthSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, immediateRender: false }));

  var fifthSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13500, duration: 1800 })
    .setTween(fifthSlideBodyIn)
    // .addIndicators({name: 'slide #5'})
    .addTo(controller);

  var fifthSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13500, duration: 300 })
    .setTween(fifthSlideSimageIn)
    // .addIndicators({name: 'slide #5 image in'})
    .addTo(controller);

  var fifthSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .slider-content', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var fifthSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 15300, duration: 200 })
    .setTween(fifthSlideSimageOut)
    // .addIndicators({name: 'slide #5 out'})
    .addTo(controller);

  // var lastWinder = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 4400, offset: 15500})
  //   .setPin('.slider__5 .slider__image')
  //   .addIndicators({name: 'center winder animation'})
  //   .addTo(controller);

  var lastWinderCenterTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .slider__image', { x: 0 }, { x: 148, immediateRender: false }));
  var lastWinderCenterWinderTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder', { scale: 0.5 }, { scale: 1, immediateRender: false }));

  var lastWinderCenter = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 15500, duration: 400 })
    .setTween(lastWinderCenterTween)
    // .addIndicators({name: 'center last winder'})
    .addTo(controller);

  var lastWinderCenterScale = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 15500, duration: 400 })
    .setTween(lastWinderCenterWinderTween)
    // .addIndicators({name: 'center last winder scale'})
    .addTo(controller);

  // var lastWinderStandTween = new TimelineMax()
  //   .add([
  //     TweenMax.fromTo('.slider__5 .winder-stand', { scale: .97, z: -20, opacity: 0 }, { scale: 1, z: 0, opacity: 1, ease: Linear.easeNone, immediateRender: false })
  //   ]);

  var bottomDescription1 = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 20000})
    .setPin('.winder-bottom-description__1')
    .addTo(controller);

  var bottomDescription2 = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 20000})
    .setPin('.winder-bottom-description__2')
    .addTo(controller);

  var bottomDescription3 = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 20000})
    .setPin('.winder-bottom-description__3')
    .addTo(controller);

  // var standAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 100, offset: 11600})
  //     .setTween(lastWinderStandTween)
  //     // .addIndicators({name: 'last winder stand'})
  //     .addTo(controller);

  /**
   * DESCRIPTION 1
   */
  var bottomDescription1WinderWinderTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-center', { opacity: 1 }, { opacity: .3, immediateRender: false }));

  var bottomDescription1WinderWinder = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 16000, duration: 250 })
    .setTween(bottomDescription1WinderWinderTween)
    // .addIndicators({name: 'bottom description #1 winder opacity'})
    .addTo(controller);

  var bottomDescription1Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__1', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  var bottomDescription1 = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 16000, duration: 250 })
    .setTween(bottomDescription1Tween)
    // .addIndicators({name: 'bottom description #1'})
    .addTo(controller);

  var bottomDescription1TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__1', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription1Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 16750, duration: 250 })
    .setTween(bottomDescription1TweenOut)
    // .addIndicators({name: 'bottom description #1 out'})
    .addTo(controller);

  var bottomDescription1WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-center', { opacity: .3 }, { opacity: 1, immediateRender: false }));

  var bottomDescription1Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 16750, duration: 250 })
    .setTween(bottomDescription1WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #1 winder opacity out'})
    .addTo(controller);

  /**
   * DESCRIPTION 2
   */
  var bottomDescription2WinderWinderTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-stand', { opacity: 1 }, { opacity: .3, immediateRender: false }));

  var bottomDescription2WinderWinder = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 17500, duration: 250 })
    .setTween(bottomDescription2WinderWinderTween)
    // .addIndicators({name: 'bottom description #2 winder opacity'})
    .addTo(controller);

  var bottomDescription2Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__2', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  var bottomDescription2 = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 17500, duration: 250 })
    .setTween(bottomDescription2Tween)
    // .addIndicators({name: 'bottom description #2'})
    .addTo(controller);

  var bottomDescription2TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__2', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription2Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 18250, duration: 250 })
    .setTween(bottomDescription2TweenOut)
    // .addIndicators({name: 'bottom description #2 out'})
    .addTo(controller);

  var bottomDescription2WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-stand', { opacity: .3 }, { opacity: 1, immediateRender: false }));

  var bottomDescription2OutOpacity = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 18250, duration: 250 })
    .setTween(bottomDescription2WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #2 winder opacity out'})
    .addTo(controller);

  /**
   * DESCRIPTION 3
   */
  var bottomDescription3WinderWinderTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-stand', { opacity: 1 }, { opacity: .3, immediateRender: false }));

  var bottomDescription3WinderWinder = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 19000, duration: 250 })
    .setTween(bottomDescription3WinderWinderTween)
    // .addIndicators({name: 'bottom description #3 winder opacity'})
    .addTo(controller);

  var bottomDescription3WinderWatchTween = new TimelineMax().add(TweenMax.fromTo('.winder-watch', { opacity: 0 }, { opacity: 1, immediateRender: false }));

  var bottomDescription3WinderWatch = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 19000, duration: 250})
    .setTween(bottomDescription3WinderWatchTween)
    // .addIndicators({name: 'bottom description #3 watch in'})
    .addTo(controller);

  var bottomDescription3Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__3', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  var bottomDescription3 = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 19000, duration: 250 })
    .setTween(bottomDescription3Tween)
    // .addIndicators({name: 'bottom description #3'})
    .addTo(controller);

  var bottomDescription3TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__3', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription3Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 19750, duration: 250 })
    .setTween(bottomDescription3TweenOut)
    // .addIndicators({name: 'bottom description #3 out'})
    .addTo(controller);

  var bottomDescription3WatchTweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-watch', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription3Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 19750, duration: 250 })
    .setTween(bottomDescription3WatchTweenOut)
    // .addIndicators({name: 'bottom description #3 watch out'})
    .addTo(controller);

  var bottomWinderCenterTween = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .winder-center', 5, { rotation: 0 }, { rotation: 90, ease: Linear.easeNone, immediateRender: false }));

  var bottomWinderCenter = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 20000, duration: 750})
    .setTween(bottomWinderCenterTween)
    // .addIndicators({name: 'bottom rotate'})
    .addTo(controller);

  var bottomDescription3WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-stand', { opacity: .3 }, { opacity: 1, immediateRender: false }));

  var bottomDescription3OutOpacity = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 19750, duration: 250 })
    .setTween(bottomDescription3WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #3 winder opacity out'})
    .addTo(controller);

  var bottomWinderScaleUpTween = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-center', { scale: 1 }, { scale: 6, immediateRender: false, ease: Linear.easeNone }))
    .add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-center', { opacity: 1, scale: 6 }, { scale: 10, opacity: 0, immediateRender: false }));
  
  var bottomWinderStandFadeTween = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .winder-stand', { opacity: 1 }, { opacity: 0, immediateRender: false }));

  var bottomWinderStandFade = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 20500, duration: 100 })
    .setTween(bottomWinderStandFadeTween)
    // .addIndicators({name: 'winder fade in'})
    .addTo(controller);

  var bottomWinderScaleUp = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 20500, duration: 550 })
    .setTween(bottomWinderScaleUpTween)
    // .addIndicators({name: 'winder scale up'})
    .addTo(controller);

  var fulhaberMotorSectionTween = new TimelineMax()
    .add(TweenMax.fromTo('.empty-section', { opacity: 0 }, { opacity: 1 }));

  var fulhaberMotorSection = new ScrollMagic.Scene({triggerElement: '.empty-section--fade-in', duration: 50, offset: 550})
    .setTween(fulhaberMotorSectionTween)
    // .addIndicators({name: 'fulhaber motor fade in'})
    .addTo(controller);

  var fulhaberMotorScroll = new ScrollMagic.Scene({triggerElement: '.empty-section--fade-in', duration: 800, offset: 850})
    .setTween('.fulhaber-motor-image-description-wrapper', {y: "80%", ease: Linear.easeNone})
    // .addIndicators({name: 'fulhaber scroll'})
    .addTo(controller);

  var lastWinder = new ScrollMagic.Scene({triggerElement: '.empty-section--fade-in', duration: 600, offset: 1100})
    .setPin('.fulhaber-motor-image')
    // .addIndicators({name: 'pin fulhaber-motor-image'})
    .addTo(controller);

  var fulhaberDescription = new ScrollMagic.Scene({triggerElement: '.empty-section--fade-in', duration: 700, offset: 1000})
    .setClassToggle('.fulhaber-motor-image-description', 'in-viewport')
    // .addIndicators({name: 'ful haber description'})
    .addTo(controller);

  var mockupAppTween = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: 3500, offset: 0})
    .setTween('.app-mockup', {y: "50%", ease: Linear.easeNone})
    // .addIndicators({name: 'mockup scroll'})
    .addTo(controller);

  var specsSection = new ScrollMagic.Scene({triggerElement: ".specs-section", duration: 1800, offset: 0})
    .setTween('.specs-content', {y: "150%", ease: Linear.easeNone})
    // .addIndicators({name: 'specs scroll'})
    .addTo(controller);

  /**
   * first text
   */
  var appMockupFirstTextPin = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: 800, offset: 650})
    .setPin('.app-mockup-text-section--first')
    // .addIndicators({name: 'stick first text'})
    .addTo(controller);

  var appMockupFirstTextTween = new TimelineMax()
    .add(TweenMax.fromTo('.app-mockup-text-section--first', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  var appMockupFirstText = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--first', duration: 150, offset: 220, ease: Linear.easeNone })
    .setTween(appMockupFirstTextTween)
    // .addIndicators({name: 'first text visibility'})
    .addTo(controller);

  var appMockupFirstTextTweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.app-mockup-text-section--first', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var appMockupFirstTextOut = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--first', duration: 150, offset: 750, ease: Linear.easeNone })
    .setTween(appMockupFirstTextTweenOut)
    // .addIndicators({name: 'first text visibility out'})
    .addTo(controller);

  /**
   * second text
   */
  var appMockupFirstTextPin2 = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: 769, offset: 1500})
      .setPin('.app-mockup-text-section--second')
      // .addIndicators({name: 'stick second text'})
      .addTo(controller);

  var appMockupFirstTextTween2 = new TimelineMax()
    .add(TweenMax.fromTo('.app-mockup-text-section--second', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  var appMockupFirstText2 = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--second', duration: 150, offset: 150, ease: Linear.easeNone })
    .setTween(appMockupFirstTextTween2)
    // .addIndicators({name: 'second text visibility'})
    .addTo(controller);

  var appMockupFirstTextTweenOut2 = new TimelineMax()
    .add(TweenMax.fromTo('.app-mockup-text-section--second', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var appMockupFirstTextOut2 = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--second', duration: 150, offset: 737, ease: Linear.easeNone })
    .setTween(appMockupFirstTextTweenOut2)
    // .addIndicators({name: 'second text visibility out'})
    .addTo(controller);

  /**
   * third text
   */
  var appMockupFirstTextPin3 = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: 769, offset: 2300})
      .setPin('.app-mockup-text-section--third')
      // .addIndicators({name: 'stick third text'})
      .addTo(controller);

  var appMockupFirstTextTween3 = new TimelineMax()
    .add(TweenMax.fromTo('.app-mockup-text-section--third', { opacity: 0 }, { opacity: 1 }));
  
  var appMockupFirstText3 = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--third', duration: 150, offset: 150, ease: Linear.easeNone })
    .setTween(appMockupFirstTextTween3)
    // .addIndicators({name: 'third text visibility'})
    .addTo(controller);

  var appMockupFirstTextTweenOut3 = new TimelineMax()
    .add(TweenMax.fromTo('.app-mockup-text-section--third', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var appMockupFirstTextOut3 = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--third', duration: 150, offset: 700, ease: Linear.easeNone })
    .setTween(appMockupFirstTextTweenOut3)
    // .addIndicators({name: 'third text visibility out'})
    .addTo(controller);

})();
