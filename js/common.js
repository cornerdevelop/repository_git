

$(function(){
    
    $('.btn-side').click(function(){

        $('.pc-nav-side').stop().animate({right:'0%'},1000);
        $('.side-mask').stop().css({display:'block'});
        
    });

     $('.btn-exit').click(function(){

        $('.pc-nav-side').stop().animate({right:'-100%'},1000);
        $('.side-mask').stop().css({display:'none'});
     });

     $('.side-mask').click(function(){
      $('.pc-nav-side').stop().animate({right:'-100%'},1000);
      $('.side-mask').stop().css({display:'none'});
     });


     const swiper = new Swiper('.sub_swiper', {
        // Optional parameters
        direction: 'horizontal',
        
        loop: false,
        speed: 1500,
        

        // If we need pagination
         pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


});


