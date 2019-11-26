var rellax = new Rellax('.rellax');

var controller = new ScrollMagic.Controller();

(function() {
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
                .setClassToggle('.winder-light', 'winder-light--visible')
                
                .addTo(controller);

  var winderCenterTween = new TimelineMax()
                .add([
                  TweenMax.fromTo('.winder-center', 5, { rotation: 0 }, { rotation: 180, ease: Linear.easeNone })
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
      TweenMax.fromTo('.winder-stand', 2, { scale: 1, z: 0, opacity: 1 }, { scale: .95, z: -50, opacity: 0, ease: Linear.easeNone })
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
  var winderSliderTweenOut = new TimelineMax()
    .add([ TweenMax.fromTo('.stand-without-top-one', 1, { opacity: 1, x: -150 }, { opacity: 0, x: -140, ease: Linear.easeNone }) ]);

  var winderSliderFirstSectionIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 150, offset: 100})
    .setTween(winderSliderTweenIn)
    
    .addTo(controller);

  var winderSliderFirstSectionRemove = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 50, offset: 960})
    .setTween(winderSliderTweenOut)
    
    .addTo(controller);

  var sliderDescriptions = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 10500})
    .setPin('.slider-descriptions')
    
    .addTo(controller);

  var sliderDescriptionsClasses = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 4900, offset: 5608})
    .setClassToggle('.slider-descriptions', 'slider-descriptions--visible')
    
    .addTo(controller);

  var sliderAnimationDistance = 600;

  var sliderTitleInTween = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__1 .slider__title', 1, { x: -20, opacity: 0 }, { x: 0, opacity: 1, ease: Linear.easeNone }) ]);
  var sliderTitleOutTween = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__1 .slider__title', 1, { x: 0, opacity: 1 }, { x: 20, opacity: 0, ease: Linear.easeNone }) ]);

  var sliderTitleLineInTween = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__1 .slider__title-line', 1, { x: -20, opacity: 0, width: 0 }, { opacity: 1, width: 300, x: 0, ease: Linear.easeNone }) ]);
  var sliderTitleLineOutTween = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__1 .slider__title-line', 1, { opacity: 1, x: 0 }, { x: 10, opacity: 0, ease: Linear.easeNone }) ]);

  var sliderBodyInTween = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__1 .slider__body', 1, { y: -20, opacity: 0 }, { opacity: 1, y: 0, ease: Linear.easeNone }) ]);
  var sliderBodyOutTween = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__1 .slider__body', 1, { opacity: 1, x: 0 }, { x: 5, opacity: 0, ease: Linear.easeNone }) ]);

  /** SLIDE ANIMATIONS */
  var slideImageBGChange = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 1000, offset: 0})
    .setClassToggle('.slider-descriptions', 'slide-visible--1')
    
    .addTo(controller)

  var slider1TitleIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 230})
    .setTween(sliderTitleInTween)
    
    .addTo(controller);

  var slider1TitleLineIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 250})
    .setTween(sliderTitleLineInTween)
    
    .addTo(controller);

  var slider1BodyIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 270})
    .setTween(sliderBodyInTween)
    
    .addTo(controller);

  var sliderParallaxIn = new ScrollMagic.Scene({triggerElement: ".start-winders-slider-animation", duration: sliderAnimationDistance + 50, offset: 320})
    .setTween('.slider__1 .slider-content', {y: "-20%", ease: Linear.easeNone})
    
    .addTo(controller);

  var slider1TitleOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (230 + sliderAnimationDistance)})
    .setTween(sliderTitleOutTween)
    
    .addTo(controller);

  var slider1TitleLineOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (250 + sliderAnimationDistance)})
    .setTween(sliderTitleLineOutTween)
    
    .addTo(controller);

  var slider1BodyOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (270 + sliderAnimationDistance)})
    .setTween(sliderBodyOutTween)
    
    .addTo(controller);
    
  var sliderImagesClassToggle = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', offset: 1060})
    .setClassToggle('.slider__images', 'slider__images--visible')
    
    .addTo(controller);

  /**
   * SLIDE 2 START
   */
  var sliderImageIn2 = new TimelineMax().add([ TweenMax.fromTo('.slider__images', 1, { x: -20, opacity: 0 }, { opacity: 1, x: 0, ease: Linear.easeNone }) ]);
  var sliderImageOut2 = new TimelineMax().add([ TweenMax.fromTo('.slider__images', 1, { opacity: 1, x: 0 }, { x: 5, opacity: 0, ease: Linear.easeNone }) ]);

  var slide2ImageIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 1060})
    .setTween(sliderImageIn2)
    
    .addTo(controller);

  var slide2ImageOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 2000})
    .setTween(sliderImageOut2)
    
    .addTo(controller);

  var slide2ImageBGChange = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 1000, offset: 1100})
    .setClassToggle('.slider-descriptions', 'slide-visible--2')
    
    .addTo(controller);

  var sliderTitleInTween2 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__2 .slider__title', 1, { x: -20, opacity: 0 }, { x: 0, opacity: 1, ease: Linear.easeNone }) ]);
  var sliderTitleOutTween2 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__2 .slider__title', 1, { x: 0, opacity: 1 }, { x: 20, opacity: 0, ease: Linear.easeNone }) ]);

  var sliderTitleLineInTween2 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__2 .slider__title-line', 1, { x: -20, opacity: 0, width: 0 }, { opacity: 1, width: 300, x: 0, ease: Linear.easeNone }) ]);
  var sliderTitleLineOutTween2 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__2 .slider__title-line', 1, { opacity: 1, x: 0 }, { x: 10, opacity: 0, ease: Linear.easeNone }) ]);

  var sliderBodyInTween2 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__2 .slider__body', 1, { y: -20, opacity: 0 }, { opacity: 1, y: 0, ease: Linear.easeNone }) ]);
  var sliderBodyOutTween2 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__2 .slider__body', 1, { opacity: 1, x: 0 }, { x: 5, opacity: 0, ease: Linear.easeNone }) ]);

  /** SLIDE ANIMATIONS */
  var slider1TitleIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 1120})
    .setTween(sliderTitleInTween2)
    
    .addTo(controller);

  var slider1TitleLineIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 1140})
    .setTween(sliderTitleLineInTween2)
    
    .addTo(controller);

  var slider1BodyIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 1160})
    .setTween(sliderBodyInTween2)
    
    .addTo(controller);

  var sliderParallaxIn2 = new ScrollMagic.Scene({triggerElement: ".start-winders-slider-animation", duration: sliderAnimationDistance + 50, offset: 1260})
    .setTween('.slider__2 .slider-content', {y: "-20%", ease: Linear.easeNone})
    
    .addTo(controller);

  var slider2TitleOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (1260 + sliderAnimationDistance)})
    .setTween(sliderTitleOutTween2)
    
    .addTo(controller);

  var slider2TitleLineOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (1280 + sliderAnimationDistance)})
    .setTween(sliderTitleLineOutTween2)
    
    .addTo(controller);

  var slider2BodyOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (1300 + sliderAnimationDistance)})
    .setTween(sliderBodyOutTween2)
    
    .addTo(controller);

  /**
   * SLIDE 2 END
   */

   /**
   * SLIDE 3 START
   */
  var sliderImageIn3 = new TimelineMax().add([ TweenMax.fromTo('.slider__images', 1, { x: -20, opacity: 0 }, { opacity: 1, x: 0, ease: Linear.easeNone }) ]);
  var sliderImageOut3 = new TimelineMax().add([ TweenMax.fromTo('.slider__images', 1, { opacity: 1, x: 0 }, { x: 5, opacity: 0, ease: Linear.easeNone }) ]);

  var slide3ImageIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 2060})
    .setTween(sliderImageIn3)
    
    .addTo(controller);

  var slide3ImageOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 3000})
    .setTween(sliderImageOut3)
    
    .addTo(controller);

  var slide3ImageBGChange = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 1000, offset: 2059})
    .setClassToggle('.slider-descriptions', 'slide-visible--3')
    
    .addTo(controller);

  var sliderTitleInTween3 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__3 .slider__title', 1, { x: -20, opacity: 0 }, { x: 0, opacity: 1, ease: Linear.easeNone }) ]);
  var sliderTitleOutTween3 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__3 .slider__title', 1, { x: 0, opacity: 1 }, { x: 20, opacity: 0, ease: Linear.easeNone }) ]);

  var sliderTitleLineInTween3 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__3 .slider__title-line', 1, { x: -20, opacity: 0, width: 0 }, { opacity: 1, width: 300, x: 0, ease: Linear.easeNone }) ]);
  var sliderTitleLineOutTween3 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__3 .slider__title-line', 1, { opacity: 1, x: 0 }, { x: 10, opacity: 0, ease: Linear.easeNone }) ]);

  var sliderBodyInTween3 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__3 .slider__body', 1, { y: -20, opacity: 0 }, { opacity: 1, y: 0, ease: Linear.easeNone }) ]);
  var sliderBodyOutTween3 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__3 .slider__body', 1, { opacity: 1, x: 0 }, { x: 5, opacity: 0, ease: Linear.easeNone }) ]);

  /** SLIDE ANIMATIONS */
  var slider3TitleIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 2120})
    .setTween(sliderTitleInTween3)
    
    .addTo(controller);

  var slider3TitleLineIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 2140})
    .setTween(sliderTitleLineInTween3)
    
    .addTo(controller);

  var slider3BodyIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 2160})
    .setTween(sliderBodyInTween3)
    
    .addTo(controller);

  var sliderParallaxIn3 = new ScrollMagic.Scene({triggerElement: ".start-winders-slider-animation", duration: sliderAnimationDistance + 50, offset: 2260})
    .setTween('.slider__3 .slider-content', {y: "-20%", ease: Linear.easeNone})
    
    .addTo(controller);

  var slider3TitleOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (2260 + sliderAnimationDistance)})
    .setTween(sliderTitleOutTween3)
    
    .addTo(controller);

  var slider3TitleLineOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (2280 + sliderAnimationDistance)})
    .setTween(sliderTitleLineOutTween3)
    
    .addTo(controller);

  var slider3BodyOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (2300 + sliderAnimationDistance)})
    .setTween(sliderBodyOutTween3)
    
    .addTo(controller);

  /**
   * SLIDE 3 END
   */

   /**
   * SLIDE 4 START
   */
  var sliderImageIn4 = new TimelineMax().add([ TweenMax.fromTo('.slider__images', 1, { x: -20, opacity: 0 }, { opacity: 1, x: 0, ease: Linear.easeNone }) ]);
  var sliderImageOut4 = new TimelineMax().add([ TweenMax.fromTo('.slider__images', 1, { opacity: 1, x: 0 }, { x: 5, opacity: 0, ease: Linear.easeNone }) ]);

  var slide4ImageIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 3060})
    .setTween(sliderImageIn4)
    
    .addTo(controller);

  var slide4ImageOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 4000})
    .setTween(sliderImageOut4)
    
    .addTo(controller);

  var slide4ImageBGChange = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 1000, offset: 3059})
    .setClassToggle('.slider-descriptions', 'slide-visible--4')
    
    .addTo(controller);

  var sliderTitleInTween4 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__4 .slider__title', 1, { x: -20, opacity: 0 }, { x: 0, opacity: 1, ease: Linear.easeNone }) ]);
  var sliderTitleOutTween4 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__4 .slider__title', 1, { x: 0, opacity: 1 }, { x: 20, opacity: 0, ease: Linear.easeNone }) ]);

  var sliderTitleLineInTween4 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__4 .slider__title-line', 1, { x: -20, opacity: 0, width: 0 }, { opacity: 1, width: 300, x: 0, ease: Linear.easeNone }) ]);
  var sliderTitleLineOutTween4 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__4 .slider__title-line', 1, { opacity: 1, x: 0 }, { x: 10, opacity: 0, ease: Linear.easeNone }) ]);

  var sliderBodyInTween4 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__4 .slider__body', 1, { y: -20, opacity: 0 }, { opacity: 1, y: 0, ease: Linear.easeNone }) ]);
  var sliderBodyOutTween4 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__4 .slider__body', 1, { opacity: 1, x: 0 }, { x: 5, opacity: 0, ease: Linear.easeNone }) ]);

  /** SLIDE ANIMATIONS */
  var slider4TitleIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 3120})
    .setTween(sliderTitleInTween4)
    
    .addTo(controller);

  var slider4TitleLineIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 3140})
    .setTween(sliderTitleLineInTween4)
    
    .addTo(controller);

  var slider4BodyIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 3160})
    .setTween(sliderBodyInTween4)
    
    .addTo(controller);

  var sliderParallaxIn4 = new ScrollMagic.Scene({triggerElement: ".start-winders-slider-animation", duration: sliderAnimationDistance + 50, offset: 3260})
    .setTween('.slider__4 .slider-content', {y: "-20%", ease: Linear.easeNone})
    
    .addTo(controller);

  var slider4TitleOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (3260 + sliderAnimationDistance)})
    .setTween(sliderTitleOutTween4)
    
    .addTo(controller);

  var slider4TitleLineOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (3280 + sliderAnimationDistance)})
    .setTween(sliderTitleLineOutTween4)
    
    .addTo(controller);

  var slider4BodyOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (3300 + sliderAnimationDistance)})
    .setTween(sliderBodyOutTween4)
    
    .addTo(controller);

  /**
   * SLIDE 4 END
   */


   /**
   * SLIDE 5 START
   */
  var sliderImageIn5 = new TimelineMax().add([ TweenMax.fromTo('.slider__images', 1, { x: -20, opacity: 0 }, { opacity: 1, x: 0, ease: Linear.easeNone }) ]);
  var sliderImageOut5 = new TimelineMax().add([ TweenMax.fromTo('.slider__images', 1, { opacity: 1, x: 0 }, { x: 5, opacity: 0, ease: Linear.easeNone }) ]);

  var slide5ImageIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 4060})
    .setTween(sliderImageIn5)
    
    .addTo(controller);

  var slide5ImageOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 5000})
    .setTween(sliderImageOut5)
    
    .addTo(controller);

  var slide5ImageBGChange = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 1000, offset: 4059})
    .setClassToggle('.slider-descriptions', 'slide-visible--5')
    
    .addTo(controller);

  var sliderTitleInTween5 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__5 .slider__title', 1, { x: -20, opacity: 0 }, { x: 0, opacity: 1, ease: Linear.easeNone }) ]);
  var sliderTitleOutTween5 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__5 .slider__title', 1, { x: 0, opacity: 1 }, { x: 20, opacity: 0, ease: Linear.easeNone }) ]);

  var sliderTitleLineInTween5 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__5 .slider__title-line', 1, { x: -20, opacity: 0, width: 0 }, { opacity: 1, width: 300, x: 0, ease: Linear.easeNone }) ]);
  var sliderTitleLineOutTween5 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__5 .slider__title-line', 1, { opacity: 1, x: 0 }, { x: 10, opacity: 0, ease: Linear.easeNone }) ]);

  var sliderBodyInTween5 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__5 .slider__body', 1, { y: -20, opacity: 0 }, { opacity: 1, y: 0, ease: Linear.easeNone }) ]);
  var sliderBodyOutTween5 = new TimelineMax()
    .add([ TweenMax.fromTo('.slider__5 .slider__body', 1, { opacity: 1, x: 0 }, { x: 5, opacity: 0, ease: Linear.easeNone }) ]);

  /** SLIDE ANIMATIONS */
  var slider5TitleIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 4120})
    .setTween(sliderTitleInTween5)
    
    .addTo(controller);

  var slider5TitleLineIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 4140})
    .setTween(sliderTitleLineInTween5)
    
    .addTo(controller);

  var slider5BodyIn = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: 4160})
    .setTween(sliderBodyInTween5)
    
    .addTo(controller);

  var sliderParallaxIn5 = new ScrollMagic.Scene({triggerElement: ".start-winders-slider-animation", duration: sliderAnimationDistance + 50, offset: 4260})
    .setTween('.slider__5 .slider-content', {y: "-20%", ease: Linear.easeNone})
    
    .addTo(controller);

  var slider5TitleOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (4260 + sliderAnimationDistance)})
    .setTween(sliderTitleOutTween5)
    
    .addTo(controller);

  var slider5TitleLineOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (4280 + sliderAnimationDistance)})
    .setTween(sliderTitleLineOutTween5)
    
    .addTo(controller);

  var slider5BodyOut = new ScrollMagic.Scene({triggerElement: '.start-winders-slider-animation', duration: 100, offset: (4300 + sliderAnimationDistance)})
    .setTween(sliderBodyOutTween5)
    
    .addTo(controller);

  /**
   * SLIDE 5 END
   */

})();
