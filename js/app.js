$(function() {

    // # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // No super no frills basic addEventListener the dark theme
    // # - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    var el = document.querySelector("#darkTheme");
    el.addEventListener('toggle', function (e) {
      if (e.detail.isActive) {
        //put all that you want this change in this finction 
        $('#main-header').addClass('dark');
        $('.main-body').addClass('dark');
        $('.img-logo-connect').addClass('dark');
      } else {
        $('#main-header').removeClass('dark');
        $('.main-body').removeClass('dark');
        $('.img-logo-connect').removeClass('dark');
      };
    });

});