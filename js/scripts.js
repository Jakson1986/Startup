$(document).ready(function () {
  $(".mobile_menu").on("click", function () {
    $(".header .navigation").slideToggle();
  });

  const swiper = new Swiper(".gallery", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 400,
    
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      480: {
        slidesPerView: 3,
        spaceBetween: 10
      },

      1180: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  
})
