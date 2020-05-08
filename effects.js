(function() {

  var windowWidth = document.body.clientWidth;
  var windowHeight = document.body.clientHeight;

  var mobileWidthBreakPoint = 810;
  var isMobile = windowWidth <= mobileWidthBreakPoint;

  var animateToSectionButtons = document.querySelectorAll('.navigate-to-section');
  checkForNavigationLinks();

  function checkForNavigationLinks() {
    var url = window.location.href;

    if (url.includes('#')) {
      var link = url.split('#').pop();

      var linkMapper = {
        overview: 9050,
        techspec: 29500
      };

      if (linkMapper[link]) {
        navigateToSection(linkMapper[link], true);
      }
    }
  }

  function navigateToSection(offset, urlNavigation) {
    if (document.body.classList.contains('mobile-menu-opened')) {
      document.body.classList.remove('mobile-menu-opened');
    }

    window.scrollTo({
      top: offset,
      behavior: urlNavigation ? 'auto' : 'auto',
    });
  }

  animateToSectionButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.stopPropagation();
      event.preventDefault();

      var offset = parseInt(this.dataset.offset);

      navigateToSection(offset, false);
    });
  });

  /**
   * Mobile has it's own version of JS
   */
  if (isMobile) {
    return;
  }

  let scrollposStand = 0;
  let lastposStand;

  let scrollposDouble = 0;
  let lastposDouble;

  let scrollposDoublePlus = 0;
  let lastposDoublePlus;

  let scrollposSingle = 0;
  let lastposSingle;

  let scrollposWall = 0;
  let lastposWall;

  const videoTTMStand = document.querySelector('#video-ttm-stand');
  const videoTTMDouble = document.querySelector('#video-ttm-double');
  const videoTTMDoublePlus = document.querySelector('#video-ttm-double-plus');
  const videoTTMSingle = document.querySelector('#video-ttm-single');
  const videoTTMWall = document.querySelector('#video-ttm-wall');

  function preloadVideoStand(v, callback) {
    const ready = () => {
      v.removeEventListener('canplaythrough', ready);
  
      videoTTMStand.pause();
      var i = setInterval(function() {
        if (v.readyState > 3) {
          clearInterval(i);
          videoTTMStand.currentTime = 0;
          callback();
        }
      }, 50);
    };
    v.addEventListener('canplaythrough', ready, false);
    v.play();
  };

  function preloadVideoWall(v, callback) {
    const ready = () => {
      v.removeEventListener('canplaythrough', ready);
  
      videoTTMWall.pause();
      var i = setInterval(function() {
        if (v.readyState > 3) {
          clearInterval(i);
          videoTTMWall.currentTime = 0;
          callback();
        }
      }, 50);
    };
    v.addEventListener('canplaythrough', ready, false);
    v.play();
  };

  function preloadVideoDouble(v, callback) {
    const ready = () => {
      v.removeEventListener('canplaythrough', ready);
  
      videoTTMDouble.pause();
      var i = setInterval(function() {
        if (v.readyState > 3) {
          clearInterval(i);
          videoTTMDouble.currentTime = 0;
          callback();
        }
      }, 50);
    };
    v.addEventListener('canplaythrough', ready, false);
    v.play();
  };

  function preloadVideoDoublePlus(v, callback) {
    const ready = () => {
      v.removeEventListener('canplaythrough', ready);
  
      videoTTMDoublePlus.pause();
      var i = setInterval(function() {
        if (v.readyState > 3) {
          clearInterval(i);
          videoTTMDoublePlus.currentTime = 0;
          callback();
        }
      }, 50);
    };
    v.addEventListener('canplaythrough', ready, false);
    v.play();
  };

  function preloadVideoSingle(v, callback) {
    const ready = () => {
      v.removeEventListener('canplaythrough', ready);
  
      videoTTMSingle.pause();
      var i = setInterval(function() {
        if (v.readyState > 3) {
          clearInterval(i);
          videoTTMSingle.currentTime = 0;
          callback();
        }
      }, 50);
    };
    v.addEventListener('canplaythrough', ready, false);
    v.play();
  };

  var controller = new ScrollMagic.Controller();

  var stickyMenuTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.header-inner', 2, { minHeight: 136 }, { minHeight: 80, zIndex: 5000000, immediateRender: false, ease: Linear.easeNone })
    ]);

  var stickyMenuOffset = 338;

  if (window.innerHeight < 800) {
    stickyMenuOffset = -100;
  } else if (window.innerHeight < 920) {
    stickyMenuOffset = 100; 
  }

  var stickyMenu = new ScrollMagic.Scene({ triggerElement: '.section-second-info', offset: stickyMenuOffset, duration: 60 })
    .setTween(stickyMenuTween)
    // .addIndicators({name: 'Sticky Menu'})
    .addTo(controller);

  var stickyMenuLogoTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.header-logo', 2, { scale: 1 }, { scale: .7, immediateRender: false, ease: Linear.easeNone })
    ]);

  var stickyMenuLogo = new ScrollMagic.Scene({ triggerElement: '.section-second-info', offset: stickyMenuOffset, duration: 60 })
    .setTween(stickyMenuLogoTween)
    // .addIndicators({name: 'Sticky Menu Logo'})
    .addTo(controller);

  var stickyMenuBlackClass = new ScrollMagic.Scene({ triggerElement: '.section-second-info', offset: stickyMenuOffset })
    .setClassToggle('header', 'header-inner--black')
    // .addIndicators({name: 'Sticky Menu Black BG'})
    .addTo(controller);

  var mainWinder = document.querySelector('.winder.main-winder .winder-winder');
  var mainWinderHeight = mainWinder.offsetHeight * 1.6;

  var firstWinderStopDuration = 2295;

  var winder = new ScrollMagic.Scene({
    triggerElement: '.single-break',
    triggerHook: 1,
    duration: firstWinderStopDuration,
    offset: mainWinderHeight / 2
  })
  .setPin('.main-winder')
  // .addIndicators({name: 'First main Winder'})
  .addTo(controller);

  var firstInfoParagraphInTween = new TimelineMax()
    .add([TweenMax.fromTo('.extra-info-paragraph', 1, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone, immediateRender: false })]);

  var firstInfoParagraphOutTween = new TimelineMax()
    .add([TweenMax.fromTo('.extra-info-paragraph', 1, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone, immediateRender: false })]);

  var firstTextOffset = 0;
  var firstTextHeightAdjustmentStart = 1050;
  if (window.innerHeight < firstTextHeightAdjustmentStart) {
    firstTextOffset = firstTextHeightAdjustmentStart - window.innerHeight;
  }

  var firstInfoParagraphIn = new ScrollMagic.Scene({
    triggerElement: '.single-break',
    triggerHook: 0,
    duration: 200,
    offset: -500 + firstTextOffset,
  })
    .setTween(firstInfoParagraphInTween)
    // .addIndicators({name: 'first text in'})
    .addTo(controller);

  var firstInfoParagraphOut = new ScrollMagic.Scene({
    triggerElement: '.single-break',
    triggerHook: 0,
    duration: 200,
    offset: 1000 + firstTextOffset,
  })
    .setTween(firstInfoParagraphOutTween)
    // .addIndicators({name: 'first text out'})
    .addTo(controller);

  var firstTextPin = new ScrollMagic.Scene({
    triggerElement: '.single-break',
    triggerHook: 0,
    duration: 1780,
    offset: -200 + firstTextOffset,
  })
    .setPin('.extra-info-paragraph')
    // .addIndicators({name: 'first text pin'})
    .addTo(controller);

  var lightOn = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 250})
                .setClassToggle('.main-winder .winder-light', 'winder-light--visible')
                .addTo(controller);

  var winderCenterTween = new TimelineMax()
                .add([
                  TweenMax.fromTo('.main-winder .winder-center', 5, { rotation: 0 }, { rotation: 180, ease: Linear.easeNone, immediateRender: false })
                ])

  var winderCenterAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 5610})
                              .setTween(winderCenterTween)
                              // .addIndicators({name: 'rotation'})
                              .addTo(controller);


  var mainWinderScale = .9;
  var mainWinderStartingScale = 1.6;

  var winderTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.main-winder', 2, { scale: mainWinderStartingScale }, { scale: mainWinderScale, immediateRender: false })
    ])
  var startWinderParallax = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-section', duration: 500})
                            .setTween(winderTween)
                            // .addIndicators({name: 'startWinderParallax'})
                            .addTo(controller);

  var winderStopPositionDuration = 2950;
  var firstWinderOffset = 0;

  if (window.innerHeight <= 760) {
    firstWinderOffset = -60;
  } else if (window.innerHeight <= 800) {
    firstWinderOffset = -20;
  }

  var winderStopPosition = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-stop-section', duration: winderStopPositionDuration, offset: firstWinderOffset})
                          .setPin('.main-winder')
                          // .addIndicators({name: 'neki'})
                          .addTo(controller);
  
  var secondTextPin = new ScrollMagic.Scene({duration: 10000})
    .setPin('.section-second-info-paragraph')
    // .addIndicators({name: 'second text pin'})
    .addTo(controller);

  var secondInfoParagraphInTween = new TimelineMax()
    .add([TweenMax.fromTo('.section-second-info-paragraph', 1, { opacity: 0 }, { opacity: 1, ease: Linear.easeNone, immediateRender: false })]);

  var secondInfoParagraphOutTween = new TimelineMax()
    .add([TweenMax.fromTo('.section-second-info-paragraph', 1, { opacity: 1 }, { opacity: 0, ease: Linear.easeNone, immediateRender: false })]);

  var secondInfoParagraphIn = new ScrollMagic.Scene({triggerElement: '.start-second-info', duration: 200})
    .setTween(secondInfoParagraphInTween)
    // .addIndicators({name: 'second text in'})
    .addTo(controller);

  var secondInfoParagraphOut = new ScrollMagic.Scene({triggerElement: '.start-second-info', duration: 200, offset: 1540})
    .setTween(secondInfoParagraphOutTween)
    // .addIndicators({name: 'second text out'})
    .addTo(controller);

  var standTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.main-winder .winder-stand', 2, { scale: 1, z: 0, opacity: 1 }, { scale: .95, z: -50, opacity: 0, ease: Linear.easeNone, immediateRender: false })
    ]);

  var standAnimation = new ScrollMagic.Scene({triggerElement: '.start-winder-stand-remove', duration: 300, offset: 1300})
                        .setTween(standTween)
                        .addTo(controller);

  var standRemoveTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.stand-without-top-one--desktop', 1, { scale: 2 }, { scale: .195, ease: Linear.easeNone, immediateRender: false })
    ]);
  var removeTopSection = new ScrollMagic.Scene({triggerElement: '.remove-top-stand-section', duration: 500})
                        .setTween(standRemoveTween)
                        // .addIndicators({name: 'removeTopSection'})
                        .addTo(controller);

  var addEmptyWinderToTop = new ScrollMagic.Scene({triggerElement: ".remove-top-stand-section", duration: 0})
                          .setClassToggle('.top-one-empty', 'stand-without-top-one--visible')
                          
                          .addTo(controller);
  
  var startWinderSlider = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 7748, duration: 700 })
    .setPin('.stand-without-top-one--desktop')
    // .addIndicators({name: 'startWinderSlider'})
    .addTo(controller);

  var sliderDescriptions = new ScrollMagic.Scene({duration: 28000})
    .setPin('.slider-descriptions')
    // .addIndicators({name: 'descriptions'})
    .addTo(controller);

  var sliderDescriptionsClasses = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 22000, offset: 7700})
    .setClassToggle('.slider-descriptions', 'slider-descriptions--visible')
    // .addIndicators({name: 'toggle descriptions'})
    .addTo(controller);
    
  var firstSlideAnimationTween = new TimelineMax()
    .add(TweenMax.fromTo('.slider__1 .slider-content', { zIndex: 0, opacity: 0 }, { opacity: 1, zIndex: 10, ease: Linear.easeNone, immediateRender: false }))

  var firstSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 7900, duration: 250 })
    .setTween(firstSlideAnimationTween)
    // .addIndicators({name: 'slide #1'})
    .addTo(controller);

  var winderSliderTweenOut = new TimelineMax()
    .add([ TweenMax.fromTo('.stand-without-top-one--desktop', { x: 0 }, { x: -310, immediateRender: false, ease: Linear.easeNone }) ]);

  var firstSlideAnimationOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 7748, duration: 550 })
    .setTween(winderSliderTweenOut)
    // .addIndicators({name: 'Big Stand Move Left'})
    .addTo(controller);

  var firstSlideZIndexTween = new TimelineMax().add(
    TweenMax.fromTo('.slider__1', { zIndex: 0 }, { zIndex: 10, immediateRender: false }));

  var firstSlideZIndex = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 8130 })
    .setTween(firstSlideZIndexTween)
    // .addIndicators({name: 'First Slide In'})
    .addTo(controller);

  var firstSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__1 .slider__image', { opacity: 0 }, { opacity: 1, immediateRender: false }));

  var secondSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 8280, duration: 100 })
    .setTween(firstSlideSimageIn)
    // .addIndicators({name: 'Slider 1 Image Fade In'})
    .addTo(controller);

  var bigStandFadeOutTween = new TimelineMax()
    .add(TweenMax.fromTo('.stand-without-top-one--desktop', { opacity: 1 }, { opacity: 0, immediateRender: false }));

  var bigStandFadeOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 8400, duration: 20 })
    .setTween(bigStandFadeOutTween)
    // .addIndicators({name: 'Big Stand Removed'})
    .addTo(controller);

  var firstVideoScene = new ScrollMagic.Scene({ triggerElement: '.single-break', offset: 8260, duration: 2300 })

  function firstVideoSceneStartAnimation() {
    firstVideoScene
      .addTo(controller)
      .on('progress', function(e) {
        scrollposStand = e.progress;
      });

    setInterval(() => {
      if (lastposStand === scrollposStand) return;
      requestAnimationFrame(() => {
        videoTTMStand.currentTime = videoTTMStand.duration * scrollposStand;
        videoTTMStand.pause();
        lastposStand = scrollposStand;
      });
    }, 50);
  }

  var firstSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__1', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var firstSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 10500, duration: 200 })
    .setTween(firstSlideSimageOut)
    // .addIndicators({name: 'Fade out first slide'})
    .addTo(controller);

  var firstSlideZIndexOutTween = new TimelineMax().add(
    TweenMax.fromTo('.slider__1', { zIndex: 10 }, { zIndex: 0, immediateRender: false }));

  var firstSlideZIndexOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 10700 })
    .setTween(firstSlideZIndexOutTween)
    // .addIndicators({name: 'First Slide Out'})
    .addTo(controller);

  var secondSlideZIndexTween = new TimelineMax().add(
    TweenMax.fromTo('.slider__2', { zIndex: 0 }, { zIndex: 10, immediateRender: false }));

  var secondSlideZIndex = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 10800 })
    .setTween(secondSlideZIndexTween)
    // .addIndicators({name: 'Second Slide In'})
    .addTo(controller);

  var wallVideoScene = new ScrollMagic.Scene({ triggerElement: '.single-break', offset: 10800, duration: 2500 });

  function wallVideoSceneStartAnimation() {
    wallVideoScene
      // .addIndicators({name: 'Start Playing Wall Video'})
      .addTo(controller)
      .on('progress', function(e) {
        scrollposWall = e.progress;
      });

    setInterval(() => {
      if (lastposWall === scrollposWall) return;
      requestAnimationFrame(() => {
        videoTTMWall.currentTime = videoTTMWall.duration * scrollposWall;
        videoTTMWall.pause();
        lastposWall = scrollposWall;
      });
    }, 50);
  }

  /**
   * SLIDE 2
   */
  var secondSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__2 .slider-content', { zIndex: 0, opacity: 0 }, { opacity: 1, zIndex: 10, ease: Linear.easeNone, immediateRender: false }))

  var secondSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__2 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, immediateRender: false }));

  var secondSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 10800, duration: 200 })
    .setTween(secondSlideBodyIn)
    // .addIndicators({name: 'Slider 2 Content Fade In'})
    .addTo(controller);

  var secondSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 10800, duration: 300 })
    .setTween(secondSlideSimageIn)
    // .addIndicators({name: 'slide #2 image in'})
    .addTo(controller);

  var secondSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__2', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var secondSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13200, duration: 200 })
    .setTween(secondSlideSimageOut)
    // .addIndicators({name: 'Slider 2 Out'})
    .addTo(controller);

  var secondSlideZIndexOutTween = new TimelineMax().add(
    TweenMax.fromTo('.slider__2', { zIndex: 10 }, { zIndex: 0, immediateRender: false }));

  var secondSlideZIndexOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13400 })
    .setTween(secondSlideZIndexOutTween)
    // .addIndicators({name: 'Second Slide Out'})
    .addTo(controller);

  var thirdSlideZIndexTween = new TimelineMax().add(
    TweenMax.fromTo('.slider__3', { zIndex: 0 }, { zIndex: 10, immediateRender: false }));

  var thirdSlideZIndex = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13500 })
    .setTween(thirdSlideZIndexTween)
    // .addIndicators({name: 'Third Slide In'})
    .addTo(controller);

  /**
   * SLIDE 3
   */
  var thirdSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__3 .slider-content', { zIndex: 0, opacity: 0 }, { opacity: 1, zIndex: 10, ease: Linear.easeNone, immediateRender: false }))

  var thirdSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__3 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, immediateRender: false }));

  var thirdSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13500, duration: 200 })
    .setTween(thirdSlideBodyIn)
    // .addIndicators({name: 'slide #3'})
    .addTo(controller);

  var thirdSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 13500, duration: 200 })
    .setTween(thirdSlideSimageIn)
    // .addIndicators({name: 'slide #3 image in'})
    .addTo(controller);

  var secondVideoScene = new ScrollMagic.Scene({ triggerElement: '.single-break', offset: 13500, duration: 2300 })

  function secondVideoSceneStartAnimation() {
    secondVideoScene
      .addTo(controller)
      .on('progress', function(e) {
        scrollposDouble = e.progress;
      });

    setInterval(() => {
      if (lastposDouble === scrollposDouble) return;
      requestAnimationFrame(() => {
        videoTTMDouble.currentTime = videoTTMDouble.duration * scrollposDouble;
        videoTTMDouble.pause();
        lastposDouble = scrollposDouble;
      });
    }, 50);
  }

  var thirdSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__3', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var thirdSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 15700, duration: 200 })
    .setTween(thirdSlideSimageOut)
    // .addIndicators({name: 'Slider 3 Out'})
    .addTo(controller);

  var thirdSlideZIndexOutTween = new TimelineMax().add(
    TweenMax.fromTo('.slider__3', { zIndex: 10 }, { zIndex: 0, immediateRender: false }));

  var thirdSlideZIndexOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 15900 })
    .setTween(thirdSlideZIndexOutTween)
    // .addIndicators({name: 'Third Slide Out'})
    .addTo(controller);

  var fourthSlideZIndexInTween = new TimelineMax().add(
    TweenMax.fromTo('.slider__4', { zIndex: 0 }, { zIndex: 10, immediateRender: false }));

  var fourthSlideZIndexIn = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 16000 })
    .setTween(fourthSlideZIndexInTween)
    // .addIndicators({name: 'Fourth Slide In'})
    .addTo(controller);

  /**
   * SLIDE 4
   */
  var fourthSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__4 .slider-content', { zIndex: 0, opacity: 0 }, { opacity: 1, zIndex: 10, ease: Linear.easeNone, immediateRender: false }))

  var fourthSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__4 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, immediateRender: false }));

  var fourthSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 16000, duration: 200 })
    .setTween(fourthSlideBodyIn)
    // .addIndicators({name: 'Slide 4 In'})
    .addTo(controller);

  var fourthSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 16000, duration: 200 })
    .setTween(fourthSlideSimageIn)
    // .addIndicators({name: 'slide #4 image in'})
    .addTo(controller);

  var thirdVideoScene = new ScrollMagic.Scene({ triggerElement: '.single-break', offset: 16000, duration: 2300 });

  function thirdVideoSceneStartAnimation() {
    thirdVideoScene
      .addTo(controller)
      .on('progress', function(e) {
        scrollposDoublePlus = e.progress;
      });

    setInterval(() => {
      if (lastposDoublePlus === scrollposDoublePlus) return;
      requestAnimationFrame(() => {
        videoTTMDoublePlus.currentTime = videoTTMDoublePlus.duration * scrollposDoublePlus;
        videoTTMDoublePlus.pause();
        lastposDoublePlus = scrollposDoublePlus;
      });
    }, 50);
  }

  var fourthSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__4', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var fourthSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 18100, duration: 200 })
    .setTween(fourthSlideSimageOut)
    // .addIndicators({name: 'Slide 4 Out'})
    .addTo(controller);

  var fourthlideZIndexOutTween = new TimelineMax().add(
    TweenMax.fromTo('.slider__4', { zIndex: 10 }, { zIndex: 0, immediateRender: false }));

  var fourthlideZIndexOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 18300 })
    .setTween(fourthlideZIndexOutTween)
    // .addIndicators({name: 'Fourth Slide Out'})
    .addTo(controller);

  var fifththSlideZIndexOutTween = new TimelineMax().add(
    TweenMax.fromTo('.slider__5', { zIndex: 10 }, { zIndex: 0, immediateRender: false }));

  var fifththSlideZIndexOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 18400 })
    .setTween(fifththSlideZIndexOutTween)
    // .addIndicators({name: 'Fifth Slide In'})
    .addTo(controller);

  /**
   * SLIDE 5
   */
  var fifthSlideBodyIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .slider-content', { zIndex: 0, opacity: 0 }, { opacity: 1, zIndex: 10, ease: Linear.easeNone, immediateRender: false }))

  var fifthSlideSimageIn = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .slider__image', { opacity: 0, x: 50 }, { opacity: 1, x: 0, immediateRender: false }));

  var fifthSlideAnimation = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 18400, duration: 200 })
    .setTween(fifthSlideBodyIn)
    // .addIndicators({name: 'slide #5'})
    .addTo(controller);

  var fifthSlideAnimationImage = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 18400, duration: 300 })
    .setTween(fifthSlideSimageIn)
    // .addIndicators({name: 'slide #5 image in'})
    .addTo(controller);

  var fifthImageRealWinderFadeInTween = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .winder', { opacity: 0 }, { opacity: 1, immediateRender: false }));

  var fifthImageRealWinderFadeIn = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 20, offset: 20710})
    .setTween(fifthImageRealWinderFadeInTween)
    // .addIndicators({name: 'fifthImageRealWinderFadeIn'})
    .addTo(controller);

  var fourthVideoScene = new ScrollMagic.Scene({ triggerElement: '.single-break', offset: 18400, duration: 2300 });
  function fourthVideoSceneStartAnimation() {
    fourthVideoScene
      .addTo(controller)
      .on('progress', function(e) {
        scrollposSingle = e.progress;
      });

    setInterval(() => {
      if (lastposSingle === scrollposSingle) return;
      requestAnimationFrame(() => {
        videoTTMSingle.currentTime = videoTTMSingle.duration * scrollposSingle;
        videoTTMSingle.pause();
        lastposSingle = scrollposSingle;
      });
    }, 50);
  }

  var fifthSlideSimageOut = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .slider-content, .slider__5 #video-ttm-single', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var fifthSlideAnimationImageOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 20800, duration: 200 })
    .setTween(fifthSlideSimageOut)
    // .addIndicators({name: 'Slide 5 Out'})
    .addTo(controller);

  var fifthlideZIndexOutTween = new TimelineMax().add(
    TweenMax.fromTo('.slider__5', { zIndex: 10 }, { zIndex: 0, immediateRender: false }));

  var fifthlideZIndexOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 21000 })
    .setTween(fifthlideZIndexOutTween)
    // .addIndicators({name: 'Fifth Slide Out'})
    .addTo(controller);

  // var lastWinder = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 4400, offset: 15500})
  //   .setPin('.slider__5 .slider__image')
  // addIndicators({name: 'center winder animation'})
  //   .addTo(controller);

  var lastWinderCenterTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .slider__image', { x: 0 }, { x: 300, immediateRender: false }));
  var lastWinderCenterWinderTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder', { scale: 0.63 }, { scale: 1, immediateRender: false }));

  var lastWinderCenter = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 21000, duration: 400 })
    .setTween(lastWinderCenterTween)
    // .addIndicators({name: 'center last winder'})
    .addTo(controller);

  var lastWinderCenterScale = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 21000, duration: 400 })
    .setTween(lastWinderCenterWinderTween)
    // .addIndicators({name: 'center last winder scale'})
    .addTo(controller);

  // var lastWinderStandTween = new TimelineMax()
  //   .add([
  //     TweenMax.fromTo('.slider__5 .winder-stand', { scale: .97, z: -20, opacity: 0 }, { scale: 1, z: 0, opacity: 1, ease: Linear.easeNone, immediateRender: false })
  //   ]);

  var bottomDescription1 = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 26000, triggerHook: 1})
    .setPin('.winder-bottom-description__1')
    .addTo(controller);

  var bottomDescription2 = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 26000, triggerHook: 1})
    .setPin('.winder-bottom-description__2')
    .addTo(controller);

  var bottomDescription3 = new ScrollMagic.Scene({triggerElement: '.single-break', duration: 26000, triggerHook: 1})
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

  var bottomDescription1WinderWinder = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 21500, duration: 250 })
    .setTween(bottomDescription1WinderWinderTween)
    // .addIndicators({name: 'bottom description #1 winder opacity'})
    .addTo(controller);

  var bottomDescription1Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__1', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  var bottomDescription1 = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 21500, duration: 250 })
    .setTween(bottomDescription1Tween)
    // .addIndicators({name: 'bottom description #1'})
    .addTo(controller);

  var bottomDescription1TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__1', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription1Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 22200, duration: 250 })
    .setTween(bottomDescription1TweenOut)
    // .addIndicators({name: 'bottom description #1 out'})
    .addTo(controller);

  var bottomDescription1WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-center', { opacity: .3 }, { opacity: 1, immediateRender: false }));

  var bottomDescription1Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 22200, duration: 250 })
    .setTween(bottomDescription1WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #1 winder opacity out'})
    .addTo(controller);

  /**
   * DESCRIPTION 2
   */
  var bottomDescription2WinderWinderTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-stand', { opacity: 1 }, { opacity: .3, immediateRender: false }));

  var bottomDescription2WinderWinder = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 22600, duration: 250 })
    .setTween(bottomDescription2WinderWinderTween)
    // .addIndicators({name: 'bottom description #2 winder opacity'})
    .addTo(controller);

  var bottomDescription2Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__2', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  var bottomDescription2 = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 22600, duration: 250 })
    .setTween(bottomDescription2Tween)
    // .addIndicators({name: 'bottom description #2'})
    .addTo(controller);

  var bottomDescription2TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__2', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription2Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 23500, duration: 250 })
    .setTween(bottomDescription2TweenOut)
    // .addIndicators({name: 'bottom description #2 out'})
    .addTo(controller);

  var bottomDescription2WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-stand', { opacity: .3 }, { opacity: 1, immediateRender: false }));

  var bottomDescription2OutOpacity = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 23500, duration: 250 })
    .setTween(bottomDescription2WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #2 winder opacity out'})
    .addTo(controller);

  /**
   * DESCRIPTION 3
   */
  var bottomDescription3WinderWinderTween = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-stand', { opacity: 1 }, { opacity: .3, immediateRender: false }));

  var bottomDescription3WinderWinder = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 23850, duration: 250 })
    .setTween(bottomDescription3WinderWinderTween)
    // .addIndicators({name: 'bottom description #3 winder opacity'})
    .addTo(controller);

  var bottomDescription3WinderWatchTween = new TimelineMax().add(TweenMax.fromTo('.winder-watch', { opacity: 0 }, { opacity: 1, immediateRender: false }));

  var bottomDescription3WinderWatch = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 23850, duration: 250})
    .setTween(bottomDescription3WinderWatchTween)
    // .addIndicators({name: 'bottom description #3 watch in'})
    .addTo(controller);

  var bottomDescription3Tween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__3', { opacity: 0 }, { opacity: 1, immediateRender: false }));
  
  var bottomDescription3 = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 23850, duration: 250 })
    .setTween(bottomDescription3Tween)
    // .addIndicators({name: 'bottom description #3'})
    .addTo(controller);

  var bottomDescription3TweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-bottom-description__3', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription3Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 24700, duration: 250 })
    .setTween(bottomDescription3TweenOut)
    // .addIndicators({name: 'bottom description #3 out'})
    .addTo(controller);

  var bottomDescription3WatchTweenOut = new TimelineMax()
    .add(TweenMax.fromTo('.winder-watch', { opacity: 1 }, { opacity: 0, immediateRender: false }));
  
  var bottomDescription3Out = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 24700, duration: 250 })
    .setTween(bottomDescription3WatchTweenOut)
    // .addIndicators({name: 'bottom description #3 watch out'})
    .addTo(controller);

  var bottomWinderCenterTween = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .winder-center', 5, { rotation: 0 }, { rotation: 90, ease: Linear.easeNone, immediateRender: false }));

  var bottomWinderCenter = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 25200, duration: 750})
    .setTween(bottomWinderCenterTween)
    // .addIndicators({name: 'bottom rotate'})
    .addTo(controller);

  var bottomDescription3WinderWinderTweenOut = new TimelineMax().add(TweenMax.fromTo('.slider__5 .winder-winder, .slider__5 .winder-stand', { opacity: .3 }, { opacity: 1, immediateRender: false }));

  var bottomDescription3OutOpacity = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 25000, duration: 250 })
    .setTween(bottomDescription3WinderWinderTweenOut)
    // .addIndicators({name: 'bottom description #3 winder opacity out'})
    .addTo(controller);

  var bottomWinderScaleUpTween = new TimelineMax()
    .add(TweenMax.fromTo('.winder-winder--with-center', 1, { opacity: 0 }, { opacity: 1, immediateRender: false, ease: Linear.easeNone }))
    .add(TweenMax.fromTo('.winder-winder--with-center', 2, { scale: 1 }, { scale: 6, immediateRender: false, ease: Linear.easeNone }))
    .add(TweenMax.fromTo('.winder-winder--with-center', 2, { opacity: 1, scale: 6 }, { scale: 10, opacity: 0, immediateRender: false }));

  var bottomWinderStandFadeTween = new TimelineMax()
    .add(TweenMax.fromTo('.slider__5 .winder-stand', { opacity: 1 }, { opacity: 0, immediateRender: false }));

  var bottomWinderStandFade = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 26000, duration: 100 })
    .setTween(bottomWinderStandFadeTween)
    // .addIndicators({name: 'winder fade in'})
    .addTo(controller);

  var bottomWinderOriginalFadeOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 26100})
    .setClassToggle('.slider__5', 'slider__5--winder-hidden')
    // .addIndicators({name: 'Original fade out In'})
    .addTo(controller);

  var bottomWinderOriginalFadeOut = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 26500})
    .setClassToggle('.slider__5', 'slider__5--hide-overflow')
    // .addIndicators({name: 'Original fade out In'})
    .addTo(controller);

  var bottomWinderScaleUp = new ScrollMagic.Scene({triggerElement: '.single-break', offset: 26000, duration: 550})
    .setTween(bottomWinderScaleUpTween)
    // .addIndicators({name: 'winder scale up'})
    .addTo(controller);

  var fulhaberMotorSectionTween = new TimelineMax()
    .add(TweenMax.fromTo('.empty-section', { opacity: 0 }, { opacity: 1 }));

  var fulhaberMotorSection = new ScrollMagic.Scene({triggerElement: '.empty-section--fade-in', duration: 50, offset: 500})
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

  var appMockupsDuration = 800;

  /**
   * first text
   */
  var appMockupFirstTextPin = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: appMockupsDuration, offset: 650})
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
  var appMockupFirstTextPin2 = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: appMockupsDuration, offset: 1500})
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
  var appMockupFirstTextPin3 = new ScrollMagic.Scene({triggerElement: ".app-mockup-section", duration: appMockupsDuration, offset: 2300})
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

  preloadVideoStand(videoTTMStand, firstVideoSceneStartAnimation);
  preloadVideoDouble(videoTTMDouble, secondVideoSceneStartAnimation);
  preloadVideoDoublePlus(videoTTMDoublePlus, thirdVideoSceneStartAnimation);
  preloadVideoSingle(videoTTMSingle, fourthVideoSceneStartAnimation);
  preloadVideoWall(videoTTMWall, wallVideoSceneStartAnimation);

})();
