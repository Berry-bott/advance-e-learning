document.addEventListener('DOMContentLoaded',()=>{

  const swiper = new Swiper('.swiper', {
      loop: true,          // Enables infinite scrolling
      autoplay: {
        delay: 3000,       // Auto slides every 3 seconds
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // effect: 'fade',
      
      breakpoints: {
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 4},
        },
  
        
    });
})


const swipper = new Swiper('.swipper', {
    loop: true,             // Enables infinite scrolling
    autoplay: {
      delay: 10000,       // Auto slides every 3 seconds
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'cube',
    
    breakpoints: {
        640: { slidesPerView: 1 },
        1024: { slidesPerView:1 },
      },

      
  });
