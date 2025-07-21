
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


const swiperContainer = document.querySelector('.swiper');

swiperContainer.addEventListener('mouseenter', () => {
  swiper.autoplay.start(); 
});

swiperContainer.addEventListener('mouseleave', () => {
  swiper.autoplay.stop(); 
});



let icon = document.getElementById("icon");

window.onscroll = function(){
  if(scrollY >= 500){
    icon.style.display="block"
  } else{
    icon.style.display="none"
  }
}
icon.onclick=function(){
  scrollTo({
    left:0,
    top:0,
behavior:"smooth"
  })
}
 