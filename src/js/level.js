import swiper from 'swiper';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

document.addEventListener("DOMContentLoaded", () => {
  const levelswiper = new swiper(".js-swiper-level", {
    modules: [Navigation, EffectCoverflow],
    direction: "vertical",
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 15,
      touchReleaseOnEdges: true,   
   
    navigation: {
      nextEl: ".user-js-swiper-button-next",
      prevEl: ".user-js-swiper-button-prev",
      },
      loop:false,
    breakpoints: {
      1200: {
        direction: "horizontal",
        slidesPerView: 3,
        spaceBetween: 26,
         loop:true,
      },
    },
  });
});
