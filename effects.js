var rellax = new Rellax('.rellax');

var controller = new ScrollMagic.Controller();

(function() {
  var winder = new ScrollMagic.Scene({triggerElement: "#single-break", duration: 1125})
                .setPin('#main-winder')
                // .addIndicators({name: 'winder'})
                .addTo(controller);

  var firstText = new ScrollMagic.Scene({triggerElement: "#single-break", duration: 600, offset: 350})
                .setClassToggle('.extra-info-paragraph', 'in-viewport')
                // .addIndicators({name: 'first text'})
                .addTo(controller);

  var firstTextParallax = new ScrollMagic.Scene({triggerElement: "#single-break", duration: 600, offset: 350})
                .setTween('.extra-info-paragraph', {y: "80%", ease: Linear.easeNone})
                // .addIndicators({name: 'first text parallax'})
                .addTo(controller);

  var lightOn = new ScrollMagic.Scene({triggerElement: "#single-break", duration: 250})
                .setClassToggle('.winder-light', 'winder-light--visible')
                // .addIndicators({name: 'winder light'})
                .addTo(controller);

  var winderCenterTween = new TimelineMax()
                .add([
                  TweenMax.fromTo('.winder-center', 5, { rotation: 0 }, { rotation: 180, ease: Linear.easeNone })
                ])

  var winderCenterAnimation = new ScrollMagic.Scene({triggerElement: '#single-break', duration: 3250})
                              .setTween(winderCenterTween)
                              // .addIndicators({name: 'winder center'})
                              .addTo(controller);

  var winderTween = new TimelineMax()
    .add([
      TweenMax.fromTo('#main-winder', 2, { scale: 1.4 }, { scale: .9 })
    ])
  var startWinderParallax = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-section', duration: 500})
                            .setTween(winderTween)
                            // .addIndicators({name: 'winder parallax'})
                            .addTo(controller);

  var winderStopPosition = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-stop-section', duration: 1620})
                          .setPin('#main-winder')
                          // .addIndicators({name: 'winder stop'})
                          .addTo(controller);

  var secondInfoParagraph = new ScrollMagic.Scene({triggerElement: ".start-second-info", duration: 440})
                          .setClassToggle('.section-second-info-paragraph', 'in-viewport')
                          // .addIndicators({name: 'second text visible'})
                          .addTo(controller);

  var secondInfoParagraph = new ScrollMagic.Scene({triggerElement: ".start-second-info", duration: 550})
                          .setTween('.section-second-info-paragraph', {y: "50%", ease: Linear.easeNone})
                          // .addIndicators({name: 'second text parallax'})
                          .addTo(controller);


  var standTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.winder-stand', 2, { scale: 1, z: 0, opacity: 1 }, { scale: .95, z: -50, opacity: 0, ease: Linear.easeNone })
    ]);

  var standAnimation = new ScrollMagic.Scene({triggerElement: '.start-winder-stand-remove', duration: 100})
                        .setTween(standTween)
                        // .addIndicators({name: 'stand animation'})
                        .addTo(controller);

  var standRemoveTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.stand-without-top-one', 1, { scale: 2 }, { scale: .22, ease: Linear.easeNone })
    ]);
  var removeTopSection = new ScrollMagic.Scene({triggerElement: '.remove-top-stand-section', duration: 500})
                        .setTween(standRemoveTween)
                        // .addIndicators({name: 'remove top section'})
                        .addTo(controller);


  var addEmptyWinderToTop = new ScrollMagic.Scene({triggerElement: ".add-empty-winder-to-stand-section", duration: 0})
                          .setClassToggle('.top-one-empty', 'stand-without-top-one--visible')
                          // .addIndicators({name: 'add empty winder to top'})
                          .addTo(controller);

  var displayProducts = new ScrollMagic.Scene({triggerElement: ".display-products-section", duration: 0})
    .setClassToggle('.products-slider-section', 'products-slider-section--visible')
    // .addIndicators({name: 'display products'})
    .addTo(controller);
})();
