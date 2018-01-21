// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Populate Contact form
    $("#services .fa-stack").bind('click', function(event){
      var x = $(this).next('.service-heading').text();
      //console.log(x);
      populateContact(x);
    });

    function populateContact(x){
      var msg = 'I need assistance with one of your services. Please contact me at the next available opportunity.'
      if (x == 'Roofing') msg = 'I am interested in a roofing installation/repair. Please contact me at the next available opportunity.'
      if (x == 'Windows') msg = 'I am interested in window installation/repair. Please contact me at the next available opportunity.'
      if (x == 'Siding') msg = 'I am interested in siding installation/repair. Please contact me at the next available opportunity.'
      if (x == 'Concrete') msg = 'I am interested in concrete installation/repair. Please contact me at the next available opportunity.'
      if (x == 'Remodeling') msg = 'I am interested in speaking to someone regarding a remodeling job. Please contact me at the next available opportunity.'
      if (x == 'Additions') msg = 'I am interested in speaking to someone regarding an addition to my existing structure. Please contact me at the next available opportunity.'
      $('#message').val(msg);

    }

})(jQuery); // End of use strict
