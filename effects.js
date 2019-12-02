(function() {
  var controller = new ScrollMagic.Controller();

  var winder = new ScrollMagic.Scene({triggerElement: ".single-break", duration: 1125})
                .setPin('#main-winder')
                
                .addTo(controller);

  var firstText = new ScrollMagic.Scene({triggerElement: ".single-break", duration: 600, offset: 350})
                .setClassToggle('.extra-info-paragraph', 'in-viewport')
                
                .addTo(controller);

  var firstTextParallax = new ScrollMagic.Scene({triggerElement: ".single-break", duration: 600, offset: 350})
                .setTween('.extra-info-paragraph', {y: "80%", ease: Linear.easeNone})
                
                .addTo(controller);

  var lightOn = new ScrollMagic.Scene({triggerElement: ".single-break", duration: 250})
                .setClassToggle('#main-winder .winder-light', 'winder-light--visible')
                
                .addTo(controller);

  var winderCenterTween = new TimelineMax()
                .add([
                  TweenMax.fromTo('#main-winder .winder-center', 5, { rotation: 0 }, { rotation: 180, ease: Linear.easeNone })
                ])

  var winderCenterAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 3440})
                              .setTween(winderCenterTween)
                              
                              .addTo(controller);

  var winderTween = new TimelineMax()
    .add([
      TweenMax.fromTo('#main-winder', 2, { scale: 1.4 }, { scale: .9 })
    ])
  var startWinderParallax = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-section', duration: 500})
                            .setTween(winderTween)
                            
                            .addTo(controller);

  var winderStopPosition = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-stop-section', duration: 1810})
                          .setPin('#main-winder')
                          
                          .addTo(controller);

  var secondInfoParagraph = new ScrollMagic.Scene({triggerElement: ".start-second-info", duration: 440})
                          .setClassToggle('.section-second-info-paragraph', 'in-viewport')
                          
                          .addTo(controller);

  var secondInfoParagraph = new ScrollMagic.Scene({triggerElement: ".start-second-info", duration: 550})
                          .setTween('.section-second-info-paragraph', {y: "50%", ease: Linear.easeNone})
                          
                          .addTo(controller);


  var standTween = new TimelineMax()
    .add([
      TweenMax.fromTo('#main-winder .winder-stand', 2, { scale: 1, z: 0, opacity: 1 }, { scale: .95, z: -50, opacity: 0, ease: Linear.easeNone })
    ]);

  var standAnimation = new ScrollMagic.Scene({triggerElement: '.start-winder-stand-remove', duration: 100})
                        .setTween(standTween)
                        
                        .addTo(controller);

  var standRemoveTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.stand-without-top-one', 1, { scale: 2 }, { scale: .22, ease: Linear.easeNone })
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
    .add([ TweenMax.fromTo('.stand-without-top-one', 1, { x: 0 }, { x: -150, ease: Linear.easeNone }) ]);

  var winderSliderFirstSectionIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 150 })
    .setTween(winderSliderTweenIn)
    .addTo(controller);

  var sliderDescriptions = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 11000})
    .setPin('.slider-descriptions')
    
    .addTo(controller);

  var sliderDescriptionsClasses = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 9000, offset: 5500})
    .setClassToggle('.slider-descriptions', 'slider-descriptions--visible')
    // .addIndicators({name: 'toggle descriptions'})
    .addTo(controller);
    
  var firstSlideAnimationTween = new TimelineMax()
    .add(TweenMax.fromTo('.slider__1 .slider-content', { zIndex: 0, opacity: 0, y: '10%' }, { opacity: 1, zIndex: 10, y: '-10%', ease: Linear.easeNone }))

  var firstSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 5500, duration: 800 })
    .setTween(firstSlideAnimationTween)
    // .addIndicators({name: 'slide #1'})
    .addTo(controller);

  var winderSliderTweenOut = new TimelineMax()
    .add([ TweenMax.fromTo('.stand-without-top-one', { opacity: 1 }, { opacity: 0, x: -200, immediateRender: false }) ]);

  var firstSlideAnimationOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 6300, duration: 80 })
    .setTween(winderSliderTweenOut)
    // .addIndicators({name: 'slide #1 out'})
    .addTo(controller);

  var firstSlideAnimationTweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__1 .slider-content', { opacity: 1, y: '-10%' }, { opacity: 0, zIndex: 0, y: '-20%', ease: Linear.easeNone, immediateRender: false }))
  
  var firstSlideAnimationTextOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 6300, duration: 80 })
    .setTween(firstSlideAnimationTweenOut)
    // .addIndicators({name: 'slide #1 text out'})
    .addTo(controller);

  /**
   * SLIDE 2
   */
  var secondSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__2 .slider-content', { zIndex: 0, opacity: 0, y: '10%' }, { opacity: 1, zIndex: 10, y: '-10%', ease: Linear.easeNone }))

  var secondSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__2 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0 }));

  var secondSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 6500, duration: 800 })
    .setTween(secondSlideBodyIn)
    // .addIndicators({name: 'slide #2'})
    .addTo(controller);

  var secondSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 6500, duration: 300 })
    .setTween(secondSlideSimageIn)
    // .addIndicators({name: 'slide #2 image in'})
    .addTo(controller);

  var secondSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__2', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var secondSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 7300, duration: 200 })
    .setTween(secondSlideSimageOut)
    // .addIndicators({name: 'slide #2 out'})
    .addTo(controller);

  /**
   * SLIDE 3
   */
  var thirdSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__3 .slider-content', { zIndex: 0, opacity: 0, y: '10%' }, { opacity: 1, zIndex: 10, y: '-10%', ease: Linear.easeNone }))

  var thirdSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__3 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0 }));

  var thirdSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 7500, duration: 800 })
    .setTween(thirdSlideBodyIn)
    // .addIndicators({name: 'slide #3'})
    .addTo(controller);

  var thirdSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 7500, duration: 300 })
    .setTween(thirdSlideSimageIn)
    // .addIndicators({name: 'slide #3 image in'})
    .addTo(controller);

  var thirdSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__3', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var thirdSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 8300, duration: 200 })
    .setTween(thirdSlideSimageOut)
    // .addIndicators({name: 'slide #3 out'})
    .addTo(controller);

  /**
   * SLIDE 4
   */
  var fourthSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__4 .slider-content', { zIndex: 0, opacity: 0, y: '10%' }, { opacity: 1, zIndex: 10, y: '-10%', ease: Linear.easeNone }))

  var fourthSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__4 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0 }));

  var fourthSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 8500, duration: 800 })
    .setTween(fourthSlideBodyIn)
    // .addIndicators({name: 'slide #4'})
    .addTo(controller);

  var fourthSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 8500, duration: 300 })
    .setTween(fourthSlideSimageIn)
    // .addIndicators({name: 'slide #4 image in'})
    .addTo(controller);

  var fourthSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__4', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var fourthSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 9300, duration: 200 })
    .setTween(fourthSlideSimageOut)
    // .addIndicators({name: 'slide #4 out'})
    .addTo(controller);

  /**
   * SLIDE 5
   */
  var fifthSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .slider-content', { zIndex: 0, opacity: 0, y: '10%' }, { opacity: 1, zIndex: 10, y: '-10%', ease: Linear.easeNone }))

  var fifthSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0 }));

  var fifthSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 9500, duration: 800 })
    .setTween(fifthSlideBodyIn)
    // .addIndicators({name: 'slide #5'})
    .addTo(controller);

  var fifthSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 9500, duration: 300 })
    .setTween(fifthSlideSimageIn)
    // .addIndicators({name: 'slide #5 image in'})
    .addTo(controller);

  var fifthSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .slider-content', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var fifthSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 10300, duration: 200 })
    .setTween(fifthSlideSimageOut)
    // .addIndicators({name: 'slide #5 out'})
    .addTo(controller);

  var lastWinder = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 3300, offset: 11000})
    .setPin('.slider__5 .slider__image')
    // .addIndicators({name: 'start center winder animation'})
    .addTo(controller);
    
  var lastWinderCenterTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .slider__image', { x: 0 }, { x: 148 }));
  var lastWinderCenterWinderTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder', { scale: 0.5 }, { scale: 1 }));

  var lastWinderCenter = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 10600, duration: 400 })
    .setTween(lastWinderCenterTween)
    // .addIndicators({name: 'center last winder'})
    .addTo(controller);

  var lastWinderCenterScale = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 10600, duration: 400 })
    .setTween(lastWinderCenterWinderTween)
    // .addIndicators({name: 'center last winder scale'})
    .addTo(controller);

  var lastWinderStandTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.slider__5 .winder-stand', { scale: .97, z: -20, opacity: 0 }, { scale: 1, z: 0, opacity: 1, ease: Linear.easeNone })
    ]);

  var bottomDescription1 = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 14000})
    .setPin('.winder-bottom-description__1')
    .addTo(controller);

  var bottomDescription2 = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 14000})
    .setPin('.winder-bottom-description__2')
    .addTo(controller);

  var bottomDescription3 = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 14000})
    .setPin('.winder-bottom-description__3')
    .addTo(controller);

  var standAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 100, offset: 11100})
      .setTween(lastWinderStandTween)
      // .addIndicators({name: 'last winder stand'})
      .addTo(controller);

  /**
   * DESCRIPTION 1
   */
  var bottomDescription1WinderWinderTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-center', { opacity: 1 }, { opacity: .3 }));

  var bottomDescription1WinderWinder = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 11450, duration: 100 })
    .setTween(bottomDescription1WinderWinderTween)
    // .addIndicators({name: 'bottom description #1 winder opacity'})
    .addTo(controller);

  var bottomDescription1Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__1', { opacity: 0 }, { opacity: 1 }));
  
  var bottomDescription1 = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 11550, duration: 100 })
    .setTween(bottomDescription1Tween)
    // .addIndicators({name: 'bottom description #1'})
    .addTo(controller);

  var bottomDescription1TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__1', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription1Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 11950, duration: 100 })
    .setTween(bottomDescription1TweenOut)
    // .addIndicators({name: 'bottom description #1 out'})
    .addTo(controller);

  var bottomDescription1WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-center, .slider__5 .winder-stand', { opacity: .3 }, { opacity: 1 }));

  var bottomDescription1Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 11950, duration: 100 })
    .setTween(bottomDescription1WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #1 winder opacity out'})
    .addTo(controller);

  /**
   * DESCRIPTION 2
   */
  var bottomDescription2WinderWinderTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-stand', { opacity: 1 }, { opacity: .3 }));

  var bottomDescription2WinderWinder = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 12200, duration: 100 })
    .setTween(bottomDescription2WinderWinderTween)
    // .addIndicators({name: 'bottom description #2 winder opacity'})
    .addTo(controller);

  var bottomDescription2Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__2', { opacity: 0 }, { opacity: 1 }));
  
  var bottomDescription2 = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 12300, duration: 100 })
    .setTween(bottomDescription2Tween)
    // .addIndicators({name: 'bottom description #2'})
    .addTo(controller);

  var bottomDescription2TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__2', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription2Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 12800, duration: 100 })
    .setTween(bottomDescription2TweenOut)
    // .addIndicators({name: 'bottom description #2 out'})
    .addTo(controller);

  var bottomDescription2WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-center', { opacity: .3 }, { opacity: 1 }));

  var bottomDescription2OutOpacity = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 12800, duration: 100 })
    .setTween(bottomDescription2WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #2 winder opacity out'})
    .addTo(controller);

  /**
   * DESCRIPTION 3
   */
  var bottomDescription3WinderWinderTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-stand', { opacity: 1 }, { opacity: .3 }));

  var bottomDescription3WinderWinder = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13000, duration: 100 })
    .setTween(bottomDescription3WinderWinderTween)
    // .addIndicators({name: 'bottom description #3 winder opacity'})
    .addTo(controller);

  var bottomDescription3Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__3', { opacity: 0 }, { opacity: 1 }));
  
  var bottomDescription3 = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13100, duration: 100 })
    .setTween(bottomDescription3Tween)
    // .addIndicators({name: 'bottom description #3'})
    .addTo(controller);

  var bottomDescription3TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__3', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription3Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13600, duration: 100 })
    .setTween(bottomDescription3TweenOut)
    // .addIndicators({name: 'bottom description #3 out'})
    .addTo(controller);

  var bottomDescription3WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-center, .slider__5 .winder-stand', { opacity: .3 }, { opacity: 1, immediateRender: false }));

  var bottomDescription3OutOpacity = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13600, duration: 100 })
    .setTween(bottomDescription3WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #3 winder opacity out'})
    .addTo(controller);

  var bottomWinderScaleUpTween = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-center', { scale: 1 }, { scale: 5 }))
    .add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-center', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomWinderStandFadeTween = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .winder-stand', { opacity: 1 }, { opacity: 0, immediateRender: false }));

  var bottomWinderStandFade = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13800, duration: 100 })
    .setTween(bottomWinderStandFadeTween)
    // .addIndicators({name: 'winder scale up'})
    .addTo(controller);

  var bottomWinderScaleUp = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13800, duration: 350 })
    .setTween(bottomWinderScaleUpTween)
    // .addIndicators({name: 'winder scale up'})
    .addTo(controller);


  var fulhaberMotorSectionTween = new TimelineMax()
    .add(TweenMax.fromTo('.empty-section', { opacity: 0 }, { opacity: 1 }));

  var fulhaberMotorSection = new ScrollMagic.Scene({triggerElement: '.empty-section--fade-in', duration: 50, offset: 350})
    .setTween(fulhaberMotorSectionTween)
    // .addIndicators({name: 'fulhaber motor fade in'})
    .addTo(controller);

  var lastWinder = new ScrollMagic.Scene({triggerElement: '.empty-section--fade-in', duration: 500, offset: 900})
    .setPin('.fulhaber-motor-image')
    // .addIndicators({name: 'pin fulhaber-motor-image'})
    .addTo(controller);

  var fulhaberDescription = new ScrollMagic.Scene({triggerElement: '.empty-section--fade-in', duration: 400, offset: 1000})
    .setClassToggle('.fulhaber-motor-image-description', 'in-viewport')
    // .addIndicators({name: 'ful haber description'})
    .addTo(controller);

  var appMockupFirstTextTween = new TimelineMax()
    .add(TweenMax.fromTo('.app-mockup-text-section--first', { opacity: 0 }, { opacity: 1 }));
  
  var appMockupFirstText = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--first', duration: 100})
    .setTween(appMockupFirstTextTween)
    // .addIndicators({name: 'app mockup first section'})
    .addTo(controller);

  var appMockupSecondTextTween = new TimelineMax()
    .add(TweenMax.fromTo('.app-mockup-text-section--second', { opacity: 0 }, { opacity: 1 }));
  
  var appMockupSecondText = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--second', duration: 100})
    .setTween(appMockupSecondTextTween)
    // .addIndicators({name: 'app mockup second section'})
    .addTo(controller);

  var appMockupThirdTextTween = new TimelineMax()
    .add(TweenMax.fromTo('.app-mockup-text-section--third', { opacity: 0 }, { opacity: 1 }));
  
  var appMockupThirdText = new ScrollMagic.Scene({triggerElement: '.app-mockup-text-section--third', duration: 100})
    .setTween(appMockupThirdTextTween)
    // .addIndicators({name: 'app mockup third section'})
    .addTo(controller);

})();
