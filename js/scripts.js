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
   
    speed: 400,
    spaceBetween: 30,
    
    breakpoints: {
      320: {
        slidesPerView: 1,        
      },

      580: {
        slidesPerView: 2,        
      },

      920: {
        slidesPerView: 3,        
      },

      1180: {
        slidesPerView: 4,        
      }
    }
  });
    $(function() {
    var tab = $('#tabs .tabs-items > div'); 
    tab.hide().filter(':first').show(); 
    

    $('#tabs .tabs-nav a').click(function(){
      tab.hide(); 
      tab.filter(this.hash).show(); 
      $('#tabs .tabs-nav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click(); 
    
    }); 
  
})
