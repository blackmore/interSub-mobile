

  $(function() {
      var el = document.querySelector("#darkTheme");
      el.addEventListener('toggle', function (e) {
        if (e.detail.isActive) {
          //console.log(e.target, e.detail.isActive);
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