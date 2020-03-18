(function() {
  var windowWidth = document.body.clientWidth;
  var windowHeight = document.body.clientHeight;

  var mobileWidthBreakPoint = 600;
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

})();
