<?php /* Template Name: Homepage template - Animation */ ?>

<?php get_header(); ?>

<section class="animation-section first-section">
    <video src="Teaser-1.mp4" autoplay muted></video>
  </section>
  <section class="animation-section banner-section">
    <div class="rellax" data-rellax-speed="1">
      <h1 class="main-title noto-serif-regular">Time Machine Watch Winders</h1>
      <h2 class="main-title noto-serif-italic">Evolution of Revolution</h2>
    </div>
  </section>
  <div class="single-break" id="single-break"></div>
  <section class="animation-section single-winder-section">
    <div class="winder-wrapper">
      <div class="winder" id="main-winder">
        <div class="winder-light"></div>
        <div class="winder-stand"></div>
        <div class="winder-winder"></div>
        <div class="winder-center"></div>
      </div>
    </div>

    <p class="extra-info-paragraph" id="extra-info-paragraph">The guiding principle of the design process for the Time Machine watch winder was humble admiration of the watch makers' craftmanship.</p>
  </section>
  <div class="start-parallax-winder-section"></div>
  <div class="start-parallax-winder-stop-section"></div>
  <div class="start-second-info"></div>
  <div class="start-winder-stand-remove"></div>
  <section class="section-second-info">
    <div class="rellax-second-info">
      <p class="section-second-info-paragraph">We understand that the timepiece deserves a proper pedestal which will keep it functioning even when one is not wearing it. After so much time and effort was invested in crafting the mechanical masterpiece, it deserves a presentation that it is worthy of.</p>
    </div>
  </section>
  <section class="animation-section section-stick">
    <div class="start-minimizing-stick-section"></div>
    <div class="stand-without-top-one-wrapper">
      <div class="stand-without-top-one">
        <div class="top-one-empty"></div>
      </div>
    </div>
  </section>
  <div class="add-empty-winder-to-stand-section"></div>
  <div class="remove-top-stand-section"></div>
  <div class="display-products-section"></div>

  <section class="products-slider-section">
    <div class="products-slider" data-slick='{"slidesToShow": 3, "slidesToScroll": 1}'>
      <img src="slider/Double_Front.png">
      <img src="slider/Stand_Front.png">
      <img src="slider/Single_Front.png">
      <img src="slider/Triple_Front.png">
      <img src="slider/Wall_Front.png">
    </div>
    <div class="products-navigation"></div>
  </section>

  <section class="animation-section empty-section">
    <p class="empty-section-paragraph noto-serif-regular">The most precise way to keep your Timepiece collection ticking.</p>
  </section>

  <section class="animation-section app-mockup-section">
    <div class="app-mockup"></div>

    <div class="app-mockup-text-section app-mockup-text-section--first detect-viewport">
      <div class="app-mockup-text-section__title noto-serif-regular">Manage your watch collection.</div>
      <div class="app-mockup-text-section__text noto-serif-regular">Sed mollis venenatis nisl, sed consectetur enim lobortis sit amet. In condimentum tortor ut faucibus posuere. Phasellus egestas nibh quam.</div>
    </div>
    <div class="app-mockup-text-section app-mockup-text-section--second detect-viewport">
      <div class="app-mockup-text-section__title noto-serif-regular">Set winding cycles.</div>
      <div class="app-mockup-text-section__text noto-serif-regular">Sed mollis venenatis nisl, sed consectetur enim lobortis sit amet. In condimentum tortor ut faucibus posuere. Phasellus egestas nibh quam.</div>
    </div>
    <div class="app-mockup-text-section app-mockup-text-section--third detect-viewport">
      <div class="app-mockup-text-section__title noto-serif-regular">Stack your winders collection.</div>
      <div class="app-mockup-text-section__text noto-serif-regular">Sed mollis venenatis nisl, sed consectetur enim lobortis sit amet. In condimentum tortor ut faucibus posuere. Phasellus egestas nibh quam.</div>
    </div>
  </section>

<?php get_footer(); ?>

<script>

var rellax = new Rellax('.rellax');

var controller = new ScrollMagic.Controller();

(function() {
  var winder = new ScrollMagic.Scene({triggerElement: "#single-break", duration: 500})
                .setPin('#main-winder')
                .addIndicators({name: "winder"})
                .addTo(controller);

  var firstText = new ScrollMagic.Scene({triggerElement: "#single-break", duration: 300, offset: 100})
                .setClassToggle('.extra-info-paragraph', 'in-viewport')
                .addIndicators({name: 'firstText'})
                .addTo(controller);

  var lightOn = new ScrollMagic.Scene({triggerElement: "#single-break", duration: 250})
                .setClassToggle('.winder-light', 'winder-light--visible')
                .addIndicators({name: 'light'})
                .addTo(controller);

  var winderCenterTween = new TimelineMax()
                .add([
                  TweenMax.fromTo('.winder-center', 5, { rotation: 0 }, { rotation: 180, ease: Linear.easeNone })
                ])

  var winderCenterAnimation = new ScrollMagic.Scene({triggerElement: '#single-break', duration: 2464})
                              .setTween(winderCenterTween)
                              .addIndicators({name: 'center rotate'})
                              .addTo(controller);

  var winderTween = new TimelineMax()
    .add([
      TweenMax.fromTo('#main-winder', 2, { scale: 1.4 }, { scale: .9 })
    ])
  var startWinderParallax = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-section', duration: 550})
                            .setTween(winderTween)
                            .addIndicators()
                            .addTo(controller);

  var winderStopPosition = new ScrollMagic.Scene({triggerElement: '.start-parallax-winder-stop-section', duration: 1440})
                          .setPin('#main-winder')
                          .addIndicators({name: "winder stop position"})
                          .addTo(controller);

  var secondInfoParagraph = new ScrollMagic.Scene({triggerElement: ".start-second-info", duration: 440})
                          .setClassToggle('.section-second-info-paragraph', 'in-viewport')
                          .addIndicators({name: 'second text'})
                          .addTo(controller);

  var secondInfoParagraph = new ScrollMagic.Scene({triggerElement: ".start-second-info", duration: 550})
                          .setTween('.section-second-info-paragraph', {y: "50%", ease: Linear.easeNone})
                          .addIndicators({name: 'second text parallax'})
                          .addTo(controller);


  var standTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.winder-stand', 2, { scale: 1, z: 0, opacity: 1 }, { scale: .95, z: -50, opacity: 0, ease: Linear.easeNone })
    ]);

  var standAnimation = new ScrollMagic.Scene({triggerElement: '.start-winder-stand-remove', duration: 100})
                        .setTween(standTween)
                        .addIndicators({name: 'stand remove'})
                        .addTo(controller);

  var standRemoveTween = new TimelineMax()
    .add([
      TweenMax.fromTo('.stand-without-top-one', 1, { scale: 2 }, { scale: .22, ease: Linear.easeNone })
    ]);
  var removeTopSection = new ScrollMagic.Scene({triggerElement: '.remove-top-stand-section', duration: 500})
                        .setTween(standRemoveTween)
                        .addIndicators({name: 'whole stand normal'})
                        .addTo(controller);


  var addEmptyWinderToTop = new ScrollMagic.Scene({triggerElement: ".add-empty-winder-to-stand-section", duration: 0})
                          .setClassToggle('.top-one-empty', 'stand-without-top-one--visible')
                          .addIndicators({name: 'add empty winder on top'})
                          .addTo(controller);

  var displayProducts = new ScrollMagic.Scene({triggerElement: ".display-products-section", duration: 0})
    .setClassToggle('.products-slider-section', 'products-slider-section--visible')
    .addIndicators({name: 'products slider visible'})
    .addTo(controller);
})();

</script>

<?php
function add_homepage_scripts(){

  wp_register_script( 'scrollMagic', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js', '', '', true);
wp_register_script( 'scrollMagicDebug', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js', '', '', true);
wp_register_script( 'gsap', '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/jquery.gsap.min.js', '', '', true);
wp_register_script( 'gsapTweenMan', '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js', '', '', true);
wp_register_script( 'gsapTweenLite', '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js', '', '', true)
wp_register_script( 'gsapTimelineMax', '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TimelineMax.min.js', '', '', true)
wp_register_script( 'rellaxJS', get_stylesheet_directory_uri() . '/assets/js/rellax.js', '', '', true);

wp_enqueue_script('scrollMagic');
wp_enqueue_script('scrollMagicDebug');
wp_enqueue_script('gsap');
wp_enqueue_script('gsapTweenMan');
wp_enqueue_script('gsapTweenLite');
wp_enqueue_script('gsapTimelineMax');
wp_enqueue_script('rellaxJS');

}
?>