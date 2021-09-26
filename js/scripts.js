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
  });
});
