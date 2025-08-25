import Swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

document.addEventListener("DOMContentLoaded", () => {
  const levelSwiper = new Swiper(".js-swiper-level", {
    modules: [Navigation, EffectCoverflow],
    direction: "vertical",
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 15,

    loop: true,
      touchReleaseOnEdges: true,   
   
    navigation: {
      nextEl: ".user-swiper-button-next",
      prevEl: ".user-swiper-button-prev",
      },
  
    breakpoints: {
      1200: {
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 26,
      },
    },
  });
});
