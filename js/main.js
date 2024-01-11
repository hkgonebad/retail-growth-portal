// document.addEventListener("DOMContentLoaded", yall);
//AOS
// AOS.init({
//     duration: 600
// });

// Get the header
var header = document.getElementById("header");
var body = document.body;

if (header) {
  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function updateStickyHeader() {
    if (window.pageYOffset > sticky) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
    updateLogoImage();
  }

  // Use an event listener instead of onscroll property
  window.addEventListener('scroll', function() {
    // Use requestAnimationFrame for performance
    window.requestAnimationFrame(updateStickyHeader);
  });
}

// Update the logo image based on the sticky and home page classes
function updateLogoImage() {
    const isHomePage = $("body").hasClass("home");
    const isSticky = $("body").hasClass("sticky");
    const isRegister = $("body").hasClass("regPage");
    const logoImgSrc = isHomePage && !isSticky ? "img/logo-white.png" : "img/logo.png";
    // $(".logo").find("img").attr("src", logoImgSrc);
}

//
//new WOW().init();

/////////////////////////////////////

///////////////////////////////////
$(function() {

    // Push Menu
    const overlay = $(".sidebar-overlay");
    const navMain = $("#navMain");

    // Header
    const headerUrl = "header.html";
    $("#header").load(headerUrl, function() {
        updateLogoImage();

        // Active
        const currentUrl = window.location.href;
        $(".navbar-nav .nav-link, .navbar-nav .dropdown-item").each(function () {
            if (this.href === currentUrl) {
                $(this).addClass("active");
            }
        });
    })

    // Footer
    const footerUrl = "footer.html";
    $("#footer").load(footerUrl, function() {
        // Footer content loaded successfully
        // $('#fraudModal').modal('show');
    });

    // Datepicker
    if ($('#dob').length > 0) {
        $('#dob').datepicker({
            format: 'dd/mm/yyyy',
        });
    }

    // Main Slider
    if ($('.mainSlider').length > 0) {

        $('.mainSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplayDuration: 3000,
            arrows: false,
            lazyLoad: 'ondemand',
            fade: true,
        });
    }

    // Slider
    if ($('.defaultTestiSlider').length > 0) {

        $('.defaultTestiSlider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplayDuration: 2000,
            arrows: false,
            lazyLoad: 'ondemand',

            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

 

    //Careers
    if ($('#actual-btn').length > 0) {
        const actualBtn = document.getElementById('actual-btn');

        const fileChosen = document.getElementById('file-chosen');

        actualBtn.addEventListener('change', function(){
            fileChosen.textContent = this.files[0].name
        })
    }


    // Careers Title
    $("#cOpenings").each(function(key){
        var careers = $(this).find('.card-header h2').text();

        console.log(careers);

        $('#careerTitle')
            .append($("<option></option>")
                       .attr("value", key)
                       .text(careers));
    })

    $('.btn-apply').on('click', function(){
        var career = $(this).parents('.card').find('.card-header h2').text();
        console.log(career);

        $('#careerTitle').val(career).change();
    })
    
});