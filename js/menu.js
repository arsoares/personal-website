$('#menu-toggle').click(function() {
   $('#menu-overlay').toggleClass('open');
   $('#menu-toggle').toggleClass('close-button');
   $('#nav-main').toggleClass('frozen-nav');
});