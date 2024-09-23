// header change color 
// $(document).ready(function () {
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if (scroll > 80) {
//             $("header").css("background", "linear-gradient(45deg, #4a16b9, #e018bc)");
//             $("header").css("padding", "4px 0");
//         }

//         else {
//             $("header").css("background", "transparent");
//             $("header").css("padding", "30px 0");
//         }
//     })
// })
// header change color 


$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: true,
    autoPlay: 5000
  });
});



// product slider 
$(document).ready(function () {
  var $carousel = $('#carouselExampleInterval');
  var $carouselItems = $carousel.find('.carousel-item');
  var $otherImgBoxes = $('.other_img_box');

  function updateActiveImage(index) {
    $otherImgBoxes.removeClass('active').eq(index).addClass('active');
  }

  $carousel.on('slid.bs.carousel', function (e) {
    var index = $(e.relatedTarget).index();
    updateActiveImage(index);
  });

  $otherImgBoxes.click(function () {
    var index = $(this).index();
    $carousel.carousel(index);
  });

  // Initialize the active class on the first image
  updateActiveImage(0);
});
// product slider 


$('.stat-number').each(function () {
  var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 5000,
    step: function (func) {
      $(this).text(parseFloat(func).toFixed(size));
    }
  });
});