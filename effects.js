var rellax = new Rellax('.rellax');

var controller = new ScrollMagic.Controller();

(function() {
  var winder = new ScrollMagic.Scene({triggerElement: "#single-break", duration: 500})
                .setPin('#main-winder')
                
                .addTo(controller);

  var firstText = new ScrollMagic.Scene({triggerElement: "#single-break", duration: 300, offset: 100})
                .setClassToggle('.extra-info-paragraph', 'in-viewport')
                
                .addTo(controller);

  var lightOn = new ScrollMagic.Scene({triggerElement: "#single-break", duration: 250})
                .setClassToggle('.winder-light', 'winder-light--visible')
                
                .addTo(controller);

  var winderCenterTween = new TimelineMax()
                .add([
                  TweenMax.fromTo('.winder-center', 5, { rotation: 0 }, { rotation: 180, ease: Linear.easeNone })
                ])

  var winderCenterAnimation = new ScrollMagic.Scene({triggerElement: '#single-break', duration: 2464})
                              .setTween(winderCenterTween)
                              
                              .addTo(controller);

  var winderTween = new TimelineMax()
    .add([
      TweenMax.fromTo('#main-winder', 2, { scale: 1.4 }, { scale: .9 })
    ])
  var startWinderParallax = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-section', duration: 550})
                            .setTween(winderTween)
                            
                            .addTo(controller);

  var winderStopPosition = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-stop-section', duration: 1440})
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


  var addEmptyWinderToTop = new ScrollMagic.Scene({triggerElement: ".add-empty-winder-to-stand-section", duration: 0})
                          .setClassToggle('.top-one-empty', 'stand-without-top-one--visible')
                          
                          .addTo(controller);

  var displayProducts = new ScrollMagic.Scene({triggerElement: ".display-products-section", duration: 0})
    .setClassToggle('.products-slider-section', 'products-slider-section--visible')
    
    .addTo(controller);
})();
